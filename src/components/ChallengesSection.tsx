import { Button } from "@/components/ui/button";
import { Play, Clock, Flame, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const challenges = [
  {
    id: 1,
    title: "30-Day Shred",
    description: "Transform your body in 30 days with intense daily workouts designed to burn fat and build lean muscle.",
    duration: "30 Days",
    intensity: "High",
    thumbnail: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=600&q=80",
    video: "https://cdn.coverr.co/videos/coverr-woman-training-in-a-gym-7421/1080p.mp4",
  },
  {
    id: 2,
    title: "Push-Up Master",
    description: "From zero to 100 push-ups. Build upper body strength and endurance with progressive training.",
    duration: "6 Weeks",
    intensity: "Medium",
    thumbnail: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=600&q=80",
    video: "https://cdn.coverr.co/videos/coverr-doing-push-ups-at-the-gym-5310/1080p.mp4",
  },
  {
    id: 3,
    title: "Core Crusher",
    description: "Develop rock-solid abs and core stability with targeted exercises and nutrition guidance.",
    duration: "4 Weeks",
    intensity: "High",
    thumbnail: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80",
    video: "https://cdn.coverr.co/videos/coverr-man-doing-abs-workout-1573/1080p.mp4",
  },
];

const ChallengesSection = () => {
  return (
    <section id="challenges" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.2em] mb-4 font-body">
            Push Your Limits
          </p>
          <h2 className="section-title mb-6">
            Active <span className="gradient-text">Challenges</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Ready to test yourself? Join one of our community challenges and compete 
            with athletes worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((challenge) => (
            <div
              key={challenge.id}
              className="group relative rounded-xl overflow-hidden bg-card"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={challenge.thumbnail}
                  alt={challenge.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center animate-pulse-glow">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {challenge.duration}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-primary">
                    <Flame className="w-4 h-4" />
                    {challenge.intensity}
                  </span>
                </div>
                <h3 className="font-display text-2xl mb-2">{challenge.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {challenge.description}
                </p>
                <Button variant="athletic" size="sm" className="w-full">
                  Join Challenge
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/challenges">
            <Button variant="athleticOutline" size="lg" className="gap-2">
              View All Challenges
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
