export interface BriefEventType {
  eventData: {
    eventName: string;
    eventDate: string;
    longDescription: string;
    venue: string;
    time: string;
    eventPoster: {
      url: string;
    };
  }[];
}
