import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Play, X } from "lucide-react";

const categories = ["All", "Legs", "Arms", "Full Body", "Core", "Cardio"];

const exercises = [
  {
    id: 1,
    name: "Barbell Squat",
    target: "Quadriceps, Glutes, Hamstrings",
    category: "Legs",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&q=80",
    video: "https://cdn.coverr.co/videos/coverr-woman-training-in-a-gym-7421/1080p.mp4",
    instructions: "Stand with feet shoulder-width apart. Lower your body by bending knees and hips until thighs are parallel to the floor. Drive through your heels to return to starting position.",
  },
  {
    id: 2,
    name: "Bicep Curls",
    target: "Biceps, Forearms",
    category: "Arms",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=600&q=80",
    video: "https://cdn.coverr.co/videos/coverr-man-doing-dumbbell-curls-8367/1080p.mp4",
    instructions: "Stand holding dumbbells at your sides. Curl the weights up while keeping your upper arms stationary. Squeeze at the top, then lower with control.",
  },
  {
    id: 3,
    name: "Burpees",
    target: "Full Body, Cardio",
    category: "Full Body",
    image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=600&q=80",
    video: "https://cdn.coverr.co/videos/coverr-doing-push-ups-at-the-gym-5310/1080p.mp4",
    instructions: "Start standing, drop into a squat with hands on the floor, kick feet back to plank, do a push-up, jump feet to hands, then explosively jump up with arms overhead.",
  },
  {
    id: 4,
    name: "Deadlift",
    target: "Back, Glutes, Hamstrings",
    category: "Legs",
    image: "https://images.unsplash.com/photo-1534368959876-26bf04f2c947?w=600&q=80",
    video: "",
    instructions: "Stand with feet hip-width apart, barbell over mid-foot. Hinge at hips, grip bar outside knees. Keep back flat, drive through heels to stand tall. Reverse to lower.",
  },
  {
    id: 5,
    name: "Tricep Dips",
    target: "Triceps, Shoulders",
    category: "Arms",
    image: "https://images.unsplash.com/photo-1530822847156-5df684ec5ee1?w=600&q=80",
    video: "",
    instructions: "Grip parallel bars with arms straight. Lower your body by bending elbows until upper arms are parallel to floor. Press back up to starting position.",
  },
  {
    id: 6,
    name: "Mountain Climbers",
    target: "Core, Cardio, Full Body",
    category: "Full Body",
    image: "https://images.unsplash.com/photo-1601422407692-ec73c6de0dd8?w=600&q=80",
    video: "",
    instructions: "Start in high plank position. Drive one knee toward chest, then quickly switch legs. Continue alternating at a rapid pace while maintaining plank form.",
  },
  {
    id: 7,
    name: "Plank",
    target: "Core, Shoulders",
    category: "Core",
    image: "https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=600&q=80",
    video: "",
    instructions: "Start in forearm plank position with elbows under shoulders. Keep body in straight line from head to heels. Engage core and hold position.",
  },
  {
    id: 8,
    name: "Box Jumps",
    target: "Legs, Explosiveness",
    category: "Cardio",
    image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=600&q=80",
    video: "",
    instructions: "Stand facing a sturdy box. Swing arms back, then explosively jump onto the box, landing softly with both feet. Step down and repeat.",
  },
  {
    id: 9,
    name: "Russian Twists",
    target: "Obliques, Core",
    category: "Core",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80",
    video: "",
    instructions: "Sit with knees bent, lean back slightly. Hold weight at chest, rotate torso to touch weight to floor on each side while keeping hips stable.",
  },
];

const Workouts = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedExercise, setSelectedExercise] = useState<typeof exercises[0] | null>(null);

  const filteredExercises =
    activeCategory === "All"
      ? exercises
      : exercises.filter((e) => e.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary uppercase tracking-[0.2em] mb-4 font-body">
            Train Smarter
          </p>
          <h1 className="section-title mb-6">
            Workout <span className="gradient-text">Library</span>
          </h1>
          <p className="section-subtitle mx-auto">
            Explore our extensive collection of exercises with video tutorials, 
            detailed instructions, and expert tips.
          </p>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
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
                onClick={() => setSelectedExercise(exercise)}
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
        </div>
      </section>

      {/* Exercise Modal */}
      {selectedExercise && (
        <div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedExercise(null)}
        >
          <button
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
            onClick={() => setSelectedExercise(null)}
          >
            <X className="w-10 h-10" />
          </button>
          <div
            className="max-w-4xl w-full bg-card rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedExercise.video ? (
              <video
                autoPlay
                controls
                className="w-full aspect-video"
                src={selectedExercise.video}
                poster={selectedExercise.image}
              />
            ) : (
              <img
                src={selectedExercise.image}
                alt={selectedExercise.name}
                className="w-full aspect-video object-cover"
              />
            )}
            <div className="p-8">
              <span className="text-primary uppercase tracking-wider text-sm">
                {selectedExercise.category}
              </span>
              <h2 className="font-display text-4xl mt-2 mb-4">{selectedExercise.name}</h2>
              <p className="text-primary mb-4">Target: {selectedExercise.target}</p>
              <p className="text-muted-foreground">{selectedExercise.instructions}</p>
              <Button variant="athletic" className="mt-6">
                Add to Workout
              </Button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Workouts;
