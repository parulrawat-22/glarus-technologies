import logo from "../../assets/Images/Logo2.jpg";
import "./style.css";

const Header = () => {
  const navData = [
    "Home",
    "Website",
    "Application",
    "Outsource",
    "Entertainment",
    "Jobs",
    "Contact",
  ];
  return (
    <div className="header_main_container">
      <img src={logo} alt="glarus logo" className="header_glarus_logo" />
      <div className="header_content">
        {navData && navData.map((data) => <p>{data}</p>)}
      </div>
    </div>
  );
};

export default Header;
