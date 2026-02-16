import { Button } from "@/components/ui/button";
import { Play, Clock, Flame, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLocalized } from "@/hooks/use-localized";
import challengesData from "@/data/challenges.json";

const ChallengesSection = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { l } = useLocalized();

  return (
    <section id="challenges" className="section-padding bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            {t("challenges.pushLimits")}
          </p>
          <h2 className="section-title mb-4">{t("challenges.activeTitle")}</h2>
          <p className="section-subtitle mx-auto max-w-2xl">
            {t("challenges.sectionSubtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challengesData.challenges.slice(0, 3).map((challenge) => (
            <div key={challenge.id} className="group rounded-2xl overflow-hidden bg-background shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => navigate(`/challenges?challenge=${challenge.id}`)}>
              <div className="relative aspect-video overflow-hidden">
                <img src={challenge.thumbnail} alt={l(challenge.title)} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center">
                    <Play className="w-6 h-6 text-foreground ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-4 mb-3">
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="w-3.5 h-3.5" />{l(challenge.duration)}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-foreground font-medium">
                    <Flame className="w-3.5 h-3.5" />{l(challenge.intensity)}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{l(challenge.title)}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{l(challenge.description)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/challenges">
            <Button variant="athleticOutline" size="lg" className="gap-2">
              {t("challenges.viewAll")}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
