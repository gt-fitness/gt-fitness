import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, ExternalLink } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLocalized } from "@/hooks/use-localized";
import { format } from "date-fns";
import eventsData from "@/data/events.json";

const statusColors: Record<string, string> = {
  upcoming: "bg-primary text-primary-foreground",
  ongoing: "bg-green-500 text-white",
  completed: "bg-muted text-muted-foreground",
  cancelled: "bg-destructive text-destructive-foreground",
};

const EventsSection = () => {
  const { t } = useTranslation();
  const { l } = useLocalized();
  const navigate = useNavigate();
  
  const displayedEvents = eventsData.events
    .filter(e => e.status === "upcoming" || e.status === "ongoing")
    .slice(0, 3);

  const handleEventClick = (eventId: string) => {
    navigate(`/events?event=${eventId}`);
  };

  return (
    <section id="events" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            {t("events.subtitle", "Join Our Community")}
          </p>
          <h2 className="section-title">
            {t("events.title", "Upcoming Events")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedEvents.map((event, index) => (
            <div
              key={event.id}
              className="card-clean group cursor-pointer overflow-hidden"
              onClick={() => handleEventClick(event.id)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                <img
                  src={event.image}
                  alt={l(event.name)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <Badge className={`absolute top-3 right-3 ${statusColors[event.status]}`}>
                  {t(`events.status.${event.status}`, event.status)}
                </Badge>
              </div>
              
              <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {l(event.name)}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {l(event.description)}
              </p>
              
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{format(new Date(event.startDate), "MMM d, yyyy")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{event.startTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span className="truncate">{event.location}</span>
                </div>
              </div>
              
              <Button
                variant="athleticOutline"
                size="sm"
                className="mt-4 w-full group/btn"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(event.registrationUrl, "_blank");
                }}
              >
                {t("events.register", "Register")}
                <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/events">
            <Button variant="clean" size="lg">
              {t("events.viewAll", "View All Events")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
