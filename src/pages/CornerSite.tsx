import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import WeeklyProgram from "@/components/WeeklyProgram";
import { PhotoCredit, SectionHeading, SourceLinks } from "@/components/corner/CornerUI";
import { contact, pillars, sources } from "@/data/corner";
import { photos } from "@/data/photos";
import { activities } from "@/data/weeklyProgram";
import { useSEO } from "@/hooks/useSEO";

// Programs page; Home and About have their own pages.
const CornerSite = () => {
  const hero = photos["digital-literacy-1"];
  useSEO({
    title: "Learning and programs | American Corner Mombasa",
    description: "Free weekly programs at American Corner Mombasa: computer repair, tech talks, programming, English club, trivia, entrepreneurship, games and digital literacy.",
    url: window.location.href,
    image: "/media/og/american-corner-mombasa.png",
  });

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="relative isolate overflow-hidden bg-corner-950 text-white">
          <img src={hero.src} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-corner-950 via-corner-950/90 to-corner-950/50" />
          <div className="container-custom py-16 md:py-24">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-blue-200">
              <Link to="/" className="hover:text-white">Home</Link><span aria-hidden="true">/</span><span aria-current="page" className="text-white">Programs</span>
            </nav>
            <p className="mt-8 text-xs font-bold uppercase tracking-[.25em] text-blue-200">Learning and programs</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">Explore ideas. Build possibilities.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-blue-100">
              {activities.length} free programs every week — from repairing computers and writing code to practising English, pitching a business idea and playing chess.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#weekly-program" className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 font-semibold text-corner-900 hover:bg-blue-50">Browse programs <ArrowRight size={17} aria-hidden="true" /></a>
              <a href={`mailto:${contact.email}?subject=${encodeURIComponent("Question about programs")}`} className="inline-flex items-center gap-2 rounded-md border border-white/40 px-6 py-3 font-semibold hover:bg-white/10"><Mail size={17} aria-hidden="true" /> Ask about a program</a>
            </div>
          </div>
          <PhotoCredit photo={hero} className="container-custom pb-3 text-right text-blue-200/70" />
        </section>

        <WeeklyProgram />

        <section aria-labelledby="areas-title" className="bg-slate-50 py-16 md:py-20">
          <div className="container-custom">
            <SectionHeading id="areas-title" eyebrow="Learning areas" title="How programs connect to American Spaces" intro="Every program supports one of the six pillars shared by American Spaces worldwide." />
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {pillars.map(({ icon: Icon, title, links }) => (
                <li key={title} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <span className="flex items-center gap-3"><Icon size={22} className="text-corner-600" aria-hidden="true" /><span className="font-bold text-gray-900">{title}</span></span>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {links.map((link) => <li key={link.to}><Link to={link.to} className="inline-flex rounded-full bg-corner-50 px-3 py-1 text-xs font-semibold text-corner-700 hover:bg-corner-100">{link.label}</Link></li>)}
                  </ul>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <SourceLinks sources={[sources.whatWeDo]} />
              <Link to="/about#what-we-do" className="text-sm font-semibold text-corner-600 hover:underline">More about what we do</Link>
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default CornerSite;
