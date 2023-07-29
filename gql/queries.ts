import { gql } from "graphql-request";

export const briefEventData = gql`
  query {
    eventInfoCollection {
      items {
        eventName
        eventDate
        longDescription
        venue
        time
        eventPoster {
          url
        }
      }
    }
  }
`;
