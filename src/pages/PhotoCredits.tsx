import { ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { photos } from "@/data/photos";
import { useSEO } from "@/hooks/useSEO";

const PhotoCredits = () => {
  useSEO({
    title: "Photo and media credits | American Corner Mombasa",
    description: "Sources and licences for the photos, graphics and embedded media used on the American Corner Mombasa website.",
    url: window.location.href,
  });

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-corner-950 py-16 text-white md:py-20">
          <div className="container-custom max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[.25em] text-blue-200">Credits</p>
            <h1 className="mt-4 text-4xl font-extrabold md:text-5xl">Photo and media credits</h1>
            <p className="mt-5 leading-relaxed text-blue-100">
              This site uses public-domain and openly licensed photos, original graphics, and official posts and videos from American Corner Mombasa.
              Photos were resized and converted to WebP, and may be cropped for display. Photos from other places illustrate program themes and were not taken at American Corner Mombasa.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-gray-900">Photos</h2>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Object.entries(photos).map(([key, photo]) => (
                <li key={key} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                  <img src={photo.src} alt={photo.alt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                  <div className="p-4 text-sm">
                    <p className="text-gray-700">{photo.alt}</p>
                    <p className="mt-3 text-gray-600">
                      By{" "}
                      <a href={photo.creditUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-corner-600 hover:underline">
                        {photo.credit}
                      </a>
                      {" · "}
                      {"licenseUrl" in photo ? (
                        <a href={photo.licenseUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-corner-600 hover:underline">{photo.license}</a>
                      ) : (
                        photo.license
                      )}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-slate-50 py-16">
          <div className="container-custom grid gap-8 lg:grid-cols-3">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Original graphics</h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Program illustrations, background patterns, the portrait placeholder and the social sharing image were created for this site.
                Their icon shapes come from{" "}
                <a href="https://lucide.dev/license" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-semibold text-corner-600 hover:underline">
                  Lucide (ISC License) <ExternalLink size={12} aria-hidden="true" />
                </a>.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Official posts and videos</h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Posts and videos from American Corner Mombasa's Facebook page and YouTube channel, and a partner video from Afribot Robotics, are shown using the platforms' embed features. They remain the property of their owners.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">American Spaces logo</h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                The American Spaces logo identifies the U.S. Department of State's American Spaces network, of which American Corner Mombasa is a part.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PhotoCredits;
