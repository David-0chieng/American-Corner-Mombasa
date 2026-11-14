import { Link } from "react-router-dom";
import { Clock3, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { contact } from "@/data/corner";

const VisitSection = ({ variant = "compact" }: { variant?: "compact" | "full" }) => {
  if (variant === "compact") {
    return (
      <section id="visit" aria-labelledby="visit-title" className="scroll-mt-20 bg-corner-950 py-14 text-white md:scroll-mt-32">
        <div className="container-custom">
          <h2 id="visit-title" className="text-2xl font-bold md:text-3xl">Plan your visit</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex gap-3"><MapPin size={20} className="mt-0.5 shrink-0 text-blue-200" aria-hidden="true" /><p className="text-sm leading-relaxed text-blue-100"><span className="block font-semibold text-white">Where</span>{contact.address}, Mombasa</p></div>
            <div className="flex gap-3"><Clock3 size={20} className="mt-0.5 shrink-0 text-blue-200" aria-hidden="true" /><p className="text-sm leading-relaxed text-blue-100"><span className="block font-semibold text-white">When</span>Walk-ins are welcome during open hours. Hours are not published officially — call or email first.</p></div>
            <div className="flex gap-3"><Phone size={20} className="mt-0.5 shrink-0 text-blue-200" aria-hidden="true" /><p className="text-sm leading-relaxed text-blue-100"><span className="block font-semibold text-white">Call</span>{contact.phones.slice(0, 2).map((phone) => <a key={phone.href} href={phone.href} className="block hover:text-white">{phone.label}</a>)}</p></div>
            <div className="flex gap-3"><Mail size={20} className="mt-0.5 shrink-0 text-blue-200" aria-hidden="true" /><p className="text-sm leading-relaxed text-blue-100"><span className="block font-semibold text-white">Email</span><a href={`mailto:${contact.email}`} className="break-all hover:text-white">{contact.email}</a></p></div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={contact.directions} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-semibold text-corner-900 hover:bg-blue-50">Get directions <ExternalLink size={15} aria-hidden="true" /></a>
            <Link to="/about#visit" className="inline-flex items-center gap-2 rounded-md border border-white/40 px-5 py-3 font-semibold hover:bg-white/10">Map and visitor information</Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="visit" aria-labelledby="visit-title" className="scroll-mt-32 bg-corner-950 py-16 text-white md:scroll-mt-44 md:py-20">
      <div className="container-custom grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.25em] text-blue-200">Visit us</p>
          <h2 id="visit-title" className="mt-4 text-3xl font-bold md:text-4xl">Find us in Majengo</h2>
          <dl className="mt-8 space-y-6 text-sm">
            <div className="flex gap-3">
              <MapPin size={20} className="mt-0.5 shrink-0 text-blue-200" aria-hidden="true" />
              <div><dt className="font-semibold">Address</dt><dd className="mt-1 leading-relaxed text-blue-100">{contact.address}<br />{contact.postal}<br />Look for Masjid Musa in Majengo, Mvita.</dd></div>
            </div>
            <div className="flex gap-3">
              <Clock3 size={20} className="mt-0.5 shrink-0 text-blue-200" aria-hidden="true" />
              <div><dt className="font-semibold">Opening hours</dt><dd className="mt-1 leading-relaxed text-blue-100">Walk-ins are welcome during open hours. Hours are not published officially, so call or email before visiting. Session times are on each program page.</dd></div>
            </div>
            <div className="flex gap-3">
              <Phone size={20} className="mt-0.5 shrink-0 text-blue-200" aria-hidden="true" />
              <div><dt className="font-semibold">Phone</dt><dd className="mt-1 space-y-1 text-blue-100">{contact.phones.map((phone) => <a key={phone.href} href={phone.href} className="block hover:text-white">{phone.label}</a>)}</dd></div>
            </div>
            <div className="flex gap-3">
              <Mail size={20} className="mt-0.5 shrink-0 text-blue-200" aria-hidden="true" />
              <div><dt className="font-semibold">Email and social media</dt><dd className="mt-1 text-blue-100"><a href={`mailto:${contact.email}`} className="break-all hover:text-white">{contact.email}</a><span className="mt-2 flex flex-wrap gap-x-4 gap-y-1">{contact.social.map((item) => <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" className="font-semibold text-white hover:underline">{item.label}</a>)}</span></dd></div>
            </div>
          </dl>
          <p className="mt-6 text-sm leading-relaxed text-blue-100/90">Need support to take part, such as seating or materials in another format? Contact the Corner before your visit.</p>
          <a href={contact.directions} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-semibold text-corner-900 hover:bg-blue-50">Get directions <ExternalLink size={15} aria-hidden="true" /></a>
        </div>
        <iframe
          title="Map showing American Corner Mombasa at the MEWA Information Center in Majengo"
          src={contact.mapEmbed}
          loading="lazy"
          className="h-[420px] w-full rounded-2xl border-0 bg-white/10 lg:h-[520px]"
        />
      </div>
    </section>
  );
};

export default VisitSection;
