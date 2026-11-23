// Content for /impact. Every figure, quote and story comes from the published source listed with it.
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { faBuildingColumns, faDoorOpen, faEarthAfrica, faHandshake, faLaptopCode, faSignsPost, faUsers } from "@fortawesome/free-solid-svg-icons";
import { sources } from "@/data/corner";
import { photos } from "@/data/photos";
import { programSources, type Photo, type Source } from "@/data/weeklyProgram";

export type ImpactFigure = { value: string; label: string; when: string; sources: Source[] };

export type ImpactStory = {
  title: string;
  when: string;
  place: string;
  people: string;
  figure?: { value: string; label: string };
  quote?: { text: string; by: string };
  story: string;
  photo: Photo;
  sources: Source[];
};

const techFrontiersRecap: Source = { label: "Corner post via FindGlocal, 2026", url: "https://www.findglocal.com/KE/Mombasa/379146872176007/American-Corner-Mombasa" };

export const impactTicker = [
  "1,000+ students at a career day",
  "150+ young people trained in social media",
  "50 librarians trained as trainers",
  "30 women entrepreneurs",
  "30 young professionals ready for remote work",
  "20 new volunteers",
  "Free and open to everyone",
];

export const impactHighlights: ImpactFigure[] = [
  { value: "1,000+", label: "Students from 12 secondary schools at a career advisory day", when: "2014", sources: [sources.mewaNews2014] },
  { value: "150+", label: "Young people trained in blogging and social media", when: "2015", sources: [sources.socialMedia2015] },
  { value: "50", label: "Librarians trained to train other teacher-librarians", when: "2014", sources: [sources.mewaNews2014] },
  { value: "30", label: "Mombasa women in the Academy for Women Entrepreneurs", when: "2022", sources: [sources.awe2022] },
];

export const impactQuote = {
  lead: "If it was not for the programme I would not have the",
  highlight: "confidence",
  rest: "on how to do business.",
  by: "Thaiba Khatmi",
  role: "Academy for Women Entrepreneurs participant, speaking to the Kenya News Agency in 2022",
  source: sources.awe2022,
};

export const impactSteps: { step: string; title: string; subtitle: string; text: string; icon: IconDefinition; photo: Photo; sources: Source[]; link?: { label: string; to: string } }[] = [
  {
    step: "Step 01",
    title: "Open access",
    subtitle: "Free for everyone",
    text: "Anyone can walk in to use books, free internet and quiet study space in MEWA's library. American Spaces offer free and open access to their resources and programs.",
    icon: faDoorOpen,
    photo: photos["american-corner-kisumu-2"],
    sources: [sources.onePager],
  },
  {
    step: "Step 02",
    title: "Practical skills",
    subtitle: "Every week",
    text: "Weekly sessions in computer repair, programming, digital literacy, English conversation and entrepreneurship, led by the Corner's team, volunteers and guest speakers.",
    icon: faLaptopCode,
    photo: photos["american-spaces-coding-1"],
    sources: [],
    link: { label: "See the weekly program", to: "/events" },
  },
  {
    step: "Step 03",
    title: "New opportunities",
    subtitle: "Study, work and community",
    text: "Participants connect to EducationUSA advice on studying in the United States, Embassy-supported trainings such as Kenya Tech Frontiers and partner organizations, and can give back as volunteers.",
    icon: faSignsPost,
    photo: photos["american-spaces-coding-2"],
    sources: [sources.techFrontiersCall, sources.volunteers2026],
  },
];

export const impactStories: ImpactStory[] = [
  {
    title: "Ready for remote work",
    when: "April 2026",
    place: "American Corner Mombasa",
    people: "Be The Leader, with the U.S. Embassy Nairobi",
    figure: { value: "30", label: "young professionals aged 18–35" },
    quote: { text: "Watching a diverse group of peers share their aspirations, backgrounds, and fun facts reminded me of the sheer power of community-driven growth.", by: "Daniel Muinuki, participant" },
    story: "Kenya Tech Frontiers brought 30 digital professionals, selected on merit, to the Corner for a four-day residency that began on 13 April 2026. Run by Be The Leader with the U.S. Embassy Nairobi, it prepared them for U.S.-based remote work: cyber hygiene, a professional online presence, tools such as Google Docs and Trello, and AI for drafting and research. Afternoon sessions covered U.S.–Kenya trade under AGOA, HS codes and logistics compliance. The program offered a certificate of completion and the chance to join the American Spaces alumni database.",
    photo: photos["digital-literacy-3"],
    sources: [sources.techFrontiers2026, sources.techFrontiersCall, techFrontiersRecap],
  },
  {
    title: "Twenty new volunteers",
    when: "October 2026",
    place: "American Corner Mombasa",
    people: "With Esther Kihinga, U.S. Embassy Public Affairs, and Boniface Muli, American Space Mtaani",
    figure: { value: "20", label: "volunteers trained" },
    story: "The Corner trained 20 volunteers to help run sessions and welcome visitors. Esther Kihinga of U.S. Embassy Public Affairs and Boniface Muli, coordinator of American Space Mtaani in Nairobi, joined the training. Volunteers already shape the week: Alphonce Kazungu, a volunteer facilitator, leads the Monday afternoon computer repair and maintenance sessions.",
    photo: photos["mewa-volunteering-2010"],
    sources: [sources.volunteers2026, sources.computer2026],
  },
  {
    title: "Talks, code and games every week",
    when: "October–November 2026",
    place: "American Corner Mombasa",
    people: "Guest speaker Antony Wugoma, Pwani Teknogalz",
    figure: { value: "3", label: "Tech Talks in under a month" },
    story: "Tech Talks covered sustainable technology on 27 October, contributing to open source on 10 November and the Internet of Behaviour on 17 November, with software developer Antony Wugoma of Pwani Teknogalz. Games Corner opened on 23 October with indoor games every Friday from 2 pm to 5 pm, and a Python Bootcamp was listed for Tuesday afternoons in November.",
    photo: photos["tech-talks-2"],
    sources: [programSources.techTalkSustainable, programSources.techTalkOpenSource, sources.techTalk2026, sources.gamesCorner2026, programSources.pythonBootcamp],
  },
  {
    title: "A library that works for learners",
    when: "2024–2026",
    place: "MEWA library, Majengo",
    people: "Students and library users",
    figure: { value: "Free", label: "internet, books and study space" },
    story: "The Corner sits inside MEWA's Library and Information Center, where anyone can use books, free internet and quiet study space. In October 2026, students preparing for Kenya's national exams revised there with the Corner's free internet and resources. In 2024 the Corner published Library Testimonials, a video of testimonials from the library's users.",
    photo: photos["library-1"],
    sources: [sources.mewaLibrary, programSources.examPrep, sources.testimonials2024],
  },
  {
    title: "Robots, code and a website",
    when: "2024",
    place: "American Corner Mombasa",
    people: "Afribot Robotics and Aga Khan Academy Mombasa students",
    figure: { value: "4", label: "skills: robotics, coding, 3D printing and AI" },
    story: "Through a partnership with Afribot Robotics, children, teenagers and young people learned robotics, coding, 3D printing and artificial intelligence. In May 2024, students from Aga Khan Academy Mombasa designed a website and a video review about the Corner as a service-learning project.",
    photo: photos["programming-lessons-1"],
    sources: [sources.afribot2024, sources.agaKhan2024],
  },
  {
    title: "Women entrepreneurs find their pitch",
    when: "2022",
    place: "Mombasa County",
    people: "Ushindi Empowerment, funded by the U.S. Embassy",
    figure: { value: "30", label: "Mombasa women entrepreneurs" },
    quote: { text: "I learnt how to be accountable, transparent and authentic when telling my story.", by: "Thaiba Khatmi, participant" },
    story: "Thirty women from Mombasa County completed the Academy for Women Entrepreneurs, a U.S. Embassy–funded program that Ushindi Empowerment delivered to 120 women in Mombasa, Nairobi, Nakuru and Lamu. Most ran small and medium businesses in agribusiness, food, services and manufacturing. Training, mentorship and pitching built skills in strategic planning, marketing and financial management. Thaiba Khatmi, a fashion entrepreneur and the top pitch awardee, won seed funding and used it to venture into waste management.",
    photo: photos["entrepreneurship-1"],
    sources: [sources.awe2022, sources.awePost2022],
  },
  {
    title: "Social media for social good",
    when: "2015",
    place: "MEWA Information Center",
    people: "Bloggers Association of Kenya and Jukumu Letu",
    figure: { value: "150+", label: "young people in a two-day workshop" },
    story: "Corner librarian Biasha Omar Seif hosted a two-day social media workshop for more than 150 young people from Mombasa, including Form Four graduates and university students. The Bloggers Association of Kenya (BAKE) and Jukumu Letu trained them in blogging and in using Twitter and Facebook effectively. Njeri Wangari, BAKE's Director of Training and Outreach, showed how content can empower citizen journalists and how social media can improve life in the community.",
    photo: photos["digital-literacy-1"],
    sources: [sources.socialMedia2015],
  },
  {
    title: "A career day for 1,000 students",
    when: "2014",
    place: "Mombasa County",
    people: "MEWA Information Center, with American Corner Lamu",
    figure: { value: "1,000+", label: "students from 12 secondary schools" },
    story: "The MEWA Information Center, the Corner's home, organized a career advisory day for more than 1,000 students from 12 secondary schools in Mombasa County. Students explored careers, universities and subject choices. The Corner's coordinator spoke about U.S. education, introduced the EducationUSA advising center, which gives free advice on studying in the United States, and handed out EducationUSA Kenya brochures. Fatma Al Busaidy, coordinator of the Lamu American Corner, gave a motivational talk.",
    photo: photos["educationusa-1"],
    sources: [sources.mewaNews2014],
  },
  {
    title: "Training the trainers",
    when: "2014",
    place: "MEWA Information Center",
    people: "Kenya Library Association, Mombasa chapter",
    figure: { value: "50", label: "librarians trained to train others" },
    story: "The Corner hosted the Kenya Library Association's Mombasa chapter for a one-day training of trainers. Fifty librarians, who would go on to train other teacher-librarians, built library and information literacy skills. They included librarians from 11 public schools whose libraries are networked with MEWA's library. The Corner's coordinator introduced its Kindle e-readers and Playaway audiobooks.",
    photo: photos["library-2"],
    sources: [sources.mewaNews2014],
  },
  {
    title: "Taking the Corner to the community",
    when: "2014",
    place: "Schools and community events in Mombasa",
    people: "Pupils, parents and women's groups",
    figure: { value: "80", label: "pupils and teachers at a U.S. history lesson" },
    story: "On 4 July 2014 the Corner marked U.S. Independence Day at Gurunanak Primary School with 80 pupils and teachers, a talk on American history and the coloring of American and Kenyan flags. At Serani Primary School, 25 Class One pupils heard the story of Abraham Lincoln on Children's Book Day. In Changamwe, 25 women from five women's groups shared ways to improve girls' education. At a Radio Salaam fair attended by more than 4,000 people, the Corner showcased its books, e-readers and EducationUSA materials.",
    photo: photos["mombasa-2"],
    sources: [sources.mewaNews2014],
  },
  {
    title: "Thanksgiving, shared with Mombasa",
    when: "November 2014",
    place: "Mombasa",
    people: "Five Mombasa community organizations",
    figure: { value: "200+", label: "people at an early Thanksgiving" },
    story: "Corner coordinator Biasha O. Seif led an early Thanksgiving for more than 200 people with five local groups: Old Town Community Workers, Soul Sisters Network, Mombasa Yes We Can Group, Al Aman Group and the Al Muktadir Association for Physically Handicapped. She explained Thanksgiving as a time when American families share a meal, give thanks and volunteer. The groups donated hygiene packs, drinking water, plates, spoons and cups to young men aged 15 to 17 at Shimo La Tewa Borstal Institution.",
    photo: photos["mewa-cleanup-2010"],
    sources: [sources.thanksgiving2014],
  },
  {
    title: "English for madrassa teachers",
    when: "2013–2014",
    place: "MEWA Information Center",
    people: "Madrassa teachers from the Mombasa region",
    figure: { value: "18", label: "months of English training" },
    story: "For a year and a half, madrassa teachers from the Mombasa region came to the Corner on an English program sponsored by the U.S. Embassy. More than 30 of them learned to use Playaway audiobooks and Kindle e-readers to improve their listening, pronunciation and reading comprehension, and found resources for their own classrooms. Thirty of the teachers also volunteered to clean the Corner. The program closed in August 2014 with a ceremony for 60 teachers, guests and MEWA staff.",
    photo: photos["english-club-2"],
    sources: [sources.kindles, sources.mewaNews2014],
  },
];

export const impactContext: ImpactFigure[] = [
  { value: "16.8%", label: "of Mombasa residents aged three and over had used a computer, against 10.4% nationally", when: "2019 census", sources: [programSources.census] },
  { value: "39.2%", label: "of Mombasa residents aged three and over used the internet, against 22.6% nationally", when: "2019 census", sources: [programSources.census] },
  { value: "5,560", label: "Kenyan students enrolled in U.S. higher education, up 4.2% on the year before", when: "2025/26", sources: [programSources.openDoors] },
  { value: "20th", label: "Kenya's rank of 117 countries for English proficiency; speaking is its weakest skill", when: "2026", sources: [programSources.efEpi] },
];

export const partnerReasons: { title: string; text: string; icon: IconDefinition; sources: Source[] }[] = [
  {
    title: "A trusted local host",
    text: "The Muslim Education and Welfare Association (MEWA), founded in Mombasa in 1986, hosts the Corner in its Library and Information Center in Majengo.",
    icon: faBuildingColumns,
    sources: [sources.mewa1986, sources.mewaLibrary],
  },
  {
    title: "A global network",
    text: "The Corner is one of about 600 American Spaces in more than 140 countries, supported in Kenya by the U.S. Embassy in Nairobi.",
    icon: faEarthAfrica,
    sources: [sources.whatWeDo, sources.embassy],
  },
  {
    title: "People ready to learn",
    text: "Students, teachers, entrepreneurs and young professionals take part every week, and 20 volunteers trained in 2026 help run sessions and welcome visitors.",
    icon: faUsers,
    sources: [sources.volunteers2026],
  },
  {
    title: "Partners who deliver",
    text: "Be The Leader, Ushindi Empowerment, Afribot Robotics, the Bloggers Association of Kenya and the Kenya Library Association have all run programs here.",
    icon: faHandshake,
    sources: [sources.techFrontiersCall, sources.awe2022, sources.afribot2024, sources.socialMedia2015, sources.mewaNews2014],
  },
];
