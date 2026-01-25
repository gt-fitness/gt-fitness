import { Button } from "@/components/ui/button";
import { Play, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import gtLogoWhite from "@/assets/gt-logo-white.png";
import communityData from "@/data/community.json";

const HeroSection = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const scrollToContent = () => {
    const element = document.querySelector("#community");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleStartTraining = () => {
    navigate("/workouts");
  };

  const handleWatchStory = () => {
    navigate("/community?story=true");
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-foreground">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
          poster="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
        >
          <source src="src/assets/hero-section/main.MP4" type="video/mp4" />
        </video>
        <div className="video-overlay-clean" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <img
            src={gtLogoWhite}
            alt="GT Fitness"
            className="h-24 md:h-32 lg:h-40 w-auto mx-auto mb-8 animate-fade-up"
          />

          {/* Tagline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold text-background tracking-tight mb-6 animate-fade-up stagger-1">
            {communityData.tagline}
          </h1>

          <p className="text-lg md:text-xl text-background/70 max-w-xl mx-auto mb-10 animate-fade-up stagger-2">
            Join the movement. Transform your body. Become unstoppable.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up stagger-3">
            <Button
              variant="hero"
              className="bg-background text-foreground hover:bg-background/90"
              onClick={handleStartTraining}
            >
              {t("hero.startTraining")}
            </Button>
            <Button
              variant="heroOutline"
              className="border-background text-background hover:bg-background hover:text-foreground gap-3"
              onClick={handleWatchStory}
            >
              <Play className="w-5 h-5" />
              {t("hero.watchStory")}
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float text-background/60 hover:text-background transition-colors"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-background py-6 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {communityData.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl md:text-3xl font-semibold">
                  {stat.value}
                </p>
                <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
