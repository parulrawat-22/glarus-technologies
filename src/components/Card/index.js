import "./style.css";

const Card = (props) => {
  return (
    <div className="card_main_container">
      <div className="main_card">
        <div className="card_front_side">
          <img src={props.data.icon} alt="card_icon" className="card_icon" />
          <p>{props.data.heading}</p>
        </div>
        <div className="card_back_side">
          <h2>{props.data.back_head}</h2>
          <p>{props.data.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
