import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLocalized } from "@/hooks/use-localized";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Users,
  Target,
  Trophy,
  Heart,
  Globe,
  Dumbbell,
  Play,
  X,
} from "lucide-react";
import communityData from "@/data/community.json";

const valueKeys = [
  { icon: Users, key: "brotherhood" },
  { icon: Target, key: "discipline" },
  { icon: Trophy, key: "excellence" },
  { icon: Heart, key: "passion" },
  { icon: Globe, key: "globalUnity" },
  { icon: Dumbbell, key: "strength" },
];

const Community = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showStoryVideo, setShowStoryVideo] = useState(true);
  const storyRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const { l } = useLocalized();

  useEffect(() => {
    if (searchParams.get("story") === "true") {
      setShowStoryVideo(true);
      setSearchParams({});
      setTimeout(() => {
        storyRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [searchParams, setSearchParams]);

  useEffect(() => {
    setShowStoryVideo(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-28 pb-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            {t("community.ourStory")}
          </p>
          <h1 className="section-title mb-6">{t("community.whoWeAre")}</h1>
          <p className="section-subtitle mx-auto max-w-2xl">
            {l(communityData.description)}
          </p>
        </div>
      </section>

      <section ref={storyRef} className="relative w-full bg-black text-white">
        {/* Full Width Video */}
        <div className="relative w-full h-[60vh] md:h-[75vh] overflow-hidden">
          <video
            autoPlay={showStoryVideo}
            loop={showStoryVideo}
            controls={showStoryVideo}
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster=""
          >
            <source src="/assets/community/the_work.MP4" type="video/mp4" />
          </video>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Play Button (Centered) */}
          {!showStoryVideo && (
            <button
              onClick={() => setShowStoryVideo(true)}
              className="absolute inset-0 flex items-center justify-center group"
            >
              <div className="w-24 h-24 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300">
                <Play className="w-10 h-10 text-black ml-1" />
              </div>
            </button>
          )}
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">
                {t("community.ourMission")}
              </h2>
              <p className="text-muted-foreground mb-6">
                {l(communityData.mission)}
              </p>
              <p className="text-muted-foreground">
                {t("community.missionText")}
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"
                alt="Team training"
                className="rounded-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-foreground text-background p-5 rounded-xl">
                <p className="font-display text-3xl font-semibold">5+</p>
                <p className="text-background/70 text-sm">
                  {t("community.yearsStrong")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="section-title mb-4">{t("community.ourValues")}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {valueKeys.map((value) => (
              <div key={value.key} className="card-clean group">
                <value.icon className="w-10 h-10 text-foreground mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-xl font-semibold mb-2">
                  {t(`community.values.${value.key}`)}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {t(`community.values.${value.key}Desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="section-title mb-4">{t("community.meetTheTeam")}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {communityData.team.map((member) => (
              <div key={member.name} className="text-center group">
                <div className="relative mb-4 overflow-hidden rounded-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-display text-lg font-semibold">
                  {member.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {l(member.role)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-semibold mb-6">
            {t("community.readyToJoin")}
          </h2>
          <p className="text-background/70 mb-8 max-w-xl mx-auto">
            {t("community.joinCtaDescription")}
          </p>
          <Button
            variant="hero"
            className="bg-background text-foreground hover:bg-background/90"
          >
            {t("community.joinCta")}
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Community;
