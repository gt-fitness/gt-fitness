import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLocalized } from "@/hooks/use-localized";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Play, X } from "lucide-react";
import exercisesData from "@/data/exercises.json";

const Workouts = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedExercise, setSelectedExercise] = useState<(typeof exercisesData.exercises)[0] | null>(null);
  const { t } = useTranslation();
  const { l } = useLocalized();

  useEffect(() => {
    const exerciseId = searchParams.get("exercise");
    if (exerciseId) {
      const exercise = exercisesData.exercises.find((e) => e.id === parseInt(exerciseId));
      if (exercise) setSelectedExercise(exercise);
    }
  }, [searchParams]);

  const filteredExercises = activeCategory === "All"
    ? exercisesData.exercises
    : exercisesData.exercises.filter((e) => e.category === activeCategory);

  const closeModal = () => { setSelectedExercise(null); setSearchParams({}); };
  const openExercise = (exercise: (typeof exercisesData.exercises)[0]) => {
    setSelectedExercise(exercise); setSearchParams({ exercise: exercise.id.toString() });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-28 pb-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">{t("workouts.trainSmarter")}</p>
          <h1 className="section-title mb-6">{t("workouts.title")}</h1>
          <p className="section-subtitle mx-auto max-w-2xl">{t("workouts.pageSubtitle")}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {exercisesData.categories.map((category) => (
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
                onClick={() => openExercise(exercise)}>
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
        </div>
      </section>

      {selectedExercise && (
        <div className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4 overflow-y-auto" onClick={closeModal}>
          <button className="absolute top-6 right-6 text-background hover:text-background/80 transition-colors" onClick={closeModal}>
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-3xl w-full bg-background rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            {selectedExercise.video ? (
              <video autoPlay muted controls={false} loop playsInline className="w-full aspect-video"
                src={selectedExercise.video} poster={selectedExercise.image} />
            ) : (
              <img src={selectedExercise.image} alt={l(selectedExercise.name)} className="w-full aspect-video object-cover" />
            )}
            <div className="p-6">
              <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                {l(exercisesData.categories.find(c => c.en === selectedExercise.category) || selectedExercise.category)}
              </span>
              <h2 className="font-display text-3xl font-semibold mt-2 mb-3">{l(selectedExercise.name)}</h2>
              <p className="text-sm font-medium mb-4">{t("workouts.target")}: {l(selectedExercise.target)}</p>
              <p className="text-muted-foreground">{l(selectedExercise.description)}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Workouts;
