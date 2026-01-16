import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, Target, Trophy, Heart, Globe, Dumbbell } from "lucide-react";
import communityData from "@/data/community.json";

const extendedValues = [
  { icon: Users, title: "Brotherhood", description: "We train together, we grow together. Every member is family. When one rises, we all rise." },
  { icon: Target, title: "Discipline", description: "Consistency beats intensity. Show up every single day, no matter the circumstances." },
  { icon: Trophy, title: "Excellence", description: "Good enough is never good enough. We push for greatness in everything we do." },
  { icon: Heart, title: "Passion", description: "Love the process. The results will follow. Find joy in the grind." },
  { icon: Globe, title: "Global Unity", description: "Athletes from every corner of the world, united by a single mission." },
  { icon: Dumbbell, title: "Strength", description: "Physical, mental, emotional. We build strength in all its forms." },
];

const Community = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-28 pb-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Our Story</p>
          <h1 className="section-title mb-6">Who We Are</h1>
          <p className="section-subtitle mx-auto max-w-2xl">
            {communityData.description}
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-6">{communityData.mission}</p>
              <p className="text-muted-foreground">
                Our mission is simple: to help you become the strongest, most confident, 
                most unstoppable version of yourself.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"
                alt="Team training"
                className="rounded-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-foreground text-background p-5 rounded-xl">
                <p className="font-display text-3xl font-semibold">5+</p>
                <p className="text-background/70 text-sm">Years Strong</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="section-title mb-4">Our Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {extendedValues.map((value) => (
              <div key={value.title} className="card-clean group">
                <value.icon className="w-10 h-10 text-foreground mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="section-title mb-4">Meet The Team</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityData.team.map((member) => (
              <div key={member.name} className="text-center group">
                <div className="relative mb-4 overflow-hidden rounded-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-display text-lg font-semibold">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-semibold mb-6">Ready to Join?</h2>
          <p className="text-background/70 mb-8 max-w-xl mx-auto">
            Become part of a global community of athletes pushing their limits every day.
          </p>
          <Button variant="hero" className="bg-background text-foreground hover:bg-background/90">
            Join GT Fitness Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Community;
