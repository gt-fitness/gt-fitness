import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, Target, Trophy, Heart, Globe, Dumbbell } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Brotherhood",
    description: "We train together, we grow together. Every member is family. When one rises, we all rise.",
  },
  {
    icon: Target,
    title: "Discipline",
    description: "Consistency beats intensity. Show up every single day, no matter the circumstances.",
  },
  {
    icon: Trophy,
    title: "Excellence",
    description: "Good enough is never good enough. We push for greatness in everything we do.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Love the process. The results will follow. Find joy in the grind.",
  },
  {
    icon: Globe,
    title: "Global Unity",
    description: "Athletes from every corner of the world, united by a single mission.",
  },
  {
    icon: Dumbbell,
    title: "Strength",
    description: "Physical, mental, emotional. We build strength in all its forms.",
  },
];

const team = [
  {
    name: "Marcus Chen",
    role: "Founder & Head Coach",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Sarah Williams",
    role: "Strength & Conditioning",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&q=80",
  },
  {
    name: "James Rodriguez",
    role: "Nutrition Specialist",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    name: "Emily Park",
    role: "Community Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  },
];

const Community = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary uppercase tracking-[0.2em] mb-4 font-body">
            Our Story
          </p>
          <h1 className="section-title mb-6">
            Who We <span className="gradient-text">Are</span>
          </h1>
          <p className="section-subtitle mx-auto">
            ApexFit was born from a simple belief: every person has untapped potential 
            waiting to be unleashed. We're not just a fitness community — we're a movement.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display mb-6">
                Our Mission
              </h2>
              <p className="text-muted-foreground mb-6">
                Founded in 2019 by a group of elite athletes who saw something missing 
                in the fitness world — a community that truly supports, challenges, and 
                elevates its members.
              </p>
              <p className="text-muted-foreground mb-6">
                Today, ApexFit spans across 50+ countries with over 50,000 active members 
                pushing their limits every single day. We've created a space where beginners 
                and professionals train side by side, where victories are celebrated and 
                failures are learned from.
              </p>
              <p className="text-muted-foreground">
                Our mission is simple: to help you become the strongest, most confident, 
                most unstoppable version of yourself.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"
                alt="Team training"
                className="rounded-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary p-6 rounded-xl">
                <p className="font-display text-4xl text-primary-foreground">5+</p>
                <p className="text-primary-foreground/80 text-sm">Years Strong</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">
              Our <span className="gradient-text">Values</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="card-athletic group">
                <value.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-2xl mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">
              Meet The <span className="gradient-text">Team</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center group">
                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-display text-xl">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-display mb-6">
            Ready to Join?
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
            Become part of a global community of athletes pushing their limits every day.
          </p>
          <Button variant="hero">
            Join ApexFit Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Community;
