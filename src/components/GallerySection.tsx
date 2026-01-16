import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const mediaItems = [
  {
    id: 1,
    type: "image",
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
    alt: "Team training session",
  },
  {
    id: 2,
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80",
    src: "https://cdn.coverr.co/videos/coverr-doing-push-ups-at-the-gym-5310/1080p.mp4",
    alt: "Workout highlight",
  },
  {
    id: 3,
    type: "image",
    src: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=600&q=80",
    alt: "Competition day",
  },
  {
    id: 4,
    type: "image",
    src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80",
    alt: "Victory moment",
  },
  {
    id: 5,
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80",
    src: "https://cdn.coverr.co/videos/coverr-man-doing-abs-workout-1573/1080p.mp4",
    alt: "Training montage",
  },
  {
    id: 6,
    type: "image",
    src: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&q=80",
    alt: "Team celebration",
  },
];

const GallerySection = () => {
  const [selectedMedia, setSelectedMedia] = useState<typeof mediaItems[0] | null>(null);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.2em] mb-4 font-body">
            Our Journey
          </p>
          <h2 className="section-title mb-6">
            Community <span className="gradient-text">Gallery</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Moments of triumph, dedication, and transformation captured from our 
            community around the world.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {mediaItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedMedia(item)}
            >
              <img
                src={item.type === "video" ? item.thumbnail : item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                {item.type === "video" && (
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center animate-pulse-glow">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/gallery">
            <Button variant="athleticOutline" size="lg" className="gap-2">
              View Full Gallery
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      {selectedMedia && (
        <div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <button
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
            onClick={() => setSelectedMedia(null)}
          >
            <X className="w-10 h-10" />
          </button>
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
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
