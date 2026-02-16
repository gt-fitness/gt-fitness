import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocalized } from "@/hooks/use-localized";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import galleryData from "@/data/gallery.json";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const { t } = useTranslation();
  const { l } = useLocalized();

  const filteredItems = activeCategory === "All"
    ? galleryData.items
    : galleryData.items.filter((item) => item.category === activeCategory);

  const selectedMedia = selectedIndex !== null ? filteredItems[selectedIndex] : null;
  const goToNext = () => { if (selectedIndex !== null && selectedIndex < filteredItems.length - 1) setSelectedIndex(selectedIndex + 1); };
  const goToPrev = () => { if (selectedIndex !== null && selectedIndex > 0) setSelectedIndex(selectedIndex - 1); };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-28 pb-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">{t("gallery.ourJourney")}</p>
          <h1 className="section-title mb-6">{t("gallery.communityGallery")}</h1>
          <p className="section-subtitle mx-auto max-w-2xl">{t("gallery.fullSubtitle")}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {galleryData.categories.map((category) => (
              <button key={l(category)} onClick={() => setActiveCategory(category.en)}
                className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeCategory === category.en ? "bg-foreground text-background" : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}>
                {l(category)}
              </button>
            ))}
          </div>

          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
            {filteredItems.map((item, index) => (
              <div key={item.id} className="group relative rounded-xl overflow-hidden cursor-pointer break-inside-avoid" onClick={() => setSelectedIndex(index)}>
                <img src={item.type === "video" ? item.thumbnail : item.src} alt={l(item.alt)} className="w-full transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-foreground/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  {item.type === "video" && (
                    <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center">
                      <Play className="w-5 h-5 text-foreground ml-0.5" />
                    </div>
                  )}
                </div>
                <span className="absolute bottom-2 left-2 px-2 py-1 bg-background/80 text-xs font-medium rounded-full">
                  {l(galleryData.categories.find(c => c.en === item.category) || item.category)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedMedia && (
        <div className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4" onClick={() => setSelectedIndex(null)}>
          <button className="absolute top-6 right-6 text-background hover:text-background/80 transition-colors z-10" onClick={() => setSelectedIndex(null)}>
            <X className="w-8 h-8" />
          </button>
          {selectedIndex !== null && selectedIndex > 0 && (
            <button className="absolute left-4 md:left-8 text-background hover:text-background/80 transition-colors z-10" onClick={(e) => { e.stopPropagation(); goToPrev(); }}>
              <ChevronLeft className="w-10 h-10" />
            </button>
          )}
          {selectedIndex !== null && selectedIndex < filteredItems.length - 1 && (
            <button className="absolute right-4 md:right-8 text-background hover:text-background/80 transition-colors z-10" onClick={(e) => { e.stopPropagation(); goToNext(); }}>
              <ChevronRight className="w-10 h-10" />
            </button>
          )}
          <div className="max-w-4xl max-h-[85vh] w-full" onClick={(e) => e.stopPropagation()}>
            {selectedMedia.type === "video" ? (
              <video autoPlay controls className="w-full h-full rounded-xl" src={selectedMedia.src} />
            ) : (
              <img src={selectedMedia.src} alt={l(selectedMedia.alt)} className="w-full h-full object-contain rounded-xl" />
            )}
            <p className="text-center mt-4 text-background/70">{l(selectedMedia.alt)}</p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
