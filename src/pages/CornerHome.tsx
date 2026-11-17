import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, CheckCircle2, Clock3, Quote } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FacebookPost from "@/components/FacebookPost";
import VisitSection from "@/components/corner/VisitSection";
import { PhotoCredit, SectionHeading, SourceLinks } from "@/components/corner/CornerUI";
import { contact, getInvolved, homeFeatures, latestPosts, welcomeQuote } from "@/data/corner";
import { photos } from "@/data/photos";
import { activities, type Activity } from "@/data/weeklyProgram";
import { useSEO } from "@/hooks/useSEO";
import { hasEndedToday, mombasaWeekday } from "@/lib/programSchedule";

const WEEK = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] as const;

const mailto = (subject: string) => `mailto:${contact.email}?subject=${encodeURIComponent(subject)}`;

const nextUp = (): { heading: string; items: Activity[] } => {
  const today = mombasaWeekday();
  const open = activities.filter((activity) => activity.day === today && !activity.suggested && !hasEndedToday(activity.endTime));
  if (open.length) return { heading: `Today · ${today}`, items: open };
  for (let offset = 1; offset <= 7; offset++) {
    const day = mombasaWeekday(offset);
    const items = activities.filter((activity) => activity.day === day && !activity.suggested);
    if (items.length) return { heading: offset === 1 ? `Tomorrow · ${day}` : `Next · ${day}`, items };
  }
  return { heading: "This week", items: [] };
};

const CornerHome = () => {
  useSEO({
    title: "American Corner Mombasa — free programs in Majengo, Mombasa",
    description: "Free weekly programs in technology, English, entrepreneurship and games at American Corner Mombasa, the MEWA Information Center in Majengo.",
    url: window.location.href,
    image: "/media/og/american-corner-mombasa.png",
  });

  const hero = photos["mombasa-2"];
  const { heading, items } = nextUp();

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="relative isolate overflow-hidden bg-corner-950 text-white">
          <img src={hero.src} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-corner-950 via-corner-950/85 to-corner-950/45" />
          <div className="container-custom grid gap-10 py-16 md:py-24 lg:grid-cols-[1.3fr_.7fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.25em] text-blue-200">An American Space in Mombasa, Kenya</p>
              <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">A place to connect, learn and grow.</h1>
              <figure className="mt-6 max-w-xl border-l-4 border-white/40 pl-4">
                <blockquote className="text-lg text-blue-50 md:text-xl">“You will be educated, inspired and entertained.”</blockquote>
                <figcaption className="mt-1 text-sm text-blue-200">— American Corner Mombasa</figcaption>
              </figure>
              <p className="mt-6 max-w-xl leading-relaxed text-blue-100">Free weekly programs in technology, English, entrepreneurship and games at the MEWA Information Center in Majengo.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/events" className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 font-semibold text-corner-900 hover:bg-blue-50">See the weekly program <ArrowRight size={17} aria-hidden="true" /></Link>
                <a href="#visit" className="inline-flex items-center gap-2 rounded-md border border-white/40 px-6 py-3 font-semibold hover:bg-white/10">Plan your visit</a>
              </div>
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-blue-100">
                {["Free and open to all", "Walk-ins welcome", "Majengo, Mombasa"].map((item) => (
                  <li key={item} className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-300" aria-hidden="true" />{item}</li>
                ))}
              </ul>
            </div>

            <aside aria-labelledby="next-up-title" className="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur-md">
              <p className="text-xs font-bold uppercase tracking-[.2em] text-blue-200">At the Corner</p>
              <h2 id="next-up-title" className="mt-2 text-xl font-bold">{heading}</h2>
              <ul className="mt-5 space-y-3">
                {items.map(({ slug, title, time, icon: Icon }) => (
                  <li key={slug}>
                    <Link to={`/weekly-program/${slug}`} className="group flex items-center gap-3 rounded-xl bg-white/10 p-3 transition hover:bg-white/20">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-corner-700"><Icon size={20} aria-hidden="true" /></span>
                      <span className="min-w-0">
                        <span className="block font-semibold leading-snug">{title}</span>
                        <span className="flex items-center gap-1 text-xs text-blue-100"><Clock3 size={12} aria-hidden="true" />{time ?? "Time to be confirmed"}</span>
                      </span>
                      <ArrowRight size={16} className="ml-auto shrink-0 opacity-70 transition group-hover:translate-x-0.5" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs leading-relaxed text-blue-200">Times are confirmed by the Corner. Call or email before visiting.</p>
            </aside>
          </div>
          <PhotoCredit photo={hero} className="container-custom pb-3 text-right text-blue-200/70" />
        </section>

        <section aria-labelledby="week-title" className="bg-white py-16 md:py-20">
          <div className="container-custom">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <SectionHeading id="week-title" eyebrow="Every week" title="This week at the Corner" intro="Nine free programs, Monday to Saturday. Choose one to see upcoming sessions, speakers and topics." />
              <Link to="/events" className="inline-flex shrink-0 items-center gap-2 font-semibold text-corner-600 hover:underline">Full weekly program <ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
            <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
              {WEEK.map((day) => (
                <li key={day} className={`rounded-2xl border p-4 ${day === mombasaWeekday() ? "border-corner-500 bg-corner-50" : "border-slate-200 bg-slate-50"}`}>
                  <p className="flex items-center gap-2 text-sm font-bold text-corner-900"><CalendarDays size={16} aria-hidden="true" />{day}{day === mombasaWeekday() && <span className="rounded-full bg-corner-600 px-2 py-0.5 text-[10px] font-semibold uppercase text-white">Today</span>}</p>
                  <ul className="mt-3 space-y-2">
                    {activities.filter((activity) => activity.day === day).map(({ slug, title, time, suggested }) => (
                      <li key={slug}>
                        <Link to={`/weekly-program/${slug}`} className="block rounded-lg bg-white p-3 shadow-sm transition hover:shadow-md">
                          <span className="block text-sm font-semibold leading-snug text-gray-900">{title}</span>
                          <span className="mt-1 block text-xs text-gray-600">{suggested ? "Proposed" : time ?? "Time TBC"}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section aria-labelledby="do-title" className="bg-slate-50 py-16 md:py-20">
          <div className="container-custom">
            <SectionHeading id="do-title" eyebrow="What you can do here" title="Learn something new, meet new people" />
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {homeFeatures.map(({ title, text, to, photo }) => (
                <li key={title}>
                  <Link to={to} className="group block h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                    <img src={photos[photo].src} alt="" loading="lazy" className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105" />
                    <span className="block p-5">
                      <span className="flex items-center justify-between gap-3 text-lg font-bold text-gray-900 group-hover:text-corner-700">{title}<ArrowRight size={18} className="shrink-0" aria-hidden="true" /></span>
                      <span className="mt-2 block text-sm leading-relaxed text-gray-600">{text}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-gray-500">Photos are openly licensed and illustrate each program; they were not taken at the Corner. <Link to="/photo-credits" className="underline">Photo credits</Link></p>
          </div>
        </section>

        <section aria-labelledby="welcome-title" className="bg-white py-16 md:py-20">
          <div className="container-custom grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <SectionHeading id="welcome-title" eyebrow="Welcome" title="Rooted in Majengo, connected to the world" />
              <figure className="mt-6 rounded-2xl bg-corner-50 p-6">
                <Quote size={28} className="text-corner-300" aria-hidden="true" />
                <blockquote className="mt-3 text-lg leading-relaxed text-gray-800">{welcomeQuote.text}</blockquote>
                <figcaption className="mt-3"><SourceLinks sources={[welcomeQuote.source]} /></figcaption>
              </figure>
              <p className="mt-6 leading-relaxed text-gray-600">Hosted by the Muslim Education and Welfare Association (MEWA) and supported by the U.S. Embassy in Nairobi, the Corner is one of nearly 600 American Spaces around the world.</p>
              <Link to="/about" className="mt-6 inline-flex items-center gap-2 font-semibold text-corner-600 hover:underline">Our story, host and people <ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
            <figure className="overflow-hidden rounded-2xl border border-slate-200">
              <img src={photos["mewa-banner-2010"].src} alt={photos["mewa-banner-2010"].alt} loading="lazy" className="aspect-[3/2] w-full object-cover" />
              <figcaption className="bg-white p-4 text-sm text-gray-700">
                The MEWA Information Centre and the U.S. Embassy partnered on a volunteer workshop in Mombasa in December 2010.
                <PhotoCredit photo={photos["mewa-banner-2010"]} className="mt-2 text-gray-500" />
              </figcaption>
            </figure>
          </div>
        </section>

        <section aria-labelledby="latest-title" className="bg-slate-50 py-16 md:py-20">
          <div className="container-custom">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <SectionHeading id="latest-title" eyebrow="Latest from the Corner" title="Recent posts and videos" intro="From American Corner Mombasa's official Facebook page." />
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                {contact.social.map((item) => <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" className="font-semibold text-corner-600 hover:underline">{item.label}</a>)}
              </div>
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {latestPosts.map((post) => <FacebookPost key={post.url} {...post} />)}
            </div>
          </div>
        </section>

        <section aria-labelledby="involved-title" className="bg-white py-16 md:py-20">
          <div className="container-custom">
            <SectionHeading id="involved-title" eyebrow="Get involved" title="Help the Corner grow" />
            <ul className="mt-10 grid gap-6 md:grid-cols-3">
              {getInvolved.map(({ icon: Icon, title, text, source, subject }) => (
                <li key={title} className="flex flex-col rounded-2xl border border-slate-200 p-6">
                  <Icon size={28} className="text-corner-600" aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-bold text-gray-900">{title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{text}</p>
                  {source && <SourceLinks sources={[source]} className="mt-3" />}
                  <a href={mailto(subject)} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-corner-600 hover:underline">Email the Corner <ArrowRight size={15} aria-hidden="true" /></a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <VisitSection />
      </main>
      <Footer />
    </div>
  );
};

export default CornerHome;
