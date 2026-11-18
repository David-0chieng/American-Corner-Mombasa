import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactComponent from "@/components/Contact";
import { useContactPageSEO } from "@/hooks/useSEO";
import { Link } from "react-router-dom";

const Contact = () => {
  useContactPageSEO();

  return (
    <>
      <Navbar />
      <main className="theme-bg-pattern-1">
        {/* Page Banner */}
        <section className="relative pt-36 pb-20 overflow-hidden">
          <div className="absolute inset-0 theme-bg-pattern-2"></div>
          <div className="absolute inset-0 bg-corner-900/80"></div>
          <div className="container-custom relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Contact Us</h1>
            <nav className="flex justify-center items-center gap-2 text-sm text-white/70">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-corner-300">Contact</span>
            </nav>
          </div>
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" className="fill-white w-full h-8">
              <path d="M0,20 C360,45 1080,0 1440,20 L1440,40 L0,40 Z" />
            </svg>
          </div>
        </section>

        <ContactComponent />

        {/* Map */}
        <section className="py-0">
          <div className="h-96 w-full">
            <iframe
              src="https://maps.google.com/maps?q=MEWA%20Information%20Center%20Majengo%20Mombasa&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map search for MEWA Information Center, Majengo, Mombasa"
            ></iframe>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
