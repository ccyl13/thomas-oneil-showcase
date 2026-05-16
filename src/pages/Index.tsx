import Navbar from "@/components/Navbar";
import GlobalBackground from "@/components/GlobalBackground";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import LinkedInSection from "@/components/LinkedInSection";
import SpeakerSection from "@/components/SpeakerSection";
import ToolsSection from "@/components/ToolsSection";
import VulnerabilitiesSection from "@/components/VulnerabilitiesSection";
import LawEnforcementSection from "@/components/LawEnforcementSection";
import CertificationsSection from "@/components/CertificationsSection";
import PodcastsSection from "@/components/PodcastsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <GlobalBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <LinkedInSection />
      <SpeakerSection />
      <ToolsSection />
      <VulnerabilitiesSection />
      <LawEnforcementSection />
      <CertificationsSection />
      <PodcastsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
