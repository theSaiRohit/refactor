import { MouseEventHandler, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BsArrowRightCircleFill,
  BsFillCalendarDayFill,
  BsGeoAltFill,
  BsClockFill,
  BsFillXCircleFill
} from "react-icons/bs";

interface HomeCardEventProps {
  image: {
    src: string;
    alt: string;
  };
  heading: string;
  date: Date;
  venue: string;
  para: string;
}

export default function HomeEventCard({
  image = { src: "/", alt: "any" },
  heading = "def",
  date = new Date(),
  venue = "Chennai",
  para = "fallback"
}: HomeCardEventProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const getTime = useCallback(function getTimeFromDate(dateForTime?: Date) {
    const date = dateForTime ?? new Date();
    let hours: string | number = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    const amPm = date.getHours() >= 12 ? "PM" : "AM";
    hours = hours < 10 ? "0" + hours : hours;
    const minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    const time = hours + " : " + minutes + " " + amPm;
    return time;
  }, []);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const clickHandler: MouseEventHandler = () => {
    if (cardRef.current?.className) {
      cardRef.current.classList.add("active");
      containerRef.current?.style.setProperty("cursor", "default");
    }
  };
  const crossHandler: MouseEventHandler = () => {
    if (cardRef.current) {
      cardRef.current.classList.remove("active");
      containerRef.current?.style.setProperty("cursor", "pointer");
    }
  };

  return (
    <div className="event-card" ref={cardRef}>
      <div className="card-container" onClick={clickHandler} ref={containerRef}>
        <div className="img-container poster-container">
          <Image src={image.src} alt={image.alt} fill sizes="100%" className="event-poster" />
        </div>
        <div className="details-container">
          <h2 className="event-name">{heading}</h2>
          <div className="info-container">
            <div className="brief-info">
              <BsArrowRightCircleFill className="right-arrow" />
              <span className="event-date">
                <BsFillCalendarDayFill />
                {`${date.getDay()} ${months[date.getMonth()]} ${date.getFullYear()}`}
              </span>
              <span className="time">
                <BsClockFill />
                {getTime(date)}
              </span>
              <span className="venue">
                <BsGeoAltFill />
                {venue}
              </span>
              <span className="barcode-name">{heading}</span>
            </div>
            <div className="desc-container">
              <p className="details">{para}</p>
              <Link
                href={{
                  pathname: `/register`,
                  query: {
                    event: heading
                  }
                }}
                className="register-btn"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <BsFillXCircleFill className="cross" onClick={crossHandler} />
    </div>
  );
}
