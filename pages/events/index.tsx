import { useCallback } from "react";
import type { GetStaticProps } from "next";
import Head from "next/head";
import { companyName, description } from "@/common-data";
import { default as HomeEventCard } from "@/components/home-event-card";
import { default as gqlclient } from "@/gql/client";
import { briefEventData } from "@/gql/queries";
import type { BriefEventType } from "@/types/pages/event";
import EventHeading from "@/modules/events/event-heading";

export const getStaticProps: GetStaticProps = async () => {
  const eventDataObj: Record<string, any> = await gqlclient.request(briefEventData);
  const eventData: BriefEventType = eventDataObj?.eventInfoCollection?.items ?? [];
  return {
    props: { eventData: eventData },
    revalidate: 60 * 60 * 6
  };
};

export default function Event({ eventData }: BriefEventType) {
  const mapper = useCallback((data: BriefEventType["eventData"][0], index: number) => {
    const eventDate = new Date(data?.eventDate ?? null);
    return (
      <HomeEventCard
        key={index}
        image={{ src: data.eventPoster.url, alt: data.eventName }}
        heading={data.eventName}
        date={eventDate}
        venue={data.venue}
        para={data.longDescription}
      />
    );
  }, []);
  return (
    <section className="events">
      <Head>
        <title>{`Events | ${companyName}`}</title>
        <meta name="description" content={description} />
      </Head>
      <EventHeading />
      <div className="event-cards-container">{eventData.map(mapper)}</div>
    </section>
  );
}
