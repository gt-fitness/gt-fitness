import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CommunitySection from "@/components/CommunitySection";
import ChallengesSection from "@/components/ChallengesSection";
import WorkoutsSection from "@/components/WorkoutsSection";
import ClothingSection from "@/components/ClothingSection";
import GallerySection from "@/components/GallerySection";
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
        <ClothingSection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
