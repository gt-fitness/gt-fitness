import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLocalized } from "@/hooks/use-localized";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Play, Clock, Flame, Users, X } from "lucide-react";
import challengesData from "@/data/challenges.json";

const Challenges = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedChallenge, setSelectedChallenge] = useState<(typeof challengesData.challenges)[0] | null>(null);
  const { t } = useTranslation();
  const { l } = useLocalized();

  useEffect(() => {
    const challengeId = searchParams.get("challenge");
    if (challengeId) {
      const challenge = challengesData.challenges.find((c) => c.id === parseInt(challengeId));
      if (challenge) setSelectedChallenge(challenge);
    }
  }, [searchParams]);

  const closeModal = () => { setSelectedChallenge(null); setSearchParams({}); };
  const openChallenge = (challenge: (typeof challengesData.challenges)[0]) => {
    setSelectedChallenge(challenge); setSearchParams({ challenge: challenge.id.toString() });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-28 pb-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">{t("challenges.pushLimits")}</p>
          <h1 className="section-title mb-6">{t("challenges.allTitle")}</h1>
          <p className="section-subtitle mx-auto max-w-2xl">{t("challenges.pageSubtitle")}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challengesData.challenges.map((challenge) => (
              <div key={challenge.id} className="group rounded-2xl overflow-hidden bg-card shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => openChallenge(challenge)}>
                <div className="relative aspect-video overflow-hidden">
                  <img src={challenge.thumbnail} alt={l(challenge.title)} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center">
                      <Play className="w-6 h-6 text-foreground ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><Clock className="w-3.5 h-3.5" />{l(challenge.duration)}</span>
                    <span className="flex items-center gap-1.5 text-xs font-medium"><Flame className="w-3.5 h-3.5" />{l(challenge.intensity)}</span>
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><Users className="w-3.5 h-3.5" />{challenge.participants}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{l(challenge.title)}</h3>
                  <p className="text-muted-foreground text-sm mb-5">{l(challenge.description)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedChallenge && (
        <div className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4 overflow-y-auto" onClick={closeModal}>
          <button className="absolute top-6 right-6 text-background hover:text-background/80 transition-colors" onClick={closeModal}>
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-3xl w-full bg-background rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            {selectedChallenge.video ? (
              <video autoPlay controls className="w-full aspect-video" src={selectedChallenge.video} poster={selectedChallenge.thumbnail} />
            ) : (
              <img src={selectedChallenge.thumbnail} alt={l(selectedChallenge.title)} className="w-full aspect-video object-cover" />
            )}
            <div className="p-6">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground"><Clock className="w-4 h-4" />{l(selectedChallenge.duration)}</span>
                <span className="flex items-center gap-1.5 text-sm font-medium"><Flame className="w-4 h-4" />{l(selectedChallenge.intensity)}</span>
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground"><Users className="w-4 h-4" />{selectedChallenge.participants} {t("challenges.participantsLabel")}</span>
              </div>
              <h2 className="font-display text-3xl font-semibold mb-3">{l(selectedChallenge.title)}</h2>
              <p className="text-muted-foreground mb-6">{l(selectedChallenge.description)}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Challenges;
