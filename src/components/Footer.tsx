import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone, faArrowRight, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faXTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:americancornermombasa@gmail.com?subject=${encodeURIComponent("Updates enquiry")}&body=${encodeURIComponent(`Please send information about updates to ${email}.`)}`;
  };

  return (
    <footer>
      {/* Newsletter Strip */}
      <div className="bg-corner-600 py-10">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white text-2xl font-bold mb-1">Stay Updated</h3>
              <p className="text-white/80 text-sm">Ask the Corner about news and upcoming activities by email.</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex w-full md:w-auto gap-0">
              <input
                type="email"
                aria-label="Email address for updates enquiry"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 md:w-72 px-4 py-3 text-sm text-gray-800 bg-white rounded-l-md focus:outline-none"
              />
              <button type="submit" className="bg-corner-900 hover:bg-corner-800 text-white px-5 py-3 rounded-r-md flex items-center gap-2 text-sm font-medium transition-colors">
                <FontAwesomeIcon icon={faPaperPlane} className="text-xs" /> Ask for updates
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-corner-950 text-white">
        <div className="container-custom py-14">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <Link to="/" className="inline-block mb-5">
                <img src="/images/american-spaces-logo.png" alt="American Spaces" width={190} className="rounded bg-white p-2" />
              </Link>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                American Corner Mombasa: a space for learning, cultural exchange and connection in Majengo.
              </p>
              <div className="flex items-center gap-3">
                {[
                  { href: "https://www.facebook.com/AmericancornerMombasa/", icon: faFacebook, label: "Facebook" },
                  { href: "https://x.com/ACMombasa", icon: faXTwitter, label: "X" },
                  { href: "https://www.instagram.com/americancornerke_mombasa", icon: faInstagram, label: "Instagram" },
                  { href: "https://www.youtube.com/@AmericanCornerMombasa", icon: faYoutube, label: "YouTube" },
                ].map(({ href, icon, label }) => (
                  <a key={href} href={href} aria-label={label} target="_blank" rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-corner-600 flex items-center justify-center transition-colors">
                    <FontAwesomeIcon icon={icon} className="text-xs" />
                  </a>
                ))}
              </div>
            </div>

            {/* Programs */}
            <div>
              <h4 className="text-white font-bold text-base mb-5 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-corner-500">Explore</h4>
              <ul className="space-y-2.5">
                {[
                  { to: "/programs", label: "Learning & programs" },
                  { to: "/about", label: "About the Corner" },
                  { to: "/legacy/programs", label: "Previous site programs" },
                  { to: "/programs/campus-ambassador", label: "Previous campus ambassador page" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link to={item.to} className="text-white/60 hover:text-corner-400 transition-colors text-sm flex items-center gap-1.5 group">
                      <FontAwesomeIcon icon={faArrowRight} className="text-xs text-corner-500 group-hover:translate-x-1 transition-transform" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold text-base mb-5 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-corner-500">Quick Links</h4>
              <ul className="space-y-2.5">
                {[
                  { to: "/about", label: "About Us" },
                  { to: "/impact", label: "Our impact" },
                  { to: "/events", label: "Weekly program & events" },
                  { to: "/careers", label: "Previous careers page" },
                  { to: "/contact", label: "Contact Us" },
                  { to: "/industrial-attachment", label: "Previous industrial attachment page" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link to={item.to} className="text-white/60 hover:text-corner-400 transition-colors text-sm flex items-center gap-1.5 group">
                      <FontAwesomeIcon icon={faArrowRight} className="text-xs text-corner-500 group-hover:translate-x-1 transition-transform" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold text-base mb-5 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-corner-500">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faLocationDot} className="text-corner-400 mt-0.5 flex-shrink-0" />
                  <span className="text-white/60 text-sm">MEWA Information Center, My-Tac Hall<br />Next to Masjid Musa, Majengo<br />P.O. Box 89427-80100, Mombasa</span>
                </li>
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faEnvelope} className="text-corner-400 flex-shrink-0" />
                  <a href="mailto:americancornermombasa@gmail.com" className="text-white/60 hover:text-corner-400 transition-colors text-sm">americancornermombasa@gmail.com</a>
                </li>
                <li className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faPhone} className="text-corner-400 flex-shrink-0 mt-1" />
                  <span className="flex flex-col text-sm">
                    <a href="tel:+254722819795" className="text-white/60 hover:text-corner-400 transition-colors">+254 722 819 795</a>
                    <a href="tel:+254725833597" className="text-white/60 hover:text-corner-400 transition-colors">+254 725 833 597</a>
                    <a href="tel:+25441493157" className="text-white/60 hover:text-corner-400 transition-colors">+254 041 493157 (landline)</a>
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <a href="https://americanspaces.info/locator/acmombasa" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-corner-400 transition-colors text-sm">American Spaces directory</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="container-custom py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-white/50 text-sm">&copy; {currentYear} American Corner Mombasa.</p>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              <Link to="/terms-of-reference" className="text-white/50 hover:text-white/80 transition-colors text-sm">Previous terms of reference</Link>
              <Link to="/privacy-policy" className="text-white/50 hover:text-white/80 transition-colors text-sm">Previous privacy policy</Link>
              <Link to="/photo-credits" className="text-white/50 hover:text-white/80 transition-colors text-sm">Photo credits</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
