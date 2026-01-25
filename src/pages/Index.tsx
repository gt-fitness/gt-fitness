import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CommunitySection from "@/components/CommunitySection";
import ChallengesSection from "@/components/ChallengesSection";
import WorkoutsSection from "@/components/WorkoutsSection";
import EventsSection from "@/components/EventsSection";
import ClothingSection from "@/components/ClothingSection";
import GallerySection from "@/components/GallerySection";
import JoinSection from "@/components/JoinSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CommunitySection />
        <ChallengesSection />
        <WorkoutsSection />
        <EventsSection />
        <ClothingSection />
        <GallerySection />
        <JoinSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
