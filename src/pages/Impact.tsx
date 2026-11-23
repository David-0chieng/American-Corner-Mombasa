import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faCalendarDays, faEnvelope, faHandshake, faLocationDot, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { PageHero, MarqueeStrip, MagneticLink, usePageReveal, SplitHeading } from "@/components/PageAnimations";
import { PhotoCredit, SourceLinks } from "@/components/corner/CornerUI";
import { useSEO } from "@/hooks/useSEO";
import { impactContext, impactHighlights, impactQuote, impactSteps, impactStories, impactTicker, partnerReasons } from "@/data/impact";
import { photos } from "@/data/photos";

const STORIES_PER_PAGE = 3;

const partnerCardStyles = [
  { bg: "bg-corner-900", text: "text-white", sub: "text-white/70", ic: "text-corner-300" },
  { bg: "bg-corner-600", text: "text-white", sub: "text-white/80", ic: "text-white" },
  { bg: "bg-corner-500", text: "text-white", sub: "text-white/80", ic: "text-white" },
  { bg: "bg-corner-700", text: "text-white", sub: "text-white/80", ic: "text-white" },
];

const quoteLead = `“${impactQuote.lead}`.split(" ");
const quoteRest = `${impactQuote.rest}”`.split(" ");
const highlightDelay = quoteLead.length * 60 + 150;

const Impact = () => {
  usePageReveal();
  useSEO({
    title: "Impact | American Corner Mombasa",
    description: "Documented results from American Corner Mombasa's free programs, from career days and English training to women entrepreneurs and remote-work skills, each linked to its source.",
    url: window.location.href,
    image: "/media/og/american-corner-mombasa.png",
  });

  const storiesRef = useRef<HTMLElement>(null);
  const [storyPage, setStoryPage] = useState(0);
  const totalStoryPages = Math.ceil(impactStories.length / STORIES_PER_PAGE);
  const visibleStories = impactStories.slice(storyPage * STORIES_PER_PAGE, storyPage * STORIES_PER_PAGE + STORIES_PER_PAGE);
  const goToStoryPage = (page: number) => {
    setStoryPage(Math.min(totalStoryPages - 1, Math.max(0, page)));
    storiesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Our Impact"
          title="Open doors, real results."
          subtitle="Free programs that have reached students, teachers, entrepreneurs and young professionals for more than a decade. Every figure here links to its source."
          image={photos["mewa-workshop-2010"].src}
          imagePosition="center 45%"
          sideLabel="American Corner Mombasa · Impact"
          breadcrumb={[{ label: "Home", to: "/" }, { label: "Impact" }]}
        />
        <MarqueeStrip items={impactTicker} />

        {/* S1 — Impact at a Glance */}
        <section className="bg-white py-24 md:py-32">
          <div className="container-custom">
            <div className="flex items-center gap-5 mb-16" data-ht-left>
              <span className="text-corner-600 text-xs font-black uppercase tracking-[0.35em]">01 — Impact at a Glance</span>
              <div className="flex-1 h-px bg-gray-200 line-draw" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6 max-w-2xl" data-ht-left>
              <SplitHeading text="Every number here has a source." accentWords={[5]} accentClass="text-corner-600" />
            </h2>
            <p className="text-gray-500 max-w-2xl mb-16 text-[15px] leading-relaxed" data-ht-left data-ht-d="2">
              The Corner does not publish yearly attendance totals. These figures were reported for individual programs by the U.S. Embassy, the Kenya News Agency and MEWA.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {impactHighlights.map((stat, i) => (
                <div key={stat.label} className="flex flex-col items-center" data-ht-scale data-ht-d={String(i + 1)}>
                  <div className="text-5xl md:text-6xl font-black tabular-nums mb-3 stat-pop text-corner-600">{stat.value}</div>
                  <p className="text-gray-600 text-xs leading-relaxed max-w-[180px]">{stat.label}</p>
                  <p className="mt-2 text-[11px] font-bold uppercase tracking-widest text-gray-400">{stat.when}</p>
                  <SourceLinks sources={stat.sources} className="mt-2 justify-center" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="relative py-24 overflow-hidden">
          <img src={photos["mewa-centre-2010"].src} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: "center 40%" }} />
          <div className="absolute inset-0 bg-corner-950/85" />
          <div className="relative container-custom">
            <figure className="max-w-4xl mx-auto text-center" data-ht>
              <p className="text-white/50 text-xs font-black uppercase tracking-[0.4em] mb-10">In Their Words</p>
              <blockquote className="text-white text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
                {quoteLead.map((w, i) => <span key={i} className="q-word" style={{ transitionDelay: `${i * 60}ms` }}>{w}{" "}</span>)}
                <span className="text-amber-400 q-word" style={{ transitionDelay: `${highlightDelay}ms` }}>{impactQuote.highlight}</span>
                {quoteRest.map((w, i) => <span key={`b${i}`} className="q-word" style={{ transitionDelay: `${highlightDelay + 150 + i * 55}ms` }}>{" "}{w}</span>)}
              </blockquote>
              <div className="mt-12 w-16 h-1 bg-amber-400 mx-auto" />
              <figcaption className="mt-8 text-white/80 text-sm leading-relaxed">
                <span className="font-bold text-white">{impactQuote.by}</span>, {impactQuote.role}
                <SourceLinks sources={[impactQuote.source]} light className="mt-3 justify-center" />
              </figcaption>
            </figure>
          </div>
        </section>

        {/* S2 — How change happens */}
        <section className="bg-gray-50 py-24 md:py-32">
          <div className="container-custom">
            <div className="flex items-center gap-5 mb-16" data-ht-right>
              <span className="text-corner-600 text-xs font-black uppercase tracking-[0.35em]">02 — How Change Happens</span>
              <div className="flex-1 h-px bg-gray-300 line-draw" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6 max-w-2xl" data-ht-left>
              <SplitHeading text="Three steps from an open door to a new opportunity." accentWords={[8, 9]} accentClass="text-corner-600" />
            </h2>
            <p className="text-gray-500 max-w-2xl mb-16 text-[15px] leading-relaxed" data-ht-left data-ht-d="2">
              American Spaces provide free and open access to resources and programs. At the Corner, that access turns into skills, and skills open the way to study, work and community life.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {impactSteps.map((card, i) => (
                <div key={card.title} className="relative rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group min-h-96 heritage-card" {...(i % 2 === 0 ? { "data-ht-left": "" } : { "data-ht-right": "" })} data-ht-d={String(i + 1)}>
                  <img src={card.photo.src} alt={card.photo.alt} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-corner-900/80" />
                  <div className="relative z-10 flex flex-col justify-end h-full p-7">
                    <span className="text-xs font-bold uppercase tracking-widest text-white/70 mb-3 block">{card.step}</span>
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-4">
                      <FontAwesomeIcon icon={card.icon} className="text-xl text-white" />
                    </div>
                    <h3 className="text-white text-xl font-bold leading-snug mb-2">{card.title}</h3>
                    <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3 bg-white/20 backdrop-blur-sm text-white border border-white/20 self-start">
                      {card.subtitle}
                    </span>
                    <p className="text-white/85 text-sm leading-relaxed">{card.text}</p>
                    {card.sources.length > 0 && <SourceLinks sources={card.sources} light className="mt-4" />}
                    {card.link && (
                      <Link to={card.link.to} className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-white/90 hover:text-white hover:underline">
                        {card.link.label} <FontAwesomeIcon icon={faArrowRight} className="text-[10px]" />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* S3 — Impact stories */}
        <section ref={storiesRef} className="bg-white py-24 md:py-32 scroll-mt-20">
          <div className="container-custom">
            <div className="flex items-center gap-5 mb-16" data-ht-left>
              <span className="text-corner-600 text-xs font-black uppercase tracking-[0.35em]">03 — Stories From the Corner</span>
              <div className="flex-1 h-px bg-gray-200 line-draw" />
            </div>
            <div className="flex flex-wrap items-end justify-between gap-6 mb-16" data-ht-left>
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-3">
                  <SplitHeading text="Impact Stories" accentClass="text-corner-600" accentWords={[1]} />
                </h2>
                <div className="w-12 h-1 bg-corner-600 mb-6"></div>
                <p className="text-gray-500 leading-relaxed text-[15px]">
                  Twelve moments from the Corner's published record, from English lessons for madrassa teachers in 2013 to remote-work training in 2026. Each story links to the report it comes from.
                </p>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400 whitespace-nowrap" aria-live="polite">
                Page {storyPage + 1} of {totalStoryPages}
              </span>
            </div>

            <style>{`
              @keyframes pageFlipIn {
                0% { opacity: 0; transform: perspective(1400px) rotateY(-8deg) scale(0.98); }
                100% { opacity: 1; transform: perspective(1400px) rotateY(0deg) scale(1); }
              }
              .story-page-flip {
                animation: pageFlipIn 0.65s cubic-bezier(0.4, 0, 0.2, 1);
                transform-origin: left center;
              }
            `}</style>

            <div key={storyPage} className="space-y-10 story-page-flip">
              {visibleStories.map((story, i) => (
                <article
                  key={story.title}
                  className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden heritage-card`}
                >
                  {/* Photo */}
                  <div className="relative md:w-2/5 flex-shrink-0 min-h-[280px] md:min-h-[420px]">
                    <img src={story.photo.src} alt={story.photo.alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: story.photo.position ?? "center" }} />
                    {story.figure && (
                      <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-corner-950/80 backdrop-blur-sm px-5 py-4 text-white">
                        <p className="text-4xl font-black leading-none tabular-nums">{story.figure.value}</p>
                        <p className="mt-1.5 text-xs text-white/80 leading-snug">{story.figure.label}</p>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center p-8 md:p-12 md:w-3/5">
                    <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-corner-600 mb-3">
                      <FontAwesomeIcon icon={faCalendarDays} /> {story.when}
                    </p>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug mb-4">{story.title}</h3>
                    {story.quote && (
                      <blockquote className="border-l-4 border-corner-600 pl-4 mb-5">
                        <FontAwesomeIcon icon={faQuoteLeft} className="text-corner-100 text-2xl mb-2 block" />
                        <p className="italic text-gray-700 text-base leading-relaxed">“{story.quote.text}”</p>
                        <footer className="mt-2 text-xs font-semibold text-gray-500">— {story.quote.by}</footer>
                      </blockquote>
                    )}
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">{story.story}</p>
                    <div>
                      <p className="font-bold text-gray-900 text-base">{story.people}</p>
                      <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                        <FontAwesomeIcon icon={faLocationDot} className="text-corner-400" />
                        {story.place}
                      </p>
                      <SourceLinks sources={story.sources} className="mt-3" />
                      <PhotoCredit photo={story.photo} className="mt-3 text-gray-400" />
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Story pager — turns to the next set like a page in a book */}
            <div className="flex items-center justify-center gap-6 mt-14" data-ht>
              <button
                type="button"
                onClick={() => goToStoryPage(storyPage - 1)}
                disabled={storyPage === 0}
                className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full border border-gray-200 text-gray-600 hover:border-corner-600 hover:text-corner-600 transition-colors disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-gray-200 disabled:hover:text-gray-600"
              >
                <FontAwesomeIcon icon={faArrowLeft} className="text-xs" /> Previous
              </button>

              <div className="flex items-center gap-2">
                {Array.from({ length: totalStoryPages }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => goToStoryPage(i)}
                    aria-label={`Go to stories page ${i + 1}`}
                    aria-current={i === storyPage ? "page" : undefined}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${i === storyPage ? "bg-corner-600" : "bg-gray-200 hover:bg-corner-300"}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => goToStoryPage(storyPage + 1)}
                disabled={storyPage === totalStoryPages - 1}
                className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-2.5 rounded-full bg-corner-600 hover:bg-corner-700 text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-corner-600"
              >
                Continue <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
              </button>
            </div>
          </div>
        </section>

        {/* S4 — The need in context */}
        <section className="bg-gray-50 py-24 md:py-32">
          <div className="container-custom">
            <div className="flex items-center gap-5 mb-16" data-ht-right>
              <span className="text-corner-600 text-xs font-black uppercase tracking-[0.35em]">04 — Why It Matters</span>
              <div className="flex-1 h-px bg-gray-300 line-draw" />
            </div>
            <div className="bg-corner-600 rounded-2xl p-8 md:p-12 text-white heritage-card max-w-4xl mx-auto" data-ht-scale>
              <span className="inline-block text-corner-200 font-semibold uppercase tracking-wider text-xs mb-3">The need in context</span>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Why free access matters in Mombasa</h2>
              <div className="w-10 h-1 bg-white/40 mb-6"></div>
              <p className="text-white/85 mb-8 text-sm leading-relaxed max-w-2xl">
                The Corner's programs answer real gaps in computer use, internet access, English and study abroad. These figures come from Kenya's national statistics office and other published sources.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {impactContext.map((stat) => (
                  <div key={stat.label} className="bg-white/15 rounded-xl p-4 text-center flex flex-col items-center">
                    <p className="text-3xl font-extrabold text-white mb-1">{stat.value}</p>
                    <p className="text-white/85 text-xs leading-tight">{stat.label}</p>
                    <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-white/60">{stat.when}</p>
                    <SourceLinks sources={stat.sources} light className="mt-2 justify-center" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-4 border-t border-white/20 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-white/80 text-xs leading-relaxed max-w-md">
                  The Corner does not publish an annual impact report. For current attendance figures, or to share your own story, contact the team.
                </p>
                <Link to="/contact" className="inline-flex shrink-0 items-center gap-2 bg-white text-corner-700 hover:bg-corner-50 font-semibold px-6 py-3 rounded transition-colors text-sm">
                  <FontAwesomeIcon icon={faEnvelope} className="text-sm" /> Contact the Corner
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* S5 — Why partners work with the Corner */}
        <section className="bg-gray-50 py-24 md:py-32">
          <div className="container-custom">
            <div className="flex items-center gap-5 mb-16" data-ht-right>
              <span className="text-corner-600 text-xs font-black uppercase tracking-[0.35em]">05 — For Partners</span>
              <div className="flex-1 h-px bg-gray-300 line-draw" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-16 max-w-2xl" data-ht-left>
              <SplitHeading text="Why organizations work with the Corner." accentWords={[5]} accentClass="text-corner-600" />
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {partnerReasons.map((card, i) => {
                const style = partnerCardStyles[i % partnerCardStyles.length];
                return (
                  <div key={card.title} className={`rounded-2xl p-7 heritage-card ${style.bg}`} {...(i % 2 === 0 ? { "data-ht-left": "" } : { "data-ht-right": "" })} data-ht-d={String((i % 3) + 1)}>
                    <FontAwesomeIcon icon={card.icon} className={`text-2xl mb-5 ${style.ic} opacity-90`} />
                    <h3 className={`font-black text-base mb-2 ${style.text}`}>{card.title}</h3>
                    <p className={`text-sm leading-relaxed ${style.sub}`}>{card.text}</p>
                    <SourceLinks sources={card.sources} light className="mt-4" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white py-24">
          <div className="container-custom text-center" data-ht>
            <p className="text-gray-400 text-xs font-black uppercase tracking-[0.4em] mb-6">Write the Next Story With Us</p>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
              <SplitHeading text="Ready to share your skills with Mombasa?" accentWords={[6]} accentClass="text-corner-600" />
            </h3>
            <p className="text-gray-500 text-sm mb-12 max-w-md mx-auto leading-relaxed">
              Lead a Tech Talk, mentor entrepreneurs, volunteer at a weekly session or co-host a training. Tell the Corner what you would like to offer.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <MagneticLink to="/contact">
                Propose a partnership <FontAwesomeIcon icon={faHandshake} />
              </MagneticLink>
              <MagneticLink to="/events" className="inline-flex items-center gap-3 bg-white border-2 border-corner-600 text-corner-600 hover:bg-corner-50 font-bold px-10 py-4 rounded-xl text-sm">
                See the weekly program <FontAwesomeIcon icon={faArrowRight} />
              </MagneticLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
export default Impact;
