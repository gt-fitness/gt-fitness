import { Button } from "@/components/ui/button";
import { Play, ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToContent = () => {
    const element = document.querySelector("#community");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-doing-push-ups-at-the-gym-5310/1080p.mp4"
            type="video/mp4"
          />
        </video>
        <div className="video-overlay" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-5xl mx-auto">
          <p className="font-body text-primary uppercase tracking-[0.3em] mb-6 animate-fade-up">
            Unleash Your Potential
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display uppercase leading-none mb-8 animate-fade-up stagger-1">
            No Limits.<br />
            <span className="gradient-text">No Excuses.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-up stagger-2">
            Join the movement. Transform your body. Become unstoppable.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up stagger-3">
            <Button variant="hero">
              Start Training
            </Button>
            <Button variant="heroOutline" className="gap-3">
              <Play className="w-5 h-5" />
              Watch Story
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float"
        >
          <ChevronDown className="w-10 h-10 text-primary" />
        </button>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-background/90 backdrop-blur-sm border-t border-border py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "50K+", label: "Athletes" },
              { value: "200+", label: "Workouts" },
              { value: "15", label: "Challenges" },
              { value: "98%", label: "Success Rate" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl md:text-4xl text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
