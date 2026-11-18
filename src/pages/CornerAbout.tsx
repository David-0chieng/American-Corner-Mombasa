import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Building2, ExternalLink, Globe2, MapPin, UserRound } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VisitSection from "@/components/corner/VisitSection";
import { CreditedPhoto, PhotoCredit, SectionHeading, SourceLinks } from "@/components/corner/CornerUI";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { aboutFaqs, keyFacts, kenyaSpaces, mewaFacts, networkFacts, partners, pillars, recentGuests, sources, story, team } from "@/data/corner";
import { photos } from "@/data/photos";
import { useSEO } from "@/hooks/useSEO";

const sections = [
  ["who-we-are", "Who we are"],
  ["what-we-do", "What we do"],
  ["host", "Our host"],
  ["story", "Our story"],
  ["people", "People"],
  ["partners", "Partners"],
  ["network", "Network"],
  ["visit", "Visit"],
  ["faq", "FAQ"],
];

const CornerAbout = () => {
  const { hash, key } = useLocation();

  useSEO({
    title: "About American Corner Mombasa",
    description: "The story, host, people, partners and network behind American Corner Mombasa, an American Space at the MEWA Information Center in Majengo.",
    url: window.location.href,
    image: "/media/og/american-corner-mombasa.png",
  });

  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
  }, [hash, key]);

  const centre = photos["mewa-centre-2010"];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-corner-950 via-corner-900 to-blue-950 text-white">
          <div className="container-custom grid gap-12 py-14 md:py-20 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div>
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-blue-200">
                <Link to="/" className="hover:text-white">Home</Link><span aria-hidden="true">/</span><span aria-current="page" className="text-white">About</span>
              </nav>
              <p className="mt-8 text-xs font-bold uppercase tracking-[.25em] text-blue-200">About American Corner Mombasa</p>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">An American Space rooted in Majengo</h1>
              <p className="mt-6 text-lg leading-relaxed text-blue-100">
                American Corner Mombasa is a free learning and cultural exchange space at the MEWA Information Center in Majengo, hosted by the Muslim Education and Welfare Association (MEWA).
              </p>
              <p className="mt-4 leading-relaxed text-blue-100/90">
                As part of the U.S. Department of State's American Spaces network, it connects people in Mombasa with English learning, information on studying in the United States, skills training and cultural programs.
              </p>
            </div>
            <figure className="overflow-hidden rounded-2xl border border-white/15 bg-white/5">
              <img src={centre.src} alt={centre.alt} className="aspect-[3/2] w-full object-cover" />
              <figcaption className="p-4 text-sm text-blue-100">
                The MEWA Information Centre, sponsored by the U.S. Embassy, in 2010.
                <PhotoCredit photo={centre} className="mt-1 text-blue-200/80" />
              </figcaption>
            </figure>
          </div>
        </section>

        <nav aria-label="On this page" className="sticky top-16 z-30 border-b border-slate-200 bg-white/95 backdrop-blur md:top-[116px]">
          <div className="container-custom flex gap-1 overflow-x-auto py-2">
            {sections.map(([id, label]) => (
              <a key={id} href={`#${id}`} className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium text-gray-600 hover:bg-corner-50 hover:text-corner-700">{label}</a>
            ))}
          </div>
        </nav>

        <section aria-label="Key facts" className="border-b border-slate-200 bg-white">
          <dl className="container-custom grid grid-cols-2 gap-px py-10 lg:grid-cols-4">
            {keyFacts.map(({ value, label, source, to }) => (
              <div key={label} className="px-4 py-3 text-center">
                <dt className="sr-only">{label}</dt>
                <dd className="text-4xl font-extrabold text-corner-700 md:text-5xl">{value}</dd>
                <dd className="mt-2 text-sm text-gray-600">{label}</dd>
                <dd className="mt-1 flex justify-center">{source ? <SourceLinks sources={[source]} /> : to ? <Link to={to} className="text-xs font-semibold text-corner-600 hover:underline">See the schedule</Link> : null}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="who-we-are" aria-labelledby="who-title" className="scroll-mt-32 py-16 md:scroll-mt-44 md:py-20">
          <div className="container-custom grid gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionHeading id="who-title" eyebrow="Who we are" title="A partner-hosted American Corner" />
            <div className="space-y-5 leading-relaxed text-gray-700">
              <p>
                American Corners are partner locations — often local libraries, cultural venues or universities — managed by U.S. embassies with local institutions.
                In Mombasa, that partner is MEWA, and the Corner operates within MEWA's library and information center.
              </p>
              <figure className="rounded-2xl border-l-4 border-corner-500 bg-corner-50 p-5">
                <blockquote className="text-gray-800">The Corner describes itself as a resource center for “Technology and Innovation, Leadership &amp; Governance, Health, and American culture.”</blockquote>
                <figcaption className="mt-2"><SourceLinks sources={[sources.facebook]} /></figcaption>
              </figure>
              <p>Everyone is welcome. American Spaces provide free and open access to their resources and programs.</p>
              <SourceLinks sources={[sources.whatWeDo, sources.onePager]} />
            </div>
          </div>
        </section>

        <section id="what-we-do" aria-labelledby="what-title" className="scroll-mt-32 bg-slate-50 py-16 md:scroll-mt-44 md:py-20">
          <div className="container-custom">
            <SectionHeading id="what-title" eyebrow="What we do" title="Six areas of work" intro="American Spaces focus on six program pillars. Here is how they come to life in Mombasa." />
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {pillars.map(({ icon: Icon, title, text, links }) => (
                <li key={title} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-corner-600"><Icon size={24} aria-hidden="true" /></span>
                  <h3 className="mt-5 text-lg font-bold text-gray-900">{title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{text}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {links.map((link) => (
                      <li key={link.to}><Link to={link.to} className="inline-flex rounded-full bg-corner-50 px-3 py-1 text-xs font-semibold text-corner-700 hover:bg-corner-100">{link.label}</Link></li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            <SourceLinks sources={[sources.whatWeDo]} className="mt-6" />
          </div>
        </section>

        <section id="host" aria-labelledby="host-title" className="scroll-mt-32 py-16 md:scroll-mt-44 md:py-20">
          <div className="container-custom grid gap-10 lg:grid-cols-[1.05fr_.95fr]">
            <div>
              <SectionHeading id="host-title" eyebrow="Our host" title="The Muslim Education and Welfare Association" intro="MEWA is a Mombasa non-governmental organization and the Corner's host." />
              <ul className="mt-8 space-y-4">
                {mewaFacts.map(({ text, source }) => (
                  <li key={text} className="flex gap-4 rounded-2xl border border-slate-200 p-5">
                    <Building2 size={22} className="mt-0.5 shrink-0 text-corner-600" aria-hidden="true" />
                    <div>
                      <p className="leading-relaxed text-gray-700">{text}</p>
                      <SourceLinks sources={[source]} className="mt-2" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-6">
              <CreditedPhoto photo={photos["mewa-banner-2010"]} />
              <CreditedPhoto photo={photos["mewa-workshop-2010"]} />
            </div>
          </div>
        </section>

        <section id="story" aria-labelledby="story-title" className="scroll-mt-32 bg-slate-50 py-16 md:scroll-mt-44 md:py-20">
          <div className="container-custom">
            <SectionHeading id="story-title" eyebrow="Our story" title="From MEWA's library to a weekly program" intro="Milestones from published records. Dates come from the sources linked to each entry." />
            <ol className="relative mt-12 grid gap-x-10 gap-y-8 md:grid-cols-2">
              {story.map(({ year, title, text, sources: entrySources }) => (
                <li key={`${year}-${title}`} className="relative rounded-2xl border border-slate-200 bg-white p-6">
                  <span className="inline-flex rounded-full bg-corner-600 px-3 py-1 text-sm font-bold text-white">{year}</span>
                  <h3 className="mt-4 text-lg font-bold text-gray-900">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{text}</p>
                  <SourceLinks sources={entrySources} className="mt-3" />
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="people" aria-labelledby="people-title" className="scroll-mt-32 py-16 md:scroll-mt-44 md:py-20">
          <div className="container-custom">
            <SectionHeading id="people-title" eyebrow="People" title="The people behind the Corner" intro="Names are shown only where the Corner or a published source has credited them." />
            <div className="mt-10 grid gap-8 lg:grid-cols-[1.3fr_.7fr]">
              <ul className="grid gap-5 md:grid-cols-3">
                {team.map(({ name, role, text, sources: personSources }) => (
                  <li key={name} className="flex flex-col rounded-2xl border border-slate-200 p-6">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-corner-50 text-corner-600"><UserRound size={28} aria-hidden="true" /></span>
                    <h3 className="mt-4 font-bold text-gray-900">{name}</h3>
                    <p className="text-sm font-semibold text-corner-600">{role}</p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">{text}</p>
                    <SourceLinks sources={personSources} className="mt-3" />
                  </li>
                ))}
              </ul>
              <CreditedPhoto photo={photos["mewa-cleanup-2010"]} caption="Volunteers clean a street in Mombasa during a MEWA volunteer activity in 2010." imageClassName="aspect-[4/3]" />
            </div>
            <h3 className="mt-14 text-xl font-bold text-gray-900">Recent guests and facilitators</h3>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {recentGuests.map(({ name, role, event, to }) => (
                <li key={name}>
                  <Link to={to} className="block h-full rounded-2xl border border-slate-200 p-5 transition hover:border-corner-300 hover:shadow-md">
                    <span className="block font-bold text-gray-900">{name}</span>
                    <span className="mt-1 block text-sm text-gray-600">{role}</span>
                    <span className="mt-3 block text-xs font-semibold text-corner-600">{event}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="partners" aria-labelledby="partners-title" className="scroll-mt-32 bg-slate-50 py-16 md:scroll-mt-44 md:py-20">
          <div className="container-custom">
            <SectionHeading id="partners-title" eyebrow="Partners" title="Organizations we have worked with" intro="Hosts, funders and collaborators named in published records of the Corner's activities." />
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {partners.map(({ name, role, year, source }) => (
                <li key={name} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-corner-600">{year}</p>
                  <h3 className="mt-2 font-bold text-gray-900">{name}</h3>
                  <p className="mt-1 text-sm text-gray-600">{role}</p>
                  <SourceLinks sources={[source]} className="mt-3" />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="network" aria-labelledby="network-title" className="scroll-mt-32 py-16 md:scroll-mt-44 md:py-20">
          <div className="container-custom">
            <SectionHeading id="network-title" eyebrow="Our network" title="One of nearly 600 American Spaces" intro="American Spaces connect the United States with communities worldwide. They include American Centers, American Corners and Binational Centers." />
            <dl className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {networkFacts.map(({ value, label }) => (
                <div key={label} className="rounded-2xl bg-corner-950 p-6 text-white">
                  <dt className="sr-only">{label}</dt>
                  <dd className="text-3xl font-extrabold md:text-4xl">{value}</dd>
                  <dd className="mt-2 text-sm text-blue-100">{label}</dd>
                </div>
              ))}
            </dl>
            <SourceLinks sources={[sources.whatWeDo]} className="mt-4" />
            <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_.9fr]">
              <div>
                <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900"><Globe2 size={22} className="text-corner-600" aria-hidden="true" />American Spaces in Kenya</h3>
                <ul className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200">
                  {kenyaSpaces.map(({ name, place, status, current }) => (
                    <li key={name} className={`flex flex-wrap items-center justify-between gap-3 px-5 py-4 ${current ? "bg-corner-50" : ""}`}>
                      <span>
                        <span className="block font-semibold text-gray-900">{name}{current && <span className="ml-2 rounded-full bg-corner-600 px-2 py-0.5 text-[10px] font-semibold uppercase text-white">You are here</span>}</span>
                        <span className="flex items-center gap-1 text-sm text-gray-600"><MapPin size={13} aria-hidden="true" />{place}</span>
                      </span>
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${status === "In operation" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-800"}`}>{status}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  The American Spaces Bus, run by the U.S. Embassy and the Kenya National Library Service, also brings programs to towns and campuses across Kenya.
                </p>
                <SourceLinks sources={[sources.locatorMap, sources.bus2025]} className="mt-2" />
              </div>
              <CreditedPhoto photo={photos["american-spaces-speaker-1"]} caption="A U.S. speaker meets exchange alumni at the American Center Nairobi in 2019." />
            </div>
          </div>
        </section>

        <section aria-labelledby="voices-title" className="bg-slate-50 py-16 md:py-20">
          <div className="container-custom grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <div>
              <SectionHeading id="voices-title" eyebrow="In their words" title="Hear from our community" intro="Beneficiaries of the Corner's library share their experiences in this video from American Corner Mombasa's YouTube channel." />
              <a href={sources.testimonials2024.url} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 font-semibold text-corner-600 hover:underline">Watch on YouTube <ExternalLink size={15} aria-hidden="true" /></a>
            </div>
            <iframe
              src="https://www.youtube-nocookie.com/embed/p1aduv73X8I"
              title="Library Testimonials — American Corner Mombasa"
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="aspect-video w-full rounded-2xl border border-slate-200"
            />
          </div>
        </section>

        <VisitSection variant="full" />

        <section id="faq" aria-labelledby="faq-title" className="scroll-mt-32 py-16 md:scroll-mt-44 md:py-20">
          <div className="container-custom max-w-4xl">
            <SectionHeading id="faq-title" eyebrow="Questions" title="About the Corner: frequently asked questions" />
            <Accordion type="single" collapsible className="mt-8 rounded-2xl border border-slate-200 bg-white px-6">
              {aboutFaqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`faq-${index}`} className={index === aboutFaqs.length - 1 ? "border-b-0" : undefined}>
                  <AccordionTrigger className="text-left font-semibold text-gray-900">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-gray-600">
                    {faq.answer}
                    {faq.question.includes("visa") && <> <a href={sources.visas.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-corner-600 hover:underline">Visit travel.state.gov</a>.</>}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <Link to="/events" className="mt-8 inline-flex items-center gap-2 font-semibold text-corner-600 hover:underline">Explore the weekly program <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CornerAbout;
