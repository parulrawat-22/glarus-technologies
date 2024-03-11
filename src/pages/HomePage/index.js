import Footer from "../../components/Footer";
import Header from "../../components/Header";
import banner1 from "../../assets/Images/slider_02.jpg";
import Card from "../../components/Card";
import ImageBanner from "../../components/ImageBanner";
import {
  WELCOME_TEXT,
  ABOUT_PARA,
  OUR_SERVICES,
} from "../../constants/textConstants";
import CARDS_DATA from "../../constants/cardConstant";
import banner2 from "../../assets/Images/slider_01.jpg";
import banner3 from "../../assets/Images/slider_03.jpg";
import "./style.css";

const HomePage = () => {
  const bannerImage = [banner1, banner2, banner3];
  return (
    <div className="homepage_container">
      <div className="homepage_header_footer_container">
        <Header />
        <div className="homepage_data">
          <ImageBanner images={bannerImage} interval={3000} />

          <div className="homepage_about">
            <h1>{WELCOME_TEXT}</h1>
            <p>{ABOUT_PARA}</p>
          </div>
          <div className="homepage_services">
            <h1>{OUR_SERVICES}</h1>
            <div className="homepage_card_flex">
              {CARDS_DATA && CARDS_DATA.map((data) => <Card data={data} />)}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
