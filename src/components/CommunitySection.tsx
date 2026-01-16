import { Button } from "@/components/ui/button";
import { Users, Target, Trophy, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Users,
    title: "Brotherhood",
    description: "We train together, we grow together. Every member is family.",
  },
  {
    icon: Target,
    title: "Discipline",
    description: "Consistency beats intensity. Show up every single day.",
  },
  {
    icon: Trophy,
    title: "Excellence",
    description: "Good enough is never good enough. We push for greatness.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Love the process. The results will follow.",
  },
];

const CommunitySection = () => {
  return (
    <section id="community" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="text-primary uppercase tracking-[0.2em] mb-4 font-body">
              Who We Are
            </p>
            <h2 className="section-title mb-6">
              Built by<br />
              <span className="gradient-text">Athletes</span>
            </h2>
            <p className="section-subtitle mb-8">
              ApexFit isn't just a fitness community — it's a movement. Founded by athletes 
              who believe that every person has untapped potential waiting to be unleashed. 
              We provide the tools, the guidance, and the support to help you become the 
              strongest version of yourself.
            </p>
            <p className="text-muted-foreground mb-10">
              From elite competitors to everyday warriors, our community spans across the globe, 
              united by a single mission: to push beyond limits and redefine what's possible.
            </p>
            <Link to="/community">
              <Button variant="athleticOutline" size="lg">
                Learn More About Us
              </Button>
            </Link>
          </div>

          {/* Right - Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="card-athletic group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <value.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-2xl mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
