export interface BriefEventType {
  eventData: {
    eventName: string;
    eventDate: string;
    longDescription: string;
    venue: string;
    eventPoster: {
      url: string;
    };
  }[];
}
