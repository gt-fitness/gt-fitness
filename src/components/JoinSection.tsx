import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import moreThanThat from "@/assets/more-than-that.png";

const JoinSection = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast({
        title: "Please fill all fields",
        description: "Name and email are required.",
        variant: "destructive",
      });
      return;
    }
    setIsSubmitted(true);
    toast({
      title: "You're on the list!",
      description: "Welcome to the GT Fitness community.",
    });
  };

  return (
    <section className="py-24 bg-foreground text-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-background rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-background rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div className="text-center md:text-left">
              <img 
                src={moreThanThat} 
                alt="More Than That" 
                className="h-8 w-auto mb-6 mx-auto md:mx-0 invert"
              />
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                Ready to Transform?
              </h2>
              <p className="text-background/70 text-lg mb-6">
                Join thousands of athletes pushing their limits every day. Your journey starts with a single step.
              </p>
              <div className="flex flex-wrap gap-6 justify-center md:justify-start text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Free Workouts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Community Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Weekly Challenges</span>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-8 border border-background/20">
              {isSubmitted ? (
                <div className="text-center py-8 animate-fade-in">
                  <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="font-display text-2xl font-bold mb-2">Welcome!</h3>
                  <p className="text-background/70">
                    Check your email for next steps.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-display text-2xl font-bold mb-2">Join Now</h3>
                  <p className="text-background/70 text-sm mb-6">
                    Get started with GT Fitness today.
                  </p>
                  
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12 bg-background/10 border-background/20 text-background placeholder:text-background/50 focus:border-primary"
                  />
                  
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12 bg-background/10 border-background/20 text-background placeholder:text-background/50 focus:border-primary"
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold group"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
