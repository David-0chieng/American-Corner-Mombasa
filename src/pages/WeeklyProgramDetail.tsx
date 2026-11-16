import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowRight,
  Backpack,
  History,
  CalendarDays,
  CalendarPlus,
  CheckCircle2,
  Clock3,
  ExternalLink,
  Info,
  Mail,
  MapPin,
  Mic2,
  Sparkles,
  Ticket,
  Users,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FacebookPost from "@/components/FacebookPost";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SCHEDULE_CHECKED, activities, type Activity, type Photo } from "@/data/weeklyProgram";
import { useSEO } from "@/hooks/useSEO";
import { CORNER_ADDRESS, calendarFile, formatSessionDate, googleCalendarUrl, isToday, sessionDateParts, upcomingDates, weekNumber } from "@/lib/programSchedule";
import NotFound from "@/pages/NotFound";

const CONTACT_EMAIL = "americancornermombasa@gmail.com";

const mailto = (subject: string, body: string) =>
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

const scheduleLabel = (program: Activity) =>
  program.suggested ? `Proposed for ${program.day}s` : `Every ${program.day}`;

const timeLabel = (program: Activity) => (program.time ? `${program.time} (Mombasa time)` : "To be confirmed");

const absolute = (src: string) => new URL(src, window.location.origin).href;

const structuredData = (program: Activity) => ({
  "@context": "https://schema.org",
  "@type": "EventSeries",
  "@id": `${window.location.origin}/weekly-program/${program.slug}#series`,
  url: `${window.location.origin}/weekly-program/${program.slug}`,
  name: `${program.title} — American Corner Mombasa`,
  description: program.description,
  image: [absolute(program.image.src)],
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  isAccessibleForFree: true,
  eventSchedule: {
    "@type": "Schedule",
    repeatFrequency: "P1W",
    byDay: `https://schema.org/${program.day}`,
    startDate: upcomingDates(program.day, 1, program.endTime)[0].toISOString().slice(0, 10),
    ...(program.startTime && program.endTime ? { startTime: `${program.startTime}:00`, endTime: `${program.endTime}:00` } : {}),
    scheduleTimezone: "Africa/Nairobi",
  },
  location: {
    "@type": "Place",
    name: "American Corner Mombasa",
    address: {
      "@type": "PostalAddress",
      streetAddress: "MEWA Information Center, My-Tac Hall, next to Masjid Musa, Majengo",
      addressLocality: "Mombasa",
      addressCountry: "KE",
    },
  },
  organizer: { "@type": "Organization", name: "American Corner Mombasa", url: window.location.origin },
});

const Credit = ({ photo, className = "" }: { photo: Photo; className?: string }) =>
  photo.credit ? (
    <p className={`text-[11px] leading-snug ${className}`}>
      Photo:{" "}
      {photo.creditUrl ? <a href={photo.creditUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{photo.credit}</a> : photo.credit}
      {photo.license && (
        <>
          {" · "}
          {photo.licenseUrl ? <a href={photo.licenseUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{photo.license}</a> : photo.license}
        </>
      )}
    </p>
  ) : null;

const SectionHeading = ({ id, eyebrow, title, intro }: { id: string; eyebrow: string; title: string; intro?: string }) => (
  <div className="max-w-3xl">
    <p className="text-xs font-bold uppercase tracking-[.22em] text-corner-600">{eyebrow}</p>
    <h2 id={id} className="mt-3 text-2xl font-bold text-gray-900 md:text-3xl">{title}</h2>
    {intro && <p className="mt-3 leading-relaxed text-gray-600">{intro}</p>}
  </div>
);

const WeeklyProgramDetail = () => {
  const { slug } = useParams();
  const program = activities.find((activity) => activity.slug === slug);

  useSEO({
    title: program ? `${program.title} | American Corner Mombasa` : "Program not found | American Corner Mombasa",
    description: program?.description,
    url: window.location.href,
    image: program ? program.image.src : "/media/og/american-corner-mombasa.png",
    structuredData: program && !program.suggested ? structuredData(program) : undefined,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!program) return <NotFound />;

  const Icon = program.icon;
  const sessions = program.suggested ? [] : upcomingDates(program.day, 6, program.endTime);
  const related = [
    ...activities.filter((activity) => activity.slug !== program.slug && activity.category === program.category),
    ...activities.filter((activity) => activity.slug !== program.slug && activity.category !== program.category),
  ].slice(0, 3);

  const downloadCalendar = () => {
    const url = URL.createObjectURL(new Blob([calendarFile(program)], { type: "text/calendar;charset=utf-8" }));
    const link = Object.assign(document.createElement("a"), { href: url, download: `ac-mombasa-${program.slug}.ics` });
    link.click();
    URL.revokeObjectURL(url);
  };

  const facts = [
    { icon: CalendarDays, label: "When", value: scheduleLabel(program) },
    { icon: Clock3, label: "Time", value: timeLabel(program) },
    { icon: MapPin, label: "Where", value: "MEWA Information Center, Majengo" },
    { icon: Users, label: "Who", value: program.level },
    { icon: Ticket, label: "Cost", value: "Free" },
  ];

  const sections = [
    ["overview", "Overview"],
    [program.suggested ? "status" : "upcoming", program.suggested ? "Status" : "Upcoming sessions"],
    ...(program.pastSessions?.length ? [["past", "Past sessions"]] : []),
    ["speakers", "Speakers"],
    ["topics", "Topics"],
    ["expect", "What to expect"],
    ["resources", "Resources"],
    ["faq", "FAQ"],
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <section className="relative isolate overflow-hidden bg-corner-950 text-white">
          <img
            src={program.image.src}
            alt=""
            className="absolute inset-0 -z-20 h-full w-full object-cover"
            style={{ objectPosition: program.image.position ?? "center" }}
            onError={(event) => { event.currentTarget.src = program.art; }}
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-corner-950 via-corner-950/90 to-corner-950/40" />
          <div className="container-custom py-12 md:py-20">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-blue-200">
              <Link to="/programs" className="hover:text-white">Programs</Link>
              <span aria-hidden="true">/</span>
              <Link to="/events" className="hover:text-white">Weekly program</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page" className="text-white">{program.title}</span>
            </nav>
            <div className="mt-8 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                  <Icon size={14} aria-hidden="true" /> {program.category}
                </span>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${program.suggested ? "bg-amber-300 text-amber-950" : "bg-emerald-300 text-emerald-950"}`}>
                  {program.suggested ? "Proposed — awaiting confirmation" : "Weekly program"}
                </span>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-corner-900">Free</span>
              </div>
              <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-6xl">{program.title}</h1>
              <p className="mt-4 text-xl font-medium text-blue-100 md:text-2xl">{program.tagline}</p>
              <p className="mt-5 max-w-2xl leading-relaxed text-blue-100/90">{program.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={mailto(`Enquiry: ${program.title}`, `Hello American Corner Mombasa,\n\nI would like to join ${program.title}. Please share the next session time and any requirements.\n\nThank you.`)}
                  className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 font-semibold text-corner-900 hover:bg-blue-50"
                >
                  <Mail size={18} aria-hidden="true" /> {program.suggested ? "Register your interest" : "Ask about the next session"}
                </a>
                {!program.suggested && (
                  <>
                    <button type="button" onClick={downloadCalendar} className="inline-flex items-center gap-2 rounded-md border border-white/40 px-6 py-3 font-semibold hover:bg-white/10">
                      <CalendarPlus size={18} aria-hidden="true" /> Add to calendar
                    </button>
                    <a href={googleCalendarUrl(program)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold text-blue-100 underline-offset-4 hover:underline">
                      Google Calendar <ExternalLink size={14} aria-hidden="true" />
                    </a>
                  </>
                )}
              </div>
            </div>
            <dl className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/15 sm:grid-cols-2 lg:grid-cols-5">
              {facts.map(({ icon: FactIcon, label, value }) => (
                <div key={label} className="bg-corner-950/80 p-5 backdrop-blur">
                  <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-200"><FactIcon size={15} aria-hidden="true" /> {label}</dt>
                  <dd className="mt-2 text-sm font-semibold leading-snug text-white">{value}</dd>
                </div>
              ))}
            </dl>
            <Credit photo={program.image} className="mt-4 text-right text-blue-200/80" />
          </div>
        </section>

        <nav aria-label="On this page" className="sticky top-16 z-30 border-b border-slate-200 bg-white/95 backdrop-blur md:top-[116px]">
          <div className="container-custom flex gap-1 overflow-x-auto py-2">
            {sections.map(([id, label]) => (
              <a key={id} href={`#${id}`} className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium text-gray-600 hover:bg-corner-50 hover:text-corner-700">{label}</a>
            ))}
          </div>
        </nav>

        <section id="overview" aria-labelledby="overview-title" className="scroll-mt-32 md:scroll-mt-44 py-16 md:py-20">
          <div className="container-custom grid gap-10 lg:grid-cols-[1.4fr_.9fr]">
            <div>
              <SectionHeading id="overview-title" eyebrow="About the program" title={`Why join ${program.title}?`} />
              <div className="mt-6 space-y-4 leading-relaxed text-gray-700">
                {program.overview.split("\n\n").map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              {program.whyItMatters.length > 0 && (
                <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50/60 p-6">
                  <h3 className="flex items-center gap-2 font-bold text-corner-900"><Sparkles size={18} aria-hidden="true" /> Why it matters</h3>
                  <ul className="mt-4 space-y-3">
                    {program.whyItMatters.map(({ text, source }) => (
                      <li key={text} className="text-sm leading-relaxed text-gray-700">
                        {text}{" "}
                        <a href={source.url} target="_blank" rel="noopener noreferrer" className="whitespace-nowrap font-semibold text-corner-600 hover:underline">{source.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <aside className="h-fit rounded-2xl border border-slate-200 bg-slate-50 p-6 lg:sticky lg:top-48">
              <h3 className="text-lg font-bold text-gray-900">At a glance</h3>
              <dl className="mt-5 space-y-4 text-sm">
                {[
                  ["Schedule", scheduleLabel(program)],
                  ["Time", timeLabel(program)],
                  ["Session length", program.duration],
                  ["Format", program.format],
                  ["Cost", "Free"],
                  ["Level", program.level],
                  ["Prerequisites", program.prerequisites],
                  ["Venue", CORNER_ADDRESS],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt className="font-semibold text-gray-500">{label}</dt>
                    <dd className="mt-1 text-gray-900">{value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 border-t border-slate-200 pt-5">
                <h4 className="text-sm font-semibold text-gray-500">Who it's for</h4>
                <ul className="mt-3 space-y-2">
                  {program.audience.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-gray-800"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-600" aria-hidden="true" />{item}</li>
                  ))}
                </ul>
              </div>
              {program.timeNote && (
                <p className="mt-5 rounded-lg bg-white p-3 text-xs leading-relaxed text-gray-600">
                  {program.timeNote.text}{" "}
                  <a href={program.timeNote.source.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-corner-600 hover:underline">{program.timeNote.source.label}</a>
                </p>
              )}
            </aside>
          </div>
        </section>

        {program.suggested ? (
          <section id="status" aria-labelledby="status-title" className="scroll-mt-32 md:scroll-mt-44 bg-amber-50 py-14">
            <div className="container-custom flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <h2 id="status-title" className="flex items-center gap-2 text-2xl font-bold text-amber-950"><Info size={22} aria-hidden="true" /> Proposed for Wednesdays</h2>
                <p className="mt-3 leading-relaxed text-amber-900">This program is a suggestion for the Corner's Wednesday slot and has not been confirmed. No session dates have been scheduled. Register your interest and the Corner can let you know if it goes ahead.</p>
              </div>
              <a href={mailto(`Interest: ${program.title}`, `Hello American Corner Mombasa,\n\nI am interested in ${program.title} on Wednesdays. Please let me know if it is confirmed.\n\nThank you.`)} className="inline-flex shrink-0 items-center gap-2 rounded-md bg-amber-900 px-6 py-3 font-semibold text-white hover:bg-amber-950">
                <Mail size={18} aria-hidden="true" /> Register interest
              </a>
            </div>
          </section>
        ) : (
          <section id="upcoming" aria-labelledby="upcoming-title" className="scroll-mt-32 md:scroll-mt-44 bg-slate-50 py-16 md:py-20">
            <div className="container-custom">
              <SectionHeading
                id="upcoming-title"
                eyebrow="Program events"
                title="Upcoming sessions"
                intro={`Topics rotate each week. Topics below are proposed from the program's topic list; final topics, facilitators and times are confirmed by the Corner. Schedule information checked ${SCHEDULE_CHECKED}.`}
              />
              <ol className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {sessions.map((date, index) => {
                  const topic = program.topics[weekNumber(date) % program.topics.length];
                  const { day, month } = sessionDateParts(date);
                  return (
                    <li key={date.toISOString()} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                      <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-corner-600 text-white">
                        <span className="text-2xl font-extrabold leading-none">{day}</span>
                        <span className="text-xs font-semibold uppercase">{month}</span>
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold uppercase tracking-wider text-corner-600">{index === 0 ? (isToday(date) ? "Today" : "Next session") : index === 1 ? "The week after" : `In ${index} weeks`}</p>
                        <h3 className="mt-1 font-bold leading-snug text-gray-900">{topic.title}</h3>
                        <p className="mt-1 text-sm text-gray-600">{formatSessionDate(date)} · {program.time ?? "Time to be confirmed"}</p>
                        <p className="mt-2 text-xs text-gray-500">Proposed topic · confirm with the Corner</p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </section>
        )}

        {program.pastSessions && program.pastSessions.length > 0 && (
          <section id="past" aria-labelledby="past-title" className="scroll-mt-32 py-16 md:scroll-mt-44 md:py-20">
            <div className="container-custom">
              <SectionHeading id="past-title" eyebrow="Program history" title="Recent and past sessions" intro="Verified activities from the Corner's official channels and other published sources." />
              <ol className="mt-8 grid gap-4 md:grid-cols-2">
                {program.pastSessions.map((session) => (
                  <li key={`${session.date}-${session.title}`} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-corner-50 text-corner-600"><History size={20} aria-hidden="true" /></span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-corner-600">{session.date}</p>
                      <h3 className="mt-1 font-bold text-gray-900">{session.title}</h3>
                      {session.detail && <p className="mt-1 text-sm leading-relaxed text-gray-600">{session.detail}</p>}
                      <a href={session.source.url} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-corner-600 hover:underline">
                        {session.source.label} <ExternalLink size={12} aria-hidden="true" />
                      </a>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        )}

        <section id="speakers" aria-labelledby="speakers-title" className="scroll-mt-32 bg-slate-50 py-16 md:scroll-mt-44 md:py-20">
          <div className="container-custom">
            <SectionHeading
              id="speakers-title"
              eyebrow="Speakers & facilitators"
              title="Who leads the sessions"
              intro="Named facilitators and speakers are people publicly credited by the Corner or published sources. Guest speakers for upcoming sessions are confirmed by the Corner and announced on its official channels; role profiles describe who typically leads each part of the program."
            />
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {program.speakers.map((speaker) => (
                <article key={`${speaker.role}-${speaker.name ?? ""}`} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-4">
                    <img src="/media/illustrations/person.svg" alt="" className="h-14 w-14 rounded-full" />
                    <div className="min-w-0">
                      <h3 className="font-bold leading-snug text-gray-900">{speaker.name ?? speaker.role}</h3>
                      {speaker.name && <p className="text-sm text-gray-600">{speaker.role}</p>}
                      {speaker.organization && <p className="text-sm text-gray-500">{speaker.organization}</p>}
                    </div>
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-600">{speaker.bio}</p>
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-2">
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${speaker.status === "past" ? "bg-slate-100 text-slate-700" : speaker.status === "current" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-800"}`}>
                      {speaker.status === "past" ? `Past session · ${speaker.date}` : speaker.status === "current" ? `Facilitator · ${speaker.date}` : "Guest role · announced per session"}
                    </span>
                    {speaker.source && <a href={speaker.source.url} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-corner-600 hover:underline">{speaker.source.label}</a>}
                  </div>
                </article>
              ))}
              <article className="flex flex-col justify-between rounded-2xl border-2 border-dashed border-corner-200 bg-corner-50/60 p-6">
                <div>
                  <Mic2 size={28} className="text-corner-600" aria-hidden="true" />
                  <h3 className="mt-4 font-bold text-gray-900">Share your expertise</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{program.speakerCall}</p>
                </div>
                <a
                  href={mailto(`Speaker proposal: ${program.title}`, `Hello American Corner Mombasa,\n\nI would like to lead or speak at ${program.title}.\n\nProposed topic:\nAbout me:\nAvailability:\n\nThank you.`)}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-corner-600 hover:underline"
                >
                  Propose a session <ArrowRight size={15} aria-hidden="true" />
                </a>
              </article>
            </div>
          </div>
        </section>

        <section id="topics" aria-labelledby="topics-title" className="scroll-mt-32 py-16 md:scroll-mt-44 md:py-20">
          <div className="container-custom">
            <SectionHeading id="topics-title" eyebrow="Topic list" title="What we cover" intro="A rotating list of session topics. The Corner may adapt topics to participants' interests and skill levels." />
            <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {program.topics.map((topic, index) => (
                <li key={topic.title} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-corner-100 text-sm font-bold text-corner-700">{index + 1}</span>
                  <h3 className="mt-4 font-bold text-gray-900">{topic.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{topic.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="expect" aria-labelledby="expect-title" className="scroll-mt-32 bg-slate-50 py-16 md:scroll-mt-44 md:py-20">
          <div className="container-custom grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <SectionHeading id="expect-title" eyebrow="What to expect" title="A typical session" intro="An example of how a session can run. Timings vary from week to week." />
              <ol className="relative mt-8 space-y-6 border-l-2 border-corner-100 pl-6">
                {program.agenda.map((item) => (
                  <li key={item.title} className="relative">
                    <span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full border-4 border-white bg-corner-600 shadow" aria-hidden="true" />
                    <p className="text-xs font-semibold uppercase tracking-wider text-corner-600">{item.time}</p>
                    <h3 className="mt-1 font-bold text-gray-900">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600">{item.detail}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="space-y-5">
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-6">
                <h3 className="flex items-center gap-2 font-bold text-emerald-950"><CheckCircle2 size={18} aria-hidden="true" /> You'll leave able to</h3>
                <ul className="mt-4 space-y-2">
                  {program.outcomes.map((item) => <li key={item} className="flex gap-2 text-sm text-gray-800"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" aria-hidden="true" />{item}</li>)}
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="flex items-center gap-2 font-bold text-gray-900"><Backpack size={18} className="text-corner-600" aria-hidden="true" /> What to bring</h3>
                <ul className="mt-4 space-y-2">
                  {program.bring.map((item) => <li key={item} className="flex gap-2 text-sm text-gray-700"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-corner-500" aria-hidden="true" />{item}</li>)}
                </ul>
              </div>
              <div className="rounded-2xl border border-amber-100 bg-amber-50/60 p-6">
                <h3 className="flex items-center gap-2 font-bold text-amber-950"><Info size={18} aria-hidden="true" /> Good to know</h3>
                <ul className="mt-4 space-y-2">
                  {program.goodToKnow.map((item) => <li key={item} className="flex gap-2 text-sm text-gray-700"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600" aria-hidden="true" />{item}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {(program.gallery?.length || program.posts?.length || program.videos?.length) ? (
          <section aria-labelledby="media-title" className="py-16 md:py-20">
            <div className="container-custom">
              <SectionHeading id="media-title" eyebrow="Gallery" title="In pictures" intro="Posts and videos from the Corner's official channels, plus openly licensed photos from Kenya and other American Spaces that illustrate the program. Licensed photos are illustrative and were not taken at the Corner." />
              {program.gallery && program.gallery.length > 0 && (
                <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {program.gallery.map((photo) => (
                    <figure key={photo.src} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                      <img src={photo.src} alt={photo.alt} loading="lazy" className="aspect-[4/3] w-full object-cover" style={{ objectPosition: photo.position ?? "center" }} />
                      <figcaption className="p-4 text-sm text-gray-700">
                        {photo.caption ?? photo.alt}
                        <Credit photo={photo} className="mt-2 text-gray-500" />
                      </figcaption>
                    </figure>
                  ))}
                </div>
              )}
              {program.videos && program.videos.length > 0 && (
                <div className="mt-8 grid gap-6 lg:grid-cols-2">
                  {program.videos.map((video) => (
                    <figure key={video.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                        title={video.title}
                        loading="lazy"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="aspect-video w-full"
                      />
                      <figcaption className="p-4 text-sm text-gray-700">{video.title}</figcaption>
                    </figure>
                  ))}
                </div>
              )}
              {program.posts && program.posts.length > 0 && (
                <div className="mt-8 grid gap-6 lg:grid-cols-2">
                  {program.posts.map((post) => <FacebookPost key={post.url} {...post} />)}
                </div>
              )}
            </div>
          </section>
        ) : null}

        <section id="resources" aria-labelledby="resources-title" className="scroll-mt-32 bg-slate-50 py-16 md:scroll-mt-44 md:py-20">
          <div className="container-custom">
            <SectionHeading id="resources-title" eyebrow="Keep learning" title="Free resources" intro="Independent resources for practice between sessions. They are not necessarily the materials used at the Corner." />
            <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {program.resources.map((resource) => (
                <li key={resource.url}>
                  <a href={resource.url} target="_blank" rel="noopener noreferrer" className="group flex h-full flex-col rounded-2xl border border-slate-200 p-5 transition hover:border-corner-300 hover:shadow-md">
                    <span className="flex items-start justify-between gap-3 font-bold text-gray-900 group-hover:text-corner-700">{resource.label}<ExternalLink size={16} className="mt-1 shrink-0" aria-hidden="true" /></span>
                    <span className="mt-2 text-sm leading-relaxed text-gray-600">{resource.description}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="faq" aria-labelledby="faq-title" className="scroll-mt-32 py-16 md:scroll-mt-44 md:py-20">
          <div className="container-custom max-w-4xl">
            <SectionHeading id="faq-title" eyebrow="Questions" title="Frequently asked questions" />
            <Accordion type="single" collapsible className="mt-6 rounded-2xl border border-slate-200 bg-white px-6">
              {program.faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`faq-${index}`} className={index === program.faqs.length - 1 ? "border-b-0" : undefined}>
                  <AccordionTrigger className="text-left font-semibold text-gray-900">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section aria-labelledby="related-title" className="bg-slate-50 py-16 md:py-20">
          <div className="container-custom">
            <SectionHeading id="related-title" eyebrow="Explore more" title="More from the weekly program" />
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {related.map((item) => (
                <Link key={item.slug} to={`/weekly-program/${item.slug}`} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg">
                  <img src={item.image.src} alt="" loading="lazy" className="aspect-[16/9] w-full object-cover transition duration-500 group-hover:scale-105" style={{ objectPosition: item.image.position ?? "center" }} onError={(event) => { event.currentTarget.src = item.art; }} />
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-corner-600">{item.suggested ? "Proposed" : scheduleLabel(item)}</p>
                    <h3 className="mt-1 font-bold text-gray-900">{item.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{item.tagline}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-corner-950 py-14 text-white">
          <div className="container-custom flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold">Plan your visit</h2>
              <p className="mt-2 flex items-start gap-2 text-blue-100"><MapPin size={18} className="mt-0.5 shrink-0" aria-hidden="true" /> {CORNER_ADDRESS}</p>
              <p className="mt-3 text-sm leading-relaxed text-blue-100/90">Walk-ins are welcome during opening hours. Opening hours are not published officially, so call or email to confirm before you visit. Need support to take part? Let the Corner know in advance.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="https://www.google.com/maps/search/?api=1&query=MEWA+Information+Center+Majengo+Mombasa" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-semibold text-corner-900 hover:bg-blue-50">Get directions <ExternalLink size={15} aria-hidden="true" /></a>
              <a href="tel:+254722819795" className="inline-flex items-center gap-2 rounded-md border border-white/40 px-5 py-3 font-semibold hover:bg-white/10">Call +254 722 819 795</a>
              <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-2 rounded-md border border-white/40 px-5 py-3 font-semibold hover:bg-white/10">Email the Corner</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WeeklyProgramDetail;
