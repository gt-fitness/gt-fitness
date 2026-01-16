import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Play, Clock, Flame, Users } from "lucide-react";
import challengesData from "@/data/challenges.json";

const Challenges = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-28 pb-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Push Your Limits</p>
          <h1 className="section-title mb-6">All Challenges</h1>
          <p className="section-subtitle mx-auto max-w-2xl">
            Join structured programs designed to test your limits and transform your body. 
            Compete with athletes worldwide and track your progress.
          </p>
        </div>
      </section>

      {/* Challenges Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challengesData.challenges.map((challenge) => (
              <div
                key={challenge.id}
                className="group rounded-2xl overflow-hidden bg-card shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={challenge.thumbnail}
                    alt={challenge.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center">
                      <Play className="w-6 h-6 text-foreground ml-1" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock className="w-3.5 h-3.5" />
                      {challenge.duration}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-medium">
                      <Flame className="w-3.5 h-3.5" />
                      {challenge.intensity}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Users className="w-3.5 h-3.5" />
                      {challenge.participants}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{challenge.title}</h3>
                  <p className="text-muted-foreground text-sm mb-5">
                    {challenge.description}
                  </p>
                  <Button variant="athletic" className="w-full">
                    Join Challenge
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Challenges;
