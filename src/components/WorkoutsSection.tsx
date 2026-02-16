import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLocalized } from "@/hooks/use-localized";
import exercisesData from "@/data/exercises.json";

const WorkoutsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { l } = useLocalized();

  const filteredExercises =
    activeCategory === "All"
      ? exercisesData.exercises.slice(0, 6)
      : exercisesData.exercises.filter((e) => e.category === activeCategory).slice(0, 6);

  return (
    <section id="workouts" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            {t("workouts.trainSmarter")}
          </p>
          <h2 className="section-title mb-4">{t("workouts.title")}</h2>
          <p className="section-subtitle mx-auto max-w-2xl">
            {t("workouts.sectionSubtitle")}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {exercisesData.categories.slice(0, 4).map((category) => (
            <button key={l(category)} onClick={() => setActiveCategory(category.en)}
              className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                activeCategory === category.en ? "bg-foreground text-background" : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}>
              {l(category)}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredExercises.map((exercise) => (
            <div key={exercise.id} className="group relative rounded-2xl overflow-hidden bg-secondary cursor-pointer"
              onClick={() => navigate(`/workouts?exercise=${exercise.id}`)}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={exercise.image} alt={l(exercise.name)} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center">
                    <Play className="w-5 h-5 text-foreground ml-0.5" />
                  </div>
                </div>
                <span className="absolute top-3 right-3 px-3 py-1 bg-background/90 text-foreground text-xs font-medium rounded-full">
                  {l(exercisesData.categories.find(c => c.en === exercise.category) || exercise.category)}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-background">
                <h3 className="font-display text-lg font-semibold mb-1">{l(exercise.name)}</h3>
                <p className="text-background/70 text-sm">{l(exercise.target)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/workouts">
            <Button variant="athleticOutline" size="lg" className="gap-2">
              {t("workouts.exploreAll")}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkoutsSection;
