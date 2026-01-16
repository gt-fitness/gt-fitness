import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";

const mediaItems = [
  {
    id: 1,
    type: "image",
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    alt: "Team training session",
    category: "Training",
  },
  {
    id: 2,
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
    src: "https://cdn.coverr.co/videos/coverr-doing-push-ups-at-the-gym-5310/1080p.mp4",
    alt: "Workout highlight",
    category: "Workouts",
  },
  {
    id: 3,
    type: "image",
    src: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&q=80",
    alt: "Competition day",
    category: "Events",
  },
  {
    id: 4,
    type: "image",
    src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80",
    alt: "Victory moment",
    category: "Events",
  },
  {
    id: 5,
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
    src: "https://cdn.coverr.co/videos/coverr-man-doing-abs-workout-1573/1080p.mp4",
    alt: "Training montage",
    category: "Training",
  },
  {
    id: 6,
    type: "image",
    src: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=80",
    alt: "Team celebration",
    category: "Community",
  },
  {
    id: 7,
    type: "image",
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    alt: "Morning run",
    category: "Training",
  },
  {
    id: 8,
    type: "image",
    src: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80",
    alt: "Outdoor training",
    category: "Training",
  },
  {
    id: 9,
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&q=80",
    src: "https://cdn.coverr.co/videos/coverr-woman-training-in-a-gym-7421/1080p.mp4",
    alt: "Strength training",
    category: "Workouts",
  },
  {
    id: 10,
    type: "image",
    src: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&q=80",
    alt: "Community event",
    category: "Community",
  },
  {
    id: 11,
    type: "image",
    src: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?w=800&q=80",
    alt: "Personal record",
    category: "Events",
  },
  {
    id: 12,
    type: "image",
    src: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=800&q=80",
    alt: "Group workout",
    category: "Community",
  },
];

const categories = ["All", "Training", "Workouts", "Events", "Community"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? mediaItems
      : mediaItems.filter((item) => item.category === activeCategory);

  const selectedMedia = selectedIndex !== null ? filteredItems[selectedIndex] : null;

  const goToNext = () => {
    if (selectedIndex !== null && selectedIndex < filteredItems.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const goToPrev = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary uppercase tracking-[0.2em] mb-4 font-body">
            Our Journey
          </p>
          <h1 className="section-title mb-6">
            Community <span className="gradient-text">Gallery</span>
          </h1>
          <p className="section-subtitle mx-auto">
            Moments of triumph, dedication, and transformation captured from our 
            community around the world.
          </p>
        </div>
      </section>

      {/* Filter & Gallery */}
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

          {/* Gallery Grid - Masonry-like */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative rounded-xl overflow-hidden cursor-pointer break-inside-avoid"
                onClick={() => setSelectedIndex(index)}
              >
                <img
                  src={item.type === "video" ? item.thumbnail : item.src}
                  alt={item.alt}
                  className="w-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  {item.type === "video" && (
                    <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                      <Play className="w-6 h-6 text-primary-foreground ml-1" />
                    </div>
                  )}
                </div>
                <span className="absolute bottom-3 left-3 px-2 py-1 bg-background/80 text-xs font-display rounded">
                  {item.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedMedia && (
        <div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors z-10"
            onClick={() => setSelectedIndex(null)}
          >
            <X className="w-10 h-10" />
          </button>

          {/* Navigation Arrows */}
          {selectedIndex !== null && selectedIndex > 0 && (
            <button
              className="absolute left-4 md:left-8 text-foreground hover:text-primary transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                goToPrev();
              }}
            >
              <ChevronLeft className="w-12 h-12" />
            </button>
          )}
          {selectedIndex !== null && selectedIndex < filteredItems.length - 1 && (
            <button
              className="absolute right-4 md:right-8 text-foreground hover:text-primary transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
            >
              <ChevronRight className="w-12 h-12" />
            </button>
          )}

          <div
            className="max-w-5xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedMedia.type === "video" ? (
              <video
                autoPlay
                controls
                className="w-full h-full rounded-xl"
                src={selectedMedia.src}
              />
            ) : (
              <img
                src={selectedMedia.src}
                alt={selectedMedia.alt}
                className="w-full h-full object-contain rounded-xl"
              />
            )}
            <p className="text-center mt-4 text-muted-foreground">
              {selectedMedia.alt}
            </p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
