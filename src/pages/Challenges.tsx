import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Play, Clock, Flame, Users } from "lucide-react";

const challenges = [
  {
    id: 1,
    title: "30-Day Shred",
    description: "Transform your body in 30 days with intense daily workouts designed to burn fat and build lean muscle. Each day brings a new challenge, pushing you closer to your goals.",
    duration: "30 Days",
    intensity: "High",
    participants: "2.3K",
    thumbnail: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&q=80",
    video: "https://cdn.coverr.co/videos/coverr-woman-training-in-a-gym-7421/1080p.mp4",
  },
  {
    id: 2,
    title: "Push-Up Master",
    description: "From zero to 100 push-ups. Build upper body strength and endurance with this progressive training program. Perfect for all fitness levels.",
    duration: "6 Weeks",
    intensity: "Medium",
    participants: "5.1K",
    thumbnail: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=800&q=80",
    video: "https://cdn.coverr.co/videos/coverr-doing-push-ups-at-the-gym-5310/1080p.mp4",
  },
  {
    id: 3,
    title: "Core Crusher",
    description: "Develop rock-solid abs and core stability with targeted exercises and nutrition guidance. Four weeks to a stronger midsection.",
    duration: "4 Weeks",
    intensity: "High",
    participants: "3.8K",
    thumbnail: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
    video: "https://cdn.coverr.co/videos/coverr-man-doing-abs-workout-1573/1080p.mp4",
  },
  {
    id: 4,
    title: "Runner's Edge",
    description: "Improve your running speed and endurance with structured training plans. From 5K to marathon prep.",
    duration: "8 Weeks",
    intensity: "Medium",
    participants: "1.9K",
    thumbnail: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80",
    video: "",
  },
  {
    id: 5,
    title: "Flexibility Flow",
    description: "Increase mobility and reduce injury risk with daily stretching and yoga-inspired routines. Perfect complement to strength training.",
    duration: "21 Days",
    intensity: "Low",
    participants: "4.2K",
    thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
    video: "",
  },
  {
    id: 6,
    title: "Beast Mode",
    description: "The ultimate strength challenge. 12 weeks of progressive overload training designed to maximize muscle growth and power.",
    duration: "12 Weeks",
    intensity: "Extreme",
    participants: "890",
    thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    video: "",
  },
];

const Challenges = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary uppercase tracking-[0.2em] mb-4 font-body">
            Push Your Limits
          </p>
          <h1 className="section-title mb-6">
            All <span className="gradient-text">Challenges</span>
          </h1>
          <p className="section-subtitle mx-auto">
            Join structured programs designed to test your limits and transform your body. 
            Compete with athletes worldwide and track your progress.
          </p>
        </div>
      </section>

      {/* Challenges Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
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
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {challenge.duration}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-primary">
                      <Flame className="w-4 h-4" />
                      {challenge.intensity}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      {challenge.participants} joined
                    </span>
                  </div>
                  <h3 className="font-display text-2xl mb-2">{challenge.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6">
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
