import { FaqDataType, HomeCardsType } from "@/types/home/types";

export const aboutHeader = "Join the exclusive club";
export const aboutDescription =
  "Tired of dull weekends and boring nights? TheBunch.ai helps you connect with like-minded individuals and participate\
  in exclusive social events organized in your city! Be part of the coolest social scene ever.";

export const ctaHeader = "Get Started";
export const ctaDescription =
  "Dive into a plethora of excitement and entertainment exclusively crafted for you.\
  Don’t miss out on the fun – join TheBunch.ai today!";

export const homeCardsData: HomeCardsType[] = [
  {
    imgSrc: "/assets/images/trek.jpg",
    alt: "dummy",
    heading: "From Casual Mixers to Themed Parties – Never A Dull Moment!",
    text: "We’ve got an event for everyone. Connect with fellow foodies, game-lovers, outdoor enthusiasts, and more!",
  },
  {
    imgSrc: "/assets/images/sunrise.jpg",
    alt: "dummy",
    heading: "Quality Over Quantity: Handpicked Social Events and Activities",
    text: "Say goodbye to overcrowded meetups. We prioritize well-curated events for a better social experience.",
  },
];

export const faqData: FaqDataType[] = [
  {
    question: "Why should I join TheBunch.ai?",
    answer:
      "TheBunch.ai aims to bring like-minded people together for exceptional social experiences,\
      forming friendships and creating memories.",
  },
  {
    question: "How are the events organized?",
    answer:
      "The events are organized by our creative team in collaboration with local partners for an authentic experience.",
  },
];
