import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SpeakerSection from "@/components/SpeakerSection";
import ToolsSection from "@/components/ToolsSection";
import CertificationsSection from "@/components/CertificationsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SpeakerSection />
      <ToolsSection />
      <CertificationsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
