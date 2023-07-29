import { BriefEventType } from "@/types/pages/event";
import EventCard from "./event-card";
import EventHeading from "./event-heading";

export default function EventsContainer({ eventData }: BriefEventType) {
  return (
    <>
      <EventHeading />
      <div className="event-cards-container">
        <EventCard eventData={eventData} />
      </div>
    </>
  );
}
