import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
  faPaperPlane,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const contactItems = [
  {
    icon: faLocationDot,
    label: "Visit Us",
    value: "MEWA Information Center, My-Tac Hall, next to Masjid Musa, Majengo, Mombasa",
    href: "https://www.google.com/maps/search/?api=1&query=MEWA+Information+Center+Majengo+Mombasa",
  },
  {
    icon: faEnvelope,
    label: "Email Us",
    value: "americancornermombasa@gmail.com",
    href: "mailto:americancornermombasa@gmail.com",
  },
  {
    icon: faPhone,
    label: "Call Us",
    value: "+254 722 819 795 or +254 725 833 597",
    href: "tel:+254722819795",
  },
  {
    icon: faPhone,
    label: "Landline",
    value: "+254 041 493157",
    href: "tel:+25441493157",
  },
];

const subjects = [
  "General enquiry",
  "Programme information",
  "Partnership / Sponsorship",
  "Volunteering",
  "Media & Press",
  "Other",
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const set = (field: string) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || "General enquiry");
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:americancornermombasa@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">

        {/* ── Section header ─────────────────────────────────────── */}
        <div className="text-center mb-14 reveal reveal-up" data-reveal>
          <span className="inline-block text-corner-600 font-semibold uppercase tracking-wider text-xs mb-3">
            Reach Out
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Get in Touch
          </h2>
          <div className="w-12 h-1 bg-corner-600 mx-auto mb-5" />
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            Whether you want to join a programme, partner with us, or simply say hello — we'd love to hear from you.
          </p>
        </div>

        {/* ── Split card ─────────────────────────────────────────── */}
        <div className="rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row reveal reveal-up" data-reveal>

          {/* ── Left panel — dark brand ──────────────────────────── */}
          <div
            className="relative lg:w-[42%] flex-shrink-0 flex flex-col justify-between p-10 md:p-12 text-white overflow-hidden"
            style={{
              backgroundImage: "linear-gradient(135deg, #1e3a8a, #172554)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-corner-950/80" />

            {/* Glow orbs */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-corner-500 rounded-full opacity-15 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -right-10 w-72 h-72 bg-corner-600 rounded-full opacity-8 blur-3xl pointer-events-none" />

            <div className="relative z-10">
              {/* Heading */}
              <h3 className="text-2xl md:text-3xl font-extrabold leading-snug mb-3">
                We'd love to hear<br />
                <span className="text-corner-300">from you.</span>
              </h3>
              <p className="text-white/55 text-sm leading-relaxed mb-10">
                Reach us through any channel below. Contact the Corner to confirm current opening hours and activities.
              </p>

              {/* Contact items */}
              <ul className="space-y-6 mb-10">
                {contactItems.map((c) => (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-4 group"
                    >
                      <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/10 group-hover:bg-corner-600 flex items-center justify-center transition-colors">
                        <FontAwesomeIcon icon={c.icon} className="text-corner-300 text-sm" />
                      </span>
                      <div>
                        <p className="text-white/40 text-[11px] uppercase tracking-widest font-semibold mb-0.5">
                          {c.label}
                        </p>
                        <p className="text-white text-sm font-medium group-hover:text-corner-300 transition-colors leading-snug">
                          {c.value}
                        </p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>

            </div>
          </div>

          {/* ── Right panel — form ───────────────────────────────── */}
          <div className="flex-1 bg-white p-10 md:p-12 flex flex-col justify-center">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="mb-2">
                  <h3 className="text-xl font-bold text-gray-900">Send us a message</h3>
                  <p className="text-gray-500 text-sm mt-1">This form opens your email app; please send the message from there.</p>
                </div>

                {/* Name + Email row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      value={form.name}
                      onChange={set("name")}
                      placeholder="Jane Mwangi"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-corner-400 focus:border-transparent transition-shadow"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      value={form.email}
                      onChange={set("email")}
                      placeholder="jane@example.com"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-corner-400 focus:border-transparent transition-shadow"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Subject
                  </label>
                  <select
                    id="contact-subject"
                    value={form.subject}
                    onChange={set("subject")}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-corner-400 focus:border-transparent transition-shadow appearance-none"
                  >
                    <option value="">Select a topic…</option>
                    {subjects.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    value={form.message}
                    onChange={set("message")}
                    placeholder="Tell us how we can help…"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-corner-400 focus:border-transparent transition-shadow resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-corner-600 hover:bg-corner-700 active:bg-corner-800 text-white font-semibold py-3.5 rounded-xl text-sm transition-colors"
                >
                  <FontAwesomeIcon icon={faPaperPlane} />
                  Open email
                  <FontAwesomeIcon icon={faArrowRight} className="text-xs ml-1" />
                </button>

                <p className="text-center text-gray-400 text-xs">
                  Alternatively, email americancornermombasa@gmail.com directly.
                </p>
              </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
