import { useRef, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";
import moreThanThat from "@/assets/more-than-that.png";
import emailjs from "@emailjs/browser";

const JoinSection = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email) {
      toast({
        title: t("joinSection.fillAll"),
        description: t("joinSection.fillAllDesc"),
        variant: "destructive",
      });
      return;
    }
    emailjs
      .send(
        "service_72t9ydk", // get this from EmailJS dashboard
        "template_ey6noan", // create a template
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
        },
        "Xf5YpvGv31U33P0Ti", // also from EmailJS
      )
      .then(
        (result) => {
          setIsSubmitted(true);
          toast({
            title: t("joinSection.onTheList"),
            description: t("joinSection.onTheListDesc"),
          });
        },
        (error) => {
          toast({
            variant: "destructive",
            title: t("joinSection.error"),
            description: t("joinSection.errorDesc"),
          });
        },
      );
  };

  return (
    <section className="py-24 bg-foreground text-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-background rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-background rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <img
                src={moreThanThat}
                alt="More Than That"
                className="h-8 w-auto mb-6 mx-auto md:mx-0 invert"
              />
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                {t("joinSection.readyToTransform")}
              </h2>
              <p className="text-background/70 text-lg mb-6">
                {t("joinSection.description")}
              </p>
              <div className="flex flex-wrap gap-6 justify-center md:justify-start text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>{t("joinSection.freeWorkouts")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>{t("joinSection.communityAccess")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>{t("joinSection.weeklyChallenges")}</span>
                </div>
              </div>
            </div>

            <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-8 border border-background/20">
              {isSubmitted ? (
                <div className="text-center py-8 animate-fade-in">
                  <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="font-display text-2xl font-bold mb-2">
                    {t("joinSection.welcome")}
                  </h3>
                  <p className="text-background/70">
                    {t("joinSection.checkEmail")}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-display text-2xl font-bold mb-2">
                    {t("joinSection.joinNow")}
                  </h3>
                  <p className="text-background/70 text-sm mb-6">
                    {t("joinSection.getStarted")}
                  </p>
                  <Input
                    placeholder={t("joinSection.yourFirstName")}
                    value={formData.firstName}
                    name="firstName"
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    className="h-12 bg-background/10 border-background/20 text-background placeholder:text-background/50 focus:border-primary"
                  />
                  <Input
                    placeholder={t("joinSection.yourLastName")}
                    value={formData.lastName}
                    name="lastName"
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    className="h-12 bg-background/10 border-background/20 text-background placeholder:text-background/50 focus:border-primary"
                  />
                  <Input
                    type="email"
                    placeholder={t("joinSection.emailAddress")}
                    name="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="h-12 bg-background/10 border-background/20 text-background placeholder:text-background/50 focus:border-primary"
                  />
                  <Button
                    type="submit"
                    className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold group"
                  >
                    {t("joinSection.getStartedBtn")}
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
