import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLocalized } from "@/hooks/use-localized";
import { format } from "date-fns";
import { Calendar, MapPin, Clock, User, ExternalLink, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import eventsData from "@/data/events.json";

type EventType = (typeof eventsData.events)[0];

const statusColors: Record<string, string> = {
  upcoming: "bg-primary text-primary-foreground",
  ongoing: "bg-green-500 text-white",
  completed: "bg-muted text-muted-foreground",
  cancelled: "bg-destructive text-destructive-foreground",
};

const Events = () => {
  const { t } = useTranslation();
  const { l } = useLocalized();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    const eventId = searchParams.get("event");
    if (eventId) {
      const event = eventsData.events.find((e) => e.id === eventId);
      if (event) setSelectedEvent(event);
    }
  }, [searchParams]);

  const closeModal = () => {
    setSelectedEvent(null);
    setSearchParams({});
  };
  const openEvent = (event: EventType) => {
    setSelectedEvent(event);
    setSearchParams({ event: event.id });
  };

  const filteredEvents = eventsData.events.filter((event) => {
    if (filter === "all") return true;
    return event.status === filter;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
              {t("events.subtitle", "Join Our Community")}
            </p>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              {t("events.title", "Upcoming Events")}
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t(
                "events.description",
                "Join our fitness events, workshops, and competitions.",
              )}
            </p>
          </div>

          <div className="flex justify-center gap-2 mb-10 flex-wrap">
            {["all", "upcoming", "ongoing", "completed"].map((status) => (
              <Button
                key={status}
                variant={filter === status ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(status)}
                className="capitalize"
              >
                {t(`events.filter.${status}`, status)}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event, index) => (
              <div
                key={event.id}
                className="card-clean group cursor-pointer overflow-hidden"
                onClick={() => openEvent(event)}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                  <img
                    src={event.image}
                    alt={l(event.name)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <Badge
                    className={`absolute top-3 right-3 ${statusColors[event.status]}`}
                  >
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
                    <Calendar className="w-4 h-4 flex-shrink-0" />
                    <span>
                      {event.startDate
                        ? format(
                            new Date(event.startDate + "T00:00:00"),
                            "MMM d, yyyy",
                          )
                        : t("events.noDate", "To be announced")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 flex-shrink-0" />
                    <span>
                      {event.startTime} - {event.endTime}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate">{l(event.organizer)}</span>
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

          {filteredEvents.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                {t("events.noEvents", "No events found for this filter.")}
              </p>
            </div>
          )}
        </div>
      </main>

      <Dialog open={!!selectedEvent} onOpenChange={closeModal}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedEvent && (
            <>
              <DialogHeader>
                <div className="flex items-start justify-between">
                  <Badge className={statusColors[selectedEvent.status]}>
                    {t(
                      `events.status.${selectedEvent.status}`,
                      selectedEvent.status,
                    )}
                  </Badge>
                </div>
                <DialogTitle className="text-2xl font-display mt-2">
                  {l(selectedEvent.name)}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <img
                    src={selectedEvent.image}
                    alt={l(selectedEvent.name)}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-muted-foreground">
                  {l(selectedEvent.description)}
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {t("events.date", "Date")}
                        </p>
                        <p className="font-medium">
                          {selectedEvent.startDate
                            ? format(
                                new Date(selectedEvent.startDate + "T00:00:00"),
                                "MMM d, yyyy",
                              )
                            : t("events.noDate", "To be announced")}
                          {selectedEvent.endDate &&
                            selectedEvent.startDate !==
                              selectedEvent.endDate && (
                              <>
                                {" "}
                                -{" "}
                                {format(
                                  new Date(selectedEvent.endDate),
                                  "MMMM d, yyyy",
                                )}
                              </>
                            )}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {t("events.time", "Time")}
                        </p>
                        <p className="font-medium">
                          {selectedEvent.startTime} - {selectedEvent.endTime}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {t("events.location", "Location")}
                        </p>
                        <p className="font-medium">{selectedEvent.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {t("events.organizer", "Organizer")}
                        </p>
                        <p className="font-medium">
                          {l(selectedEvent.organizer)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <Button
                  variant="athletic"
                  size="lg"
                  className="w-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(
                      selectedEvent.registrationUrl === ""
                        ? "https://www.instagram.com/gt_fitnesss?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                        : selectedEvent.registrationUrl,
                      "_blank",
                    );
                  }}
                >
                  {t("events.registerNow", "Register Now")}
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Events;
