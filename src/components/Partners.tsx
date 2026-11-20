const Partners = () => {
  const partners = [
    { id: 1, name: "National Museums of Kenya" },
    { id: 2, name: "Seacom" },
    { id: 3, name: "Konza Technopolis" },
    { id: 4, name: "ICT Authority" },
    { id: 5, name: "Mastercard Foundation" },
    { id: 6, name: "Imaginable Futures" },
    { id: 7, name: "Conrad N. Hilton Foundation" },
  ];

  // Repeat the list so a single "block" is always wider than the viewport,
  // guaranteeing the track never runs out of cards before the loop wraps.
  const block = Array(4).fill(partners).flat();

  return (
    <section className="py-20 bg-gradient-to-b from-white to-corner-50 overflow-hidden">
      <div className="container-custom mb-14 reveal reveal-up" data-reveal>
        <div className="text-center">
          <span className="inline-block text-corner-600 font-semibold uppercase tracking-wider text-xs mb-3 reveal reveal-left" data-reveal>
            Our Partners
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 reveal reveal-left" data-reveal>
            Trusted By Leading Organizations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto reveal reveal-right" data-reveal>
            We collaborate with innovative organizations and institutions committed to youth empowerment and sustainable development.
          </p>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full overflow-hidden">
        <style>{`
          @keyframes scrollLeft {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .carousel-track {
            animation: scrollLeft 60s linear infinite;
            will-change: transform;
          }
        `}</style>

        <div className="carousel-track flex gap-6 md:gap-8 w-max">
          {/* First set of partners */}
          {block.map((partner, i) => (
            <div
              key={`set1-${partner.id}-${i}`}
              className="flex-shrink-0 w-64 h-48 flex items-center justify-center group"
            >
              <div className="flex h-28 w-56 items-center justify-center rounded-2xl border border-corner-100 bg-white px-6 text-center shadow-sm transition-colors group-hover:border-corner-300">
                <p className="text-base font-semibold leading-snug text-corner-900">{partner.name}</p>
              </div>
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {block.map((partner, i) => (
            <div
              key={`set2-${partner.id}-${i}`}
              className="flex-shrink-0 w-64 h-48 flex items-center justify-center group"
            >
              <div className="flex h-28 w-56 items-center justify-center rounded-2xl border border-corner-100 bg-white px-6 text-center shadow-sm transition-colors group-hover:border-corner-300">
                <p className="text-base font-semibold leading-snug text-corner-900">{partner.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info text */}
      <div className="container-custom mt-12 text-center">
        <p className="text-gray-600 text-sm">
          Interested in partnering with us?{" "}
          <a
            href="/contact"
            className="text-corner-600 font-semibold hover:underline"
          >
            Get in touch with our partnerships team
          </a>
        </p>
      </div>
    </section>
  );
};

export default Partners;
