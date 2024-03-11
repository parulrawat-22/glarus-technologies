import product from "../../assets/Svg/product.svg";
import data from "../../constants/footerConstants";
import "./style.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="footer_main_container">
      <div className="footer_content">
        {data &&
          data.map((item) => (
            <div className="footer_main_content">
              <h3 className="footer_heading">{item.heading}</h3>
              {item.list.map((list) => (
                <div className="footer_image_flex">
                  {list.icon && (
                    <img src={list.icon} alt="" className="footer_image"></img>
                  )}
                  <p>{list.name}</p>
                </div>
              ))}
            </div>
          ))}
      </div>
      <div className="footer_copyright">
        <p>&copy; All Rights Reserved, Glarus Technologies 2024</p>
        <img src={product} width="30px" onClick={scrollToTop} />
      </div>
    </div>
  );
};

export default Footer;
