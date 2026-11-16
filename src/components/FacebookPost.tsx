import { ExternalLink } from "lucide-react";

type FacebookPostProps = { url: string; caption: string; kind?: "post" | "video" };

const FacebookPost = ({ url, caption, kind = "post" }: FacebookPostProps) => (
  <figure className="flex flex-col rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
    <iframe
      title={`${caption} — American Corner Mombasa on Facebook`}
      src={`https://www.facebook.com/plugins/${kind}.php?href=${encodeURIComponent(url)}&show_text=true&width=500`}
      loading="lazy"
      className={`${kind === "video" ? "h-[480px]" : "h-[560px]"} w-full rounded-lg bg-slate-50`}
      allow="encrypted-media; picture-in-picture"
      allowFullScreen={kind === "video"}
    />
    <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-2 text-sm text-gray-700">
      <span>{caption}</span>
      <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-semibold text-corner-600 hover:underline">
        View on Facebook <ExternalLink size={14} aria-hidden="true" />
      </a>
    </figcaption>
  </figure>
);

export default FacebookPost;
