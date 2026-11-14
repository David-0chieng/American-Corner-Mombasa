import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import type { Photo, Source } from "@/data/weeklyProgram";

export const SectionHeading = ({ id, eyebrow, title, intro, light = false, children }: { id?: string; eyebrow: string; title: string; intro?: string; light?: boolean; children?: ReactNode }) => (
  <div className="max-w-3xl">
    <p className={`text-xs font-bold uppercase tracking-[.25em] ${light ? "text-blue-200" : "text-corner-600"}`}>{eyebrow}</p>
    <h2 id={id} className={`mt-4 text-3xl font-bold md:text-4xl ${light ? "text-white" : "text-gray-900"}`}>{title}</h2>
    {intro && <p className={`mt-4 leading-relaxed ${light ? "text-blue-100" : "text-gray-600"}`}>{intro}</p>}
    {children}
  </div>
);

export const SourceLinks = ({ sources, className = "", light = false }: { sources: Source[]; className?: string; light?: boolean }) => (
  <span className={`flex flex-wrap gap-x-3 gap-y-1 ${className}`}>
    {sources.map((source) => (
      <a key={source.url} href={source.url} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1 text-xs font-semibold hover:underline ${light ? "text-white/80 hover:text-white" : "text-corner-600"}`}>
        {source.label} <ExternalLink size={11} aria-hidden="true" />
      </a>
    ))}
  </span>
);

export const PhotoCredit = ({ photo, className = "" }: { photo: Photo; className?: string }) => (
  <p className={`text-[11px] leading-snug ${className}`}>
    Photo:{" "}
    <a href={photo.creditUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{photo.credit}</a>
    {" · "}
    {photo.licenseUrl ? <a href={photo.licenseUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{photo.license}</a> : photo.license}
    {" · "}
    <Link to="/photo-credits" className="underline underline-offset-2">Credits</Link>
  </p>
);

export const CreditedPhoto = ({ photo, caption, className = "", imageClassName = "aspect-[3/2]" }: { photo: Photo; caption?: string; className?: string; imageClassName?: string }) => (
  <figure className={`overflow-hidden rounded-2xl border border-slate-200 bg-white ${className}`}>
    <img src={photo.src} alt={photo.alt} loading="lazy" className={`w-full object-cover ${imageClassName}`} />
    <figcaption className="p-4 text-sm leading-relaxed text-gray-700">
      {caption ?? photo.alt}
      <PhotoCredit photo={photo} className="mt-2 text-gray-500" />
    </figcaption>
  </figure>
);
