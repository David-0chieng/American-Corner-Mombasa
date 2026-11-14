import type { LucideIcon } from "lucide-react";
import { Briefcase, Drama, GraduationCap, Handshake, Languages, Library, MessageCircle, Mic2, Users } from "lucide-react";
import type { Source } from "@/data/weeklyProgram";

const FB = "https://www.facebook.com/AmericancornerMombasa";

export const sources = {
  whatWeDo: { label: "American Spaces, U.S. Department of State", url: "https://americanspaces.state.gov/about-us/what-we-do/" },
  onePager: { label: "U.S. Department of State", url: "https://americanspaces.state.gov/wp-content/uploads/sites/292/External-American-Spaces-One-Pager-.pdf" },
  locator: { label: "American Spaces locator", url: "https://americanspaces.info/locator/acmombasa" },
  locatorMap: { label: "American Spaces map", url: "https://americanspaces.info/locator/map" },
  embassy: { label: "U.S. Embassy in Kenya", url: "https://ke.usembassy.gov/education/am-spaces/" },
  facebook: { label: "Corner's Facebook page", url: `${FB}/` },
  welcomeVideo: { label: "Corner video, Oct 2021", url: `${FB}/videos/364271145358259/` },
  mewa1986: { label: "MEWA (archived)", url: "https://web.archive.org/web/20110722132007/http://www.mewa.or.ke/aboutus.php" },
  mewaMandate: { label: "MEWA (archived, 2019)", url: "https://web.archive.org/web/20191013212109/http://mewa.or.ke/about-us" },
  mewaLibrary: { label: "MEWA library (archived)", url: "https://web.archive.org/web/20150124162434/http://www.mewa.or.ke:80/miclib/index.html" },
  mazruiLibrary: { label: "MEWA (archived)", url: "https://web.archive.org/web/20191013195834/http://mewa.or.ke/projects/prof-ali-a-mazrui-m-library" },
  mewaComputerCentre: { label: "MEWA (archived)", url: "https://web.archive.org/web/20120402230830/http://www.mewa.or.ke/computercentre/index.php" },
  workshop2010: { label: "U.S. Embassy Nairobi photos", url: "https://commons.wikimedia.org/wiki/Category:Muslim_Education_and_Welfare_Association" },
  embassy2011: { label: "U.S. Embassy Nairobi (archived)", url: "https://web.archive.org/web/20110302114759/http://nairobi.usembassy.gov:80/resources/american-corners-contact-information.html" },
  kindles: { label: "U.S. Embassy Nairobi (archived)", url: "https://web.archive.org/web/20170203013334/https://ke.usembassy.gov/american-corner-mombasa-introduces-new-technologies-for-learning-english/" },
  mewaNews2014: { label: "MEWA news (archived)", url: "https://web.archive.org/web/20160716023902/http://mewa.or.ke/miclib/newslib.html?cat=1" },
  thanksgiving2014: { label: "U.S. Embassy Nairobi (archived)", url: "https://web.archive.org/web/20170203051907/https://ke.usembassy.gov/american-corner-mombasa-celebrates-early-thanksgiving/" },
  socialMedia2015: { label: "U.S. Embassy Nairobi (archived)", url: "https://web.archive.org/web/20190824223022/https://ke.usembassy.gov/muslim-education-and-welfare-association-mewa-information-center-american-corner-mic-ac-mombasa-holds-social-media-training/" },
  educationUsa2021: { label: "Corner post, Feb 2021", url: `${FB}/posts/3769465349810792/` },
  english2022: { label: "Corner post, Mar 2022", url: `${FB}/posts/4971653949591920/` },
  awe2022: { label: "Kenya News Agency, Nov 2022", url: "https://www.kenyanews.go.ke/women-undergo-entrepreneurial-training-to-improve-their-businesses/" },
  awePost2022: { label: "Corner post, Dec 2022", url: `${FB}/posts/471539448452963/` },
  deenKenya2023: { label: "DEEN Kenya post, Jan 2023", url: "https://www.facebook.com/DEENKenya.org/posts/158216406969574" },
  afribot2024: { label: "Afribot Robotics video, 2024", url: "https://www.youtube.com/watch?v=cOKe8YuFPAs" },
  agaKhan2024: { label: "Corner video, May 2024", url: `${FB}/videos/757612743121956/` },
  testimonials2024: { label: "Corner YouTube, Jul 2024", url: "https://www.youtube.com/watch?v=p1aduv73X8I" },
  techFrontiers2026: { label: "Participant's LinkedIn post", url: "https://www.linkedin.com/posts/daniel-muinuki-6740b5318_kenyatechfrontiers-betheleader-americancornermombasa-activity-7476569530429874176-QkBO" },
  techFrontiersCall: { label: "Be The Leader, Jan 2026", url: "https://www.linkedin.com/posts/be-the-leader-btl_employability-americafirst-usworkplacestandards-activity-7418009705329090560-9NEB" },
  echoes2026: { label: "Corner video, Jun 2026", url: `${FB}/videos/4352965881613215/` },
  volunteers2026: { label: "Corner video, Oct 2026", url: `${FB}/videos/29247234354874273/` },
  gamesCorner2026: { label: "Corner video, Oct 2026", url: `${FB}/videos/1103625672573696/` },
  techTalk2026: { label: "Corner video, Nov 2026", url: `${FB}/videos/1695989975225632/` },
  computer2026: { label: "Corner post, Nov 2026", url: `${FB}/posts/1478269467779951/` },
  mtaani2024: { label: "The Star, Nov 2024", url: "https://www.the-star.co.ke/news/realtime/2024-11-04-us-embassy-unveils-american-corner-mtaani-for-young-innovators" },
  bus2025: { label: "Kenya News Agency, Aug 2025", url: "https://www.kenyanews.go.ke/us-knls-partner-in-tech-and-innovations/" },
  visas: { label: "U.S. Department of State visas", url: "https://travel.state.gov/content/travel/en/us-visas.html" },
} satisfies Record<string, Source>;

export const contact = {
  email: "americancornermombasa@gmail.com",
  phones: [
    { label: "+254 722 819 795", href: "tel:+254722819795" },
    { label: "+254 725 833 597", href: "tel:+254725833597" },
    { label: "+254 041 493157 (landline)", href: "tel:+25441493157" },
  ],
  address: "MEWA Information Center, My-Tac Hall, next to Masjid Musa, Majengo",
  postal: "P.O. Box 89427-80100, Mombasa",
  mapEmbed: "https://maps.google.com/maps?q=-4.0534552,39.6620975&z=17&output=embed",
  directions: "https://www.google.com/maps/dir/?api=1&destination=-4.0534552,39.6620975",
  social: [
    { label: "Facebook", href: `${FB}/` },
    { label: "Instagram", href: "https://www.instagram.com/americancornerke_mombasa" },
    { label: "X", href: "https://x.com/ACMombasa" },
    { label: "YouTube", href: "https://www.youtube.com/@AmericanCornerMombasa" },
  ],
};

export const welcomeQuote = {
  text: "Welcome to American Corner Mombasa. You will be educated, inspired and entertained. We have so much for you. Make a point to visit us. The Space is open and free for you.",
  source: sources.welcomeVideo,
};

export const homeFeatures = [
  { title: "Build tech skills", text: "Repair computers, write your first program and hear from people working in tech.", to: "/weekly-program/programming-lessons", photo: "american-spaces-coding-1" },
  { title: "Practise your English", text: "Speak with confidence in a friendly conversation club.", to: "/weekly-program/english-club", photo: "english-club-1" },
  { title: "Plan to study in the U.S.", text: "Explore EducationUSA's five steps and current exchange opportunities.", to: "/weekly-program/educationusa", photo: "educationusa-1" },
  { title: "Grow a business", text: "Turn an idea into a plan, then practise your pitch.", to: "/weekly-program/entrepreneurship", photo: "entrepreneurship-1" },
  { title: "Play and connect", text: "Chess, quizzes and team games every week.", to: "/weekly-program/games-day", photo: "games-day-1" },
  { title: "Learn online safely", text: "Build everyday digital skills and use the Corner's free internet.", to: "/weekly-program/digital-literacy", photo: "digital-literacy-1" },
] as const;

export const latestPosts: { url: string; caption: string; kind?: "post" | "video" }[] = [
  { url: sources.techTalk2026.url, caption: "Tech Talk: the Internet of Behaviour (17 November 2026)", kind: "video" },
  { url: sources.computer2026.url, caption: "Weekly computer repair and maintenance announced (22 November 2026)" },
  { url: `${FB}/posts/1478508054422759/`, caption: "Photos shared by the Corner (22 November 2026)" },
];

export const getInvolved: { icon: LucideIcon; title: string; text: string; source?: Source; subject: string }[] = [
  { icon: Users, title: "Volunteer", text: "Help run sessions and welcome visitors. In October 2026, 20 volunteers were trained to support the Corner's programs.", source: sources.volunteers2026, subject: "Volunteering at American Corner Mombasa" },
  { icon: Mic2, title: "Lead a session", text: "Share your expertise at a Tech Talk, workshop or club. Propose a topic and the audience it suits.", subject: "Session proposal for American Corner Mombasa" },
  { icon: Handshake, title: "Partner with us", text: "Organizations have worked with the Corner on training, outreach and youth programs.", subject: "Partnership with American Corner Mombasa" },
];

export const keyFacts: { value: string; label: string; source?: Source; to?: string }[] = [
  { value: "1986", label: "MEWA, the Corner's host, is founded", source: sources.mewa1986 },
  { value: "2011", label: "Earliest U.S. Embassy record of the Corner", source: sources.embassy2011 },
  { value: "9", label: "Weekly programs, including one proposed", to: "/events" },
  { value: "Free", label: "Open access to resources and programs", source: sources.onePager },
];

export const pillars: { icon: LucideIcon; title: string; text: string; links: { label: string; to: string }[] }[] = [
  { icon: Briefcase, title: "Professional skills", text: "Hands-on technology, digital and business skills for study and work.", links: [
    { label: "Computer maintenance", to: "/weekly-program/computer-maintenance" },
    { label: "Programming", to: "/weekly-program/programming-lessons" },
    { label: "Digital literacy", to: "/weekly-program/digital-literacy" },
    { label: "Entrepreneurship", to: "/weekly-program/entrepreneurship" },
  ] },
  { icon: GraduationCap, title: "U.S. higher education", text: "Information on studying in the United States and EducationUSA's five steps.", links: [{ label: "EducationUSA & exchanges", to: "/weekly-program/educationusa" }] },
  { icon: Languages, title: "English language", text: "Conversation practice and free American English learning materials.", links: [{ label: "English club", to: "/weekly-program/english-club" }] },
  { icon: Library, title: "Information resources", text: "Books, free internet and quiet study space in MEWA's library.", links: [{ label: "Digital literacy", to: "/weekly-program/digital-literacy" }] },
  { icon: Drama, title: "Cultural programs", text: "Quizzes, games, film screenings and celebrations that connect cultures.", links: [
    { label: "Trivia Thursday", to: "/weekly-program/trivia-thursday" },
    { label: "Games day", to: "/weekly-program/games-day" },
  ] },
  { icon: MessageCircle, title: "Exchange alumni", text: "Alumni of U.S. exchange programs can share their experiences as speakers and mentors.", links: [{ label: "Tech talks", to: "/weekly-program/tech-talks" }] },
];

export const mewaFacts = [
  { text: "Registered as a volunteer association on 31 July 1986 and as an NGO in 1993, with its secretariat in Majengo.", source: sources.mewa1986 },
  { text: "Works in education and training, health and harm reduction, and runs a hospital.", source: sources.mewaMandate },
  { text: "Established its Library and Information Center in 2000. The Corner operates there as the MEWA Information Center – American Corner.", source: sources.mewaLibrary },
  { text: "Its library is named the Ali A. Mazrui Memorial Library, which MEWA describes as operating in partnership with the U.S. Embassy.", source: sources.mazruiLibrary },
];

export const story: { year: string; title: string; text: string; sources: Source[] }[] = [
  { year: "1986", title: "MEWA is founded", text: "The Muslim Education and Welfare Association begins as a volunteer association in Mombasa.", sources: [sources.mewa1986] },
  { year: "2000", title: "A library and information center", text: "MEWA opens its Library and Information Center in Majengo — today the Corner's home.", sources: [sources.mewaLibrary] },
  { year: "2006", title: "Computer training at MEWA", text: "MEWA opens a computer training centre with a training and maintenance unit.", sources: [sources.mewaComputerCentre] },
  { year: "2010", title: "Volunteer workshop with the U.S. Embassy", text: "The MEWA Information Centre holds a volunteer workshop with the U.S. Embassy at Leven House, Mombasa, on 4 December.", sources: [sources.workshop2010] },
  { year: "2011", title: "Listed as American Corner Mombasa", text: "The U.S. Embassy lists American Corner Mombasa at the MEWA Information Center, with Biasha O. Seif as coordinator — the earliest record found.", sources: [sources.embassy2011] },
  { year: "2013–14", title: "New ways to learn English", text: "More than 30 madrassa teachers try Playaways and Kindles, and an 18-month English programme closes with about 60 attendees.", sources: [sources.kindles, sources.mewaNews2014] },
  { year: "2014", title: "An early Thanksgiving", text: "More than 200 people join an early Thanksgiving with local community groups.", sources: [sources.thanksgiving2014] },
  { year: "2015", title: "Social media training", text: "More than 150 young people join a two-day workshop with the Bloggers Association of Kenya and Jukumu Letu.", sources: [sources.socialMedia2015] },
  { year: "2021", title: "EducationUSA outreach", text: "A session at Sheikh Khalifa Secondary School covers financial aid, study opportunities and community colleges.", sources: [sources.educationUsa2021] },
  { year: "2022", title: "English and entrepreneurship", text: "The English Conversation Club meets on Thursdays, and Mombasa women entrepreneurs take part in the Academy for Women Entrepreneurs.", sources: [sources.english2022, sources.awe2022] },
  { year: "2024", title: "Robotics and community voices", text: "Afribot Robotics runs robotics, coding and 3D printing training, and the Corner shares library testimonials from beneficiaries.", sources: [sources.afribot2024, sources.testimonials2024] },
  { year: "2026", title: "A full weekly program", text: "Kenya Tech Frontiers training in April, a film screening in June, 20 volunteers trained in October, and weekly Tech Talks, Games Corner and computer maintenance.", sources: [sources.techFrontiers2026, sources.echoes2026, sources.volunteers2026, sources.gamesCorner2026, sources.computer2026] },
];

export const team = [
  { name: "Biasha O. Seif", role: "Coordinator and librarian", text: "Named as the Corner's coordinator in U.S. Embassy, MEWA and Kenya News Agency records from 2011 to 2022.", sources: [sources.embassy2011, sources.mewaLibrary, sources.awe2022] },
  { name: "Alphonce Kazungu", role: "Volunteer facilitator", text: "Facilitates the weekly computer repair and maintenance sessions on Monday afternoons.", sources: [sources.computer2026] },
  { name: "Volunteer team", role: "Program support", text: "Twenty volunteers were trained in October 2026, with Esther Kihinga of U.S. Embassy Public Affairs and Boniface Muli, coordinator of American Space Mtaani.", sources: [sources.volunteers2026] },
];

export const recentGuests = [
  { name: "Antony Wugoma", role: "Software developer, Pwani Teknogalz", event: "Tech Talk on the Internet of Behaviour, Nov 2026", to: "/weekly-program/tech-talks" },
  { name: "Cavin O. Apodo", role: "Founder, Be The Leader", event: "Kenya Tech Frontiers training, Apr 2026", to: "/weekly-program/entrepreneurship" },
  { name: "Ella Wafula", role: "Director, Ushindi Empowerment", event: "Academy for Women Entrepreneurs, 2022", to: "/weekly-program/entrepreneurship" },
  { name: "Mina Gavell", role: "English instructor and teacher trainer", event: "English Conversation Club, Mar 2022", to: "/weekly-program/english-club" },
  { name: "Njeri Wangari", role: "Bloggers Association of Kenya", event: "Social media training, 2015", to: "/weekly-program/digital-literacy" },
];

export const partners: { name: string; role: string; year: string; source: Source }[] = [
  { name: "Muslim Education and Welfare Association (MEWA)", role: "Host organization", year: "Since at least 2011", source: sources.mewaLibrary },
  { name: "U.S. Embassy Nairobi", role: "Manages American Spaces in Kenya", year: "Ongoing", source: sources.embassy },
  { name: "Be The Leader", role: "Kenya Tech Frontiers training", year: "2026", source: sources.techFrontiersCall },
  { name: "Afribot Robotics", role: "Robotics, coding and 3D printing", year: "2024", source: sources.afribot2024 },
  { name: "Aga Khan Academy Mombasa", role: "Student service-learning project", year: "2024", source: sources.agaKhan2024 },
  { name: "DEEN Kenya", role: "Madrassa outreach on digital skills", year: "2023", source: sources.deenKenya2023 },
  { name: "Ushindi Empowerment", role: "Academy for Women Entrepreneurs", year: "2022", source: sources.awe2022 },
  { name: "Bloggers Association of Kenya and Jukumu Letu", role: "Social media training", year: "2015", source: sources.socialMedia2015 },
  { name: "Kenya Library Association, Mombasa chapter", role: "Librarians' workshop", year: "2014", source: sources.mewaNews2014 },
];

export const networkFacts = [
  { value: "~600", label: "American Spaces in more than 140 countries" },
  { value: "21M+", label: "Visitors to American Spaces in 2025" },
  { value: "1927", label: "First American Space opens, in Buenos Aires" },
  { value: "~200", label: "American Spaces host EducationUSA advising centers" },
];

export const kenyaSpaces = [
  { name: "American Corner Mombasa", place: "Majengo, Mombasa", status: "In operation", current: true },
  { name: "American Corner Lamu", place: "Lamu", status: "In operation" },
  { name: "American Corner Nakuru", place: "Nakuru", status: "In operation" },
  { name: "American Corner Moi University Nairobi", place: "Nairobi CBD", status: "In operation" },
  { name: "American Space Mtaani", place: "Kilimani, Nairobi", status: "In operation" },
  { name: "American Center Nairobi", place: "U.S. Embassy, Nairobi", status: "Reduced operation" },
];

export const aboutFaqs = [
  { question: "Who can visit?", answer: "Everyone. American Spaces provide free and open access for members of local communities to learn about the United States, develop skills and use a wide range of resources." },
  { question: "Is it free?", answer: "Yes. Programs and resources are free. Ask the Corner about any materials or trip costs for special activities." },
  { question: "When is the Corner open?", answer: "Opening hours are not published officially, and walk-ins are welcome during open hours. Call or email before visiting to confirm hours and session times." },
  { question: "Do I need to register?", answer: "You can walk in. Some programs ask participants to register in advance; check the Corner's announcements or contact the team." },
  { question: "Is the Corner part of the U.S. Embassy?", answer: "It is an American Corner: a partner location hosted by MEWA and supported by the U.S. Embassy in Nairobi as part of the U.S. Department of State's American Spaces network." },
  { question: "Can I get help with a U.S. visa here?", answer: "No. The Corner is a learning space, not a consular office. Official visa information is available from the U.S. Department of State." },
  { question: "How do I hear about events?", answer: "Follow American Corner Mombasa on Facebook, Instagram, X and YouTube, or check the weekly program on this site." },
];

