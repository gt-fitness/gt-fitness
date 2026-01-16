import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const categories = ["All", "Legs", "Arms", "Full Body"];

const exercises = [
  {
    id: 1,
    name: "Barbell Squat",
    target: "Quadriceps, Glutes, Hamstrings",
    category: "Legs",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400&q=80",
  },
  {
    id: 2,
    name: "Bicep Curls",
    target: "Biceps, Forearms",
    category: "Arms",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=400&q=80",
  },
  {
    id: 3,
    name: "Burpees",
    target: "Full Body, Cardio",
    category: "Full Body",
    image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=400&q=80",
  },
  {
    id: 4,
    name: "Deadlift",
    target: "Back, Glutes, Hamstrings",
    category: "Legs",
    image: "https://images.unsplash.com/photo-1534368959876-26bf04f2c947?w=400&q=80",
  },
  {
    id: 5,
    name: "Tricep Dips",
    target: "Triceps, Shoulders",
    category: "Arms",
    image: "https://images.unsplash.com/photo-1530822847156-5df684ec5ee1?w=400&q=80",
  },
  {
    id: 6,
    name: "Mountain Climbers",
    target: "Core, Cardio, Full Body",
    category: "Full Body",
    image: "https://images.unsplash.com/photo-1601422407692-ec73c6de0dd8?w=400&q=80",
  },
];

const WorkoutsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredExercises =
    activeCategory === "All"
      ? exercises
      : exercises.filter((e) => e.category === activeCategory);

  return (
    <section id="workouts" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary uppercase tracking-[0.2em] mb-4 font-body">
            Train Smarter
          </p>
          <h2 className="section-title mb-6">
            Workout <span className="gradient-text">Library</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Explore our extensive collection of exercises with video tutorials 
            and expert guidance.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 font-display text-lg tracking-wider transition-all duration-300 rounded-md ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Exercises Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExercises.map((exercise) => (
            <div
              key={exercise.id}
              className="group relative rounded-xl overflow-hidden bg-card cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={exercise.image}
                  alt={exercise.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center animate-pulse-glow">
                    <Play className="w-6 h-6 text-primary-foreground ml-1" />
                  </div>
                </div>

                {/* Category Badge */}
                <span className="absolute top-4 right-4 px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-display tracking-wider rounded">
                  {exercise.category}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-display text-xl mb-1">{exercise.name}</h3>
                <p className="text-muted-foreground text-sm">{exercise.target}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/workouts">
            <Button variant="athleticOutline" size="lg" className="gap-2">
              Explore All Workouts
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkoutsSection;
