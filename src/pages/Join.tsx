import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";
import gtLogo from "@/assets/gt-logo-dark.png";

const Join = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "", fitnessGoal: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email) {
      toast({ title: t("join.fillRequired"), description: t("join.fillRequiredDesc"), variant: "destructive" });
      return;
    }
    setIsSubmitted(true);
    toast({ title: t("join.welcomeTitle"), description: t("join.welcomeDesc") });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center max-w-md animate-fade-in">
          <CheckCircle2 className="w-20 h-20 text-primary mx-auto mb-6" />
          <h1 className="font-display text-4xl font-bold mb-4">{t("join.successTitle")}</h1>
          <p className="text-muted-foreground mb-8">{t("join.successMessage")}</p>
          <Link to="/"><Button variant="clean" size="lg">{t("join.backToHome")}</Button></Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-medium">{t("join.back")}</span>
            </Link>
            <img src={gtLogo} alt="GT Fitness" className="h-8 w-auto" />
            <div className="w-20" />
          </div>
        </div>
      </header>

      <main className="pt-32 pb-20 px-4">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              {t("join.joinTheMovement")}
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">{t("join.startYourJourney")}</h1>
            <p className="text-muted-foreground text-lg">{t("join.pageSubtitle")}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">{t("join.firstName")} *</Label>
                <Input id="firstName" name="firstName" placeholder="John" value={formData.firstName} onChange={handleChange}
                  className="h-12 bg-secondary/50 border-border/50 focus:border-primary" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">{t("join.lastName")}</Label>
                <Input id="lastName" name="lastName" placeholder="Doe" value={formData.lastName} onChange={handleChange}
                  className="h-12 bg-secondary/50 border-border/50 focus:border-primary" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">{t("join.emailAddress")} *</Label>
              <Input id="email" name="email" type="email" placeholder="john@example.com" value={formData.email} onChange={handleChange}
                className="h-12 bg-secondary/50 border-border/50 focus:border-primary" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">{t("join.phoneNumber")}</Label>
              <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" value={formData.phone} onChange={handleChange}
                className="h-12 bg-secondary/50 border-border/50 focus:border-primary" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="fitnessGoal">{t("join.fitnessGoal")}</Label>
              <select id="fitnessGoal" name="fitnessGoal" value={formData.fitnessGoal} onChange={handleChange}
                className="w-full h-12 px-4 rounded-lg bg-secondary/50 border border-border/50 focus:border-primary focus:outline-none text-foreground">
                <option value="">{t("join.selectGoal")}</option>
                <option value="lose-weight">{t("join.loseWeight")}</option>
                <option value="build-muscle">{t("join.buildMuscle")}</option>
                <option value="improve-endurance">{t("join.improveEndurance")}</option>
                <option value="general-fitness">{t("join.generalFitness")}</option>
                <option value="compete">{t("join.trainForCompetition")}</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">{t("join.anythingElse")}</Label>
              <Textarea id="message" name="message" placeholder={t("join.tellUs")} value={formData.message} onChange={handleChange}
                className="min-h-[120px] bg-secondary/50 border-border/50 focus:border-primary resize-none" />
            </div>

            <Button type="submit" variant="clean" size="lg" className="w-full h-14 text-base">
              {t("join.joinGtFitness")}
            </Button>

            <p className="text-center text-sm text-muted-foreground">{t("join.termsNotice")}</p>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Join;