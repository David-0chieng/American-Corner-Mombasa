import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, CalendarDays, Clock3, DoorOpen, Phone, Ticket, Wifi } from "lucide-react";
import FacebookPost from "@/components/FacebookPost";
import { SCHEDULE_CHECKED, activities, categories, communityPosts, communityVideos } from "@/data/weeklyProgram";

const WeeklyProgram = () => {
  const { hash, key } = useLocation();
  const [category, setCategory] = useState<string>("All");
  const shown = category === "All" ? activities : activities.filter((activity) => activity.category === category);

  useEffect(() => {
    if (hash === "#weekly-program") document.getElementById("weekly-program")?.scrollIntoView();
  }, [hash, key]);

  return (
    <>
      <section id="weekly-program" aria-labelledby="weekly-program-title" className="scroll-mt-24 bg-slate-50 py-20 md:py-24">
        <div className="container-custom">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[.25em] text-corner-600">Learn, connect &amp; grow</p>
              <h2 id="weekly-program-title" className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl">Our weekly program</h2>
              <p className="mt-4 leading-relaxed text-gray-600">
                Hands-on technology, conversation, ideas and play — every week at the MEWA Information Center in Majengo.
                Open a program to see its upcoming sessions, speakers, topics and what to expect.
              </p>
            </div>
            <div role="group" aria-label="Filter programs by category" className="flex flex-wrap gap-2">
              {["All", ...categories].map((item) => (
                <button
                  key={item}
                  type="button"
                  aria-pressed={category === item}
                  onClick={() => setCategory(item)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${category === item ? "border-corner-600 bg-corner-600 text-white" : "border-slate-300 bg-white text-gray-700 hover:border-corner-400"}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {shown.map(({ slug, title, tagline, category: group, day, time, suggested, image, art, icon: Icon }) => (
              <article key={slug} className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <Link to={`/weekly-program/${slug}`} className="relative block aspect-[16/10] overflow-hidden" tabIndex={-1} aria-hidden="true">
                  <img
                    src={image.src}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    style={{ objectPosition: image.position ?? "center" }}
                    onError={(event) => { event.currentTarget.src = art; }}
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-corner-950/70 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-corner-800">
                    <Icon size={14} aria-hidden="true" /> {group}
                  </span>
                  {suggested && <span className="absolute right-4 top-4 rounded-full bg-amber-300 px-3 py-1 text-xs font-semibold text-amber-950">Proposed</span>}
                </Link>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    <Link to={`/weekly-program/${slug}`} className="hover:text-corner-700">{title}</Link>
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{tagline}</p>
                  <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-700">
                    <span className="inline-flex items-center gap-1.5"><CalendarDays size={16} className="text-corner-600" aria-hidden="true" />{suggested ? `Proposed for ${day}s` : `Every ${day}`}</span>
                    <span className="inline-flex items-center gap-1.5"><Clock3 size={16} className="text-corner-600" aria-hidden="true" />{time ?? "Time TBC"}</span>
                  </div>
                  <Link to={`/weekly-program/${slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-corner-600 hover:underline">
                    Sessions, speakers &amp; topics <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <ul className="mt-10 grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Ticket, title: "Free to attend", text: "American Spaces provide free and open access to their programs and resources." },
              { icon: Wifi, title: "Free internet", text: "Use the Corner's internet and resources for study and research." },
              { icon: DoorOpen, title: "Walk-ins welcome", text: "Opening hours are not published officially — confirm before visiting." },
              { icon: Phone, title: "Get in touch", text: "Call +254 722 819 795 or email americancornermombasa@gmail.com." },
            ].map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-3">
                <Icon size={22} className="mt-0.5 shrink-0 text-corner-600" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-gray-900">{title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">{text}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-gray-600">
            Schedule information checked {SCHEDULE_CHECKED}. Session times are confirmed by the Corner. <Link to="/contact" className="font-semibold text-corner-600 hover:underline">Contact us</Link> before visiting, or follow{" "}
            <a href="https://www.facebook.com/AmericancornerMombasa/" target="_blank" rel="noopener noreferrer" className="font-semibold text-corner-600 hover:underline">American Corner Mombasa on Facebook</a> for announcements.
          </p>
        </div>
      </section>

      <section aria-labelledby="corner-stories-title" className="bg-white py-20">
        <div className="container-custom">
          <p className="text-xs font-bold uppercase tracking-[.25em] text-corner-600">From the Corner</p>
          <h2 id="corner-stories-title" className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl">Moments from our community</h2>
          <p className="mt-4 max-w-2xl text-gray-600">Videos and photos shared by American Corner Mombasa on its official YouTube channel and Facebook page. They show past activities, not announcements of upcoming sessions.</p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {communityVideos.map((video) => (
              <figure key={video.id} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 lg:col-span-2">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="aspect-video w-full rounded-lg"
                />
                <figcaption className="mt-3 text-sm text-gray-700">{video.title}</figcaption>
              </figure>
            ))}
            {communityPosts.map((post) => <FacebookPost key={post.url} {...post} />)}
          </div>
          <p className="mt-4 text-sm text-gray-500">Facebook embeds may not load on some networks or browsers; use the links to view the original posts.</p>
        </div>
      </section>
    </>
  );
};

export default WeeklyProgram;
