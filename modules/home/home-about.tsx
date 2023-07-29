import Image from "next/image";
import {
  BsCalendarDayFill,
  BsEmojiHeartEyesFill,
  BsPeopleFill,
} from "react-icons/bs";
import type { IconType } from "react-icons/lib";
import { aboutDescription, aboutHeader } from "./home-data";

interface CardsType {
  Icon: IconType;
  text: string;
}
[];

export default function HomeAbout() {
  const aboutCardsInfo: CardsType[] = [
    {
      Icon: BsCalendarDayFill,
      text: "Year-round events",
    },
    {
      Icon: BsEmojiHeartEyesFill,
      text: "Exciting Activities",
    },
    {
      Icon: BsPeopleFill,
      text: "Happy Friendships",
    },
  ];
  return (
    <section className="home-about">
      <div className="img-container about-img-container">
        <Image
          src="/assets/images/bg.png"
          alt="3D Swirl"
          fill
          sizes="100%"
          className="about-img"
        />
      </div>
      <div className="about-info-container">
        <h2 className="about-header">{aboutHeader}</h2>
        <p className="about-info">{aboutDescription}</p>
        <div className="about-cards-container">
          {aboutCardsInfo.map((data, index: number) => {
            const { Icon } = data;
            return (
              <div className="about-cards" key={index}>
                <Icon />
                <span className="card-text">{data.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
