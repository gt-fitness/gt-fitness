import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import galleryData from "@/data/gallery.json";

const GallerySection = () => {
  const [selectedMedia, setSelectedMedia] = useState<typeof galleryData.items[0] | null>(null);
  const { t } = useTranslation();

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            {t("gallery.ourJourney")}
          </p>
          <h2 className="section-title mb-4">{t("gallery.communityGallery")}</h2>
          <p className="section-subtitle mx-auto max-w-2xl">
            {t("gallery.fullSubtitle")}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {galleryData.items.slice(0, 6).map((item) => (
            <div key={item.id} className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer" onClick={() => setSelectedMedia(item)}>
              <img src={item.type === "video" ? item.thumbnail : item.src} alt={item.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-foreground/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                {item.type === "video" && (
                  <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center">
                    <Play className="w-5 h-5 text-foreground ml-0.5" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/gallery">
            <Button variant="athleticOutline" size="lg" className="gap-2">
              {t("gallery.viewFull")}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>

      {selectedMedia && (
        <div className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4" onClick={() => setSelectedMedia(null)}>
          <button className="absolute top-6 right-6 text-background hover:text-background/80 transition-colors" onClick={() => setSelectedMedia(null)}>
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-4xl max-h-[85vh] w-full" onClick={(e) => e.stopPropagation()}>
            {selectedMedia.type === "video" ? (
              <video autoPlay controls className="w-full h-full rounded-xl" src={selectedMedia.src} />
            ) : (
              <img src={selectedMedia.src} alt={selectedMedia.alt} className="w-full h-full object-contain rounded-xl" />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;