import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faChevronDown, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faXTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import LazyImage from "./LazyImage";
import { activities } from "@/data/weeklyProgram";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleMobileSubmenu = (menu: string) =>
    setOpenMobileMenu(openMobileMenu === menu ? null : menu);

  return (
    <header className="w-full z-50 sticky top-0">
      {/* Top Bar */}
      <div className="bg-corner-900 text-white py-2 hidden md:block">
        <div className="container-custom flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a href="mailto:americancornermombasa@gmail.com" className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors">
              <FontAwesomeIcon icon={faEnvelope} className="text-xs" />
              americancornermombasa@gmail.com
            </a>
            <a href="tel:+25441493157" className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors">
              <FontAwesomeIcon icon={faPhone} className="text-xs" />
              +254 041 493157
            </a>
          </div>
          <div className="flex items-center gap-3">
            {[
              { href: "https://www.facebook.com/AmericancornerMombasa/", icon: faFacebook, label: "Facebook" },
              { href: "https://x.com/ACMombasa", icon: faXTwitter, label: "X" },
              { href: "https://www.instagram.com/americancornerke_mombasa", icon: faInstagram, label: "Instagram" },
              { href: "https://www.youtube.com/@AmericanCornerMombasa", icon: faYoutube, label: "YouTube" },
            ].map(({ href, icon, label }) => (
              <a key={href} href={href} aria-label={label} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                <FontAwesomeIcon icon={icon} className="text-xs" />
              </a>
            ))}
            <span className="w-px h-4 bg-white/20 mx-1"></span>
            <Link to="/contact" className="text-xs text-white/80 hover:text-white">Visit us in Majengo</Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-md">
        <div className="container-custom flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center flex-shrink-0 gap-3" aria-label="American Corner Mombasa home">
            <LazyImage src="/images/american-spaces-logo.png" alt="American Spaces" width={140} loading="eager" />
            <span className="hidden lg:block border-l border-gray-200 pl-3 text-xs font-bold leading-tight text-corner-900">American Corner<br />Mombasa</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex md:items-center md:gap-1 lg:gap-2">
            <Link to="/" className="px-3 py-2 text-gray-700 font-medium hover:text-corner-600 transition-colors text-sm">Home</Link>
            <Link to="/about" className="px-3 py-2 text-gray-700 font-medium hover:text-corner-600 transition-colors text-sm">About</Link>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent h-auto px-3 py-2 text-gray-700 font-medium text-sm hover:bg-transparent hover:text-corner-600 data-[state=open]:bg-transparent data-[state=open]:text-corner-600">
                    Programs
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 w-[520px] max-h-[70vh] overflow-y-auto gap-1 p-3">
                      <Link to="/programs" className="col-span-2 p-3 font-bold text-corner-600 hover:bg-corner-50">American Spaces learning &amp; programs</Link>
                      <p className="col-span-2 px-3 pt-2 text-xs text-gray-500">Weekly program</p>
                      {activities.map(({ slug, title, description, suggested }) => (
                        <Link key={slug} to={`/weekly-program/${slug}`} className="block p-3 rounded-md hover:bg-corner-50 group transition-colors">
                          <div className="font-medium text-gray-800 group-hover:text-corner-600 text-sm">{title}{suggested && " (suggested)"}</div>
                          <div className="text-xs text-gray-500 mt-0.5">{description}</div>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/board-members" className="px-3 py-2 text-gray-700 font-medium hover:text-corner-600 transition-colors text-sm">Legacy Board</Link>

            <Link to="/impact" className="px-3 py-2 text-gray-700 font-medium hover:text-corner-600 transition-colors text-sm">Impact</Link>
            <Link to="/contact" className="px-3 py-2 text-gray-700 font-medium hover:text-corner-600 transition-colors text-sm">Contact</Link>

            <div className="ml-2">
              <Button className="bg-corner-600 hover:bg-corner-700 text-white text-sm px-5 h-9 rounded" asChild>
                <Link to="/events">Weekly Program</Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button onClick={toggleMenu} className="md:hidden text-gray-700 hover:text-corner-600 focus:outline-none p-2" aria-label="Toggle menu">
            <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} className="text-xl" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col px-4 py-3 space-y-1">
              <div className="flex items-center gap-4 py-2 border-b mb-2 text-xs text-gray-500">
                <a href="tel:+25441493157" className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faPhone} className="text-xs" /> +254 041 493157
                </a>
                <Link to="/contact" onClick={toggleMenu}>Visit us in Majengo</Link>
              </div>

              <Link to="/" className="py-2.5 text-gray-700 font-medium hover:text-corner-600 border-b border-gray-100" onClick={toggleMenu}>Home</Link>
              <Link to="/about" className="py-2.5 text-gray-700 font-medium hover:text-corner-600 border-b border-gray-100" onClick={toggleMenu}>About</Link>

              <div className="border-b border-gray-100">
                <button className="w-full flex items-center justify-between py-2.5 text-gray-700 font-medium hover:text-corner-600" onClick={() => toggleMobileSubmenu("programs")}>
                  Programs <FontAwesomeIcon icon={faChevronDown} className={`text-xs transition-transform ${openMobileMenu === "programs" ? "rotate-180" : ""}`} />
                </button>
                {openMobileMenu === "programs" && (
                  <div className="pl-4 pb-2 space-y-1">
                    <Link to="/programs" className="block py-1.5 text-sm font-bold text-corner-600" onClick={toggleMenu}>American Spaces learning &amp; programs</Link>
                    <p className="pt-2 text-xs text-gray-500">Weekly program</p>
                    {activities.map(({ slug, title, suggested }) => (
                      <Link key={slug} to={`/weekly-program/${slug}`} className="block py-1.5 text-sm text-gray-600 hover:text-corner-600" onClick={toggleMenu}>
                        {title}{suggested && " (suggested)"}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/board-members" className="py-2.5 text-gray-700 font-medium hover:text-corner-600 border-b border-gray-100" onClick={toggleMenu}>Legacy Board</Link>

              <Link to="/impact" className="py-2.5 text-gray-700 font-medium hover:text-corner-600 border-b border-gray-100" onClick={toggleMenu}>Impact</Link>
              <Link to="/contact" className="py-2.5 text-gray-700 font-medium hover:text-corner-600 border-b border-gray-100" onClick={toggleMenu}>Contact</Link>

              <div className="pt-2">
                <Button className="bg-corner-600 hover:bg-corner-700 text-white w-full" asChild>
                  <Link to="/events" onClick={toggleMenu}>Weekly Program</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
