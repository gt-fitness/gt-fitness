import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import gtLogo from "@/assets/gt-logo-dark.png";

const Join = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    fitnessGoal: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate basic fields
    if (!formData.firstName || !formData.email) {
      toast({
        title: "Please fill required fields",
        description: "First name and email are required.",
        variant: "destructive",
      });
      return;
    }
    // Simulate form submission
    setIsSubmitted(true);
    toast({
      title: "Welcome to GT Fitness!",
      description: "We'll be in touch soon.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center max-w-md animate-fade-in">
          <CheckCircle2 className="w-20 h-20 text-primary mx-auto mb-6" />
          <h1 className="font-display text-4xl font-bold mb-4">You're In!</h1>
          <p className="text-muted-foreground mb-8">
            Welcome to the GT Fitness family. We'll reach out soon with next steps to start your journey.
          </p>
          <Link to="/">
            <Button variant="clean" size="lg">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-medium">Back</span>
            </Link>
            <img src={gtLogo} alt="GT Fitness" className="h-8 w-auto" />
            <div className="w-20" />
          </div>
        </div>
      </header>

      {/* Form Section */}
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Join the Movement
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Start Your Journey
            </h1>
            <p className="text-muted-foreground text-lg">
              Become part of a community that pushes limits and achieves more.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="h-12 bg-secondary/50 border-border/50 focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="h-12 bg-secondary/50 border-border/50 focus:border-primary"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                className="h-12 bg-secondary/50 border-border/50 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={handleChange}
                className="h-12 bg-secondary/50 border-border/50 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="fitnessGoal">What's Your Fitness Goal?</Label>
              <select
                id="fitnessGoal"
                name="fitnessGoal"
                value={formData.fitnessGoal}
                onChange={handleChange}
                className="w-full h-12 px-4 rounded-lg bg-secondary/50 border border-border/50 focus:border-primary focus:outline-none text-foreground"
              >
                <option value="">Select a goal...</option>
                <option value="lose-weight">Lose Weight</option>
                <option value="build-muscle">Build Muscle</option>
                <option value="improve-endurance">Improve Endurance</option>
                <option value="general-fitness">General Fitness</option>
                <option value="compete">Train for Competition</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Anything else we should know?</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about your fitness journey..."
                value={formData.message}
                onChange={handleChange}
                className="min-h-[120px] bg-secondary/50 border-border/50 focus:border-primary resize-none"
              />
            </div>

            <Button type="submit" variant="clean" size="lg" className="w-full h-14 text-base">
              Join GT Fitness
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              By joining, you agree to our Terms of Service and Privacy Policy.
            </p>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Join;
