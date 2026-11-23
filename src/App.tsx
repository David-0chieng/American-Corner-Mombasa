import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy } from "react";
import Index from "./pages/Index";
import useScrollReveal from "@/hooks/useScrollReveal";
import CornerSite from "./pages/CornerSite";
import CornerHome from "./pages/CornerHome";
import CornerAbout from "./pages/CornerAbout";

const About = lazy(() => import("./pages/About"));
const Programs = lazy(() => import("./pages/Programs"));
const Contact = lazy(() => import("./pages/Contact"));
const Impact = lazy(() => import("./pages/Impact"));
const Donate = lazy(() => import("./pages/Donate"));
const NotFound = lazy(() => import("./pages/NotFound"));
const CaseManagement = lazy(() => import("./pages/CaseManagement"));
const TourismInnovationLab = lazy(() => import("./pages/TourismInnovationLab"));
const Events = lazy(() => import("./pages/Events"));
const WeeklyProgramDetail = lazy(() => import("./pages/WeeklyProgramDetail"));
const PhotoCredits = lazy(() => import("./pages/PhotoCredits"));
const CampusAmbassador = lazy(() => import("./pages/CampusAmbassador"));
const SwahiliTechWomen = lazy(() => import("./pages/SwahiliTechWomen"));
const Communication = lazy(() => import("./pages/Communication"));
const TechEngineering = lazy(() => import("./pages/TechEngineering"));
const Creatives = lazy(() => import("./pages/Creatives"));
const CommunityEntrepreneurship = lazy(() => import("./pages/CommunityEntrepreneurship"));
const EmployerEngagement = lazy(() => import("./pages/EmployerEngagement"));
const Careers = lazy(() => import("./pages/Careers"));
const CareerDetail = lazy(() => import("./pages/CareerDetail"));
const IndustrialAttachment = lazy(() => import("./pages/IndustrialAttachment"));
const TermsOfReference = lazy(() => import("./pages/TermsOfReference"));
const BoardMembers = lazy(() => import("./pages/BoardMembers"));
const PlacementPartnersTOR = lazy(() => import("@/pages/PlacementPartnersTOR"));
const Heritage = lazy(() => import("./pages/Heritage"));
const V2T = lazy(() => import("./pages/V2T"));
const YouthHubNetwork = lazy(() => import("./pages/YouthHubNetwork"));
const DigitalLiteracy = lazy(() => import("./pages/DigitalLiteracy"));
const ScaleUp = lazy(() => import("./pages/ScaleUp"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));

const queryClient = new QueryClient();

const LegacyNotice = () => {
  const { pathname } = useLocation();
  if (["/", "/about", "/programs", "/events", "/contact", "/photo-credits", "/impact"].includes(pathname) || pathname.startsWith("/weekly-program/")) return null;
  return (
    <div role="note" className="bg-amber-50 border-b border-amber-200 px-4 py-3 text-center text-sm text-amber-950">
      Reserved — awaits confirmation. This preserved content, including opportunities and contacts, has not been verified as an American Corner Mombasa offering.
    </div>
  );
};

const App = () => {
  useScrollReveal();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <LegacyNotice />
        <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<CornerHome />} />
          <Route path="/about" element={<CornerAbout />} />
          <Route path="/programs" element={<CornerSite />} />
          <Route path="/legacy/home" element={<Index />} />
          <Route path="/legacy/about" element={<About />} />
          <Route path="/legacy/programs" element={<Programs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/donate" element={<Donate />} />
          {/* Program-specific routes */}
          <Route path="/programs/case-management" element={<CaseManagement />} />
          <Route path="/programs/tourism-innovation-lab" element={<TourismInnovationLab />} />
          <Route path="/events" element={<Events />} />
          <Route path="/weekly-program/:slug" element={<WeeklyProgramDetail />} />
          <Route path="/photo-credits" element={<PhotoCredits />} />
          <Route path="/programs/campus-ambassador" element={<CampusAmbassador />} />
          <Route path="/programs/swahili-tech-women" element={<SwahiliTechWomen />} />
          <Route path="/programs/employer-engagement" element={<EmployerEngagement />} />

          <Route path="/programs/heritage" element={<Heritage />} />
          <Route path="/programs/v2t" element={<V2T />} />
          <Route path="/programs/youth-hub-network" element={<YouthHubNetwork />} />
          <Route path="/programs/digital-literacy" element={<DigitalLiteracy />} />
          <Route path="/programs/scale-up" element={<ScaleUp />} />

          {/* Department routes */}
          <Route path="/department/communication" element={<Communication />} />
          <Route path="/department/tech-engineering" element={<TechEngineering />} />
          <Route path="/department/creatives" element={<Creatives />} />
          <Route path="/department/community-entrepreneurship" element={<CommunityEntrepreneurship />} />

          {/* Career routes */}
          <Route path="/careers" element={<Careers />} />
          <Route path="/career/:jobId" element={<CareerDetail />} />
          {/* Industrial Attachment routes */}
          <Route path="/industrial-attachment" element={<IndustrialAttachment />} />

          {/* Board Members */}
          <Route path="/board-members" element={<BoardMembers />} />

          {/* terms of reference */}
          <Route path="/terms-of-reference" element={<TermsOfReference />} />
          {/* Privacy Policy */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/placement-partners-tor"
            element={<PlacementPartnersTOR />}
          />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;
