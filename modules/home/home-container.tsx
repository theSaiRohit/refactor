import Faq from "./faq";
import HomeAbout from "./home-about";
import HomeCards from "./home-cards";
import HomeCta from "./home-cta";
import HomeMain from "./home-main";

export default function HomeContainer() {
  return (
    <>
      <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
      <HomeMain />
      <HomeAbout />
      <HomeCta />
      <HomeCards />
      <Faq />
    </>
  );
}
