import { Button } from "@/components/ui/button";
import { Users, Target, Trophy, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import communityData from "@/data/community.json";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Users,
  Target,
  Trophy,
  Heart,
};

const CommunitySection = () => {
  return (
    <section id="community" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Who We Are
            </p>
            <h2 className="section-title mb-6">
              Built by Athletes,<br />
              For Athletes.
            </h2>
            <p className="section-subtitle mb-6">
              {communityData.description}
            </p>
            <p className="text-muted-foreground mb-8">
              {communityData.mission}
            </p>
            <Link to="/community">
              <Button variant="athleticOutline" size="lg">
                Learn More About Us
              </Button>
            </Link>
          </div>

          {/* Right - Values Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {communityData.values.map((value, index) => {
              const IconComponent = iconMap[value.icon];
              return (
                <div
                  key={value.title}
                  className="card-clean group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {IconComponent && (
                    <IconComponent className="w-10 h-10 text-foreground mb-4 group-hover:scale-110 transition-transform" />
                  )}
                  <h3 className="font-display text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
