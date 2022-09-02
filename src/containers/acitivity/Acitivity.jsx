import React from "react";
import "./acitivity.css";
import friend01 from "../../assests/active-icons/friend-1.svg";
import friend02 from "../../assests/active-icons/friend-2.svg";
import friend03 from "../../assests/active-icons/friend-3.svg";
import friend04 from "../../assests/active-icons/friend-4.svg";

class Acitivity extends React.Component {
  render() {
    return (
      <div className="acitivity">
        <h3 className="activity_title">Friends Acitivity</h3>
        <div className="activity_component">
          <div className="acitivity__icon-box">
            <img src={friend01} alt="Freind 1 icon" />
          </div>
          <div className="acitvity__text-box">
            <p>
              <span className="main-text">Jashanpreet</span>
              <span className="sub-text">Twitter</span>
            </p>
          </div>
        </div>
        <div className="activity_component">
          <div className="acitivity__icon-box">
            <img src={friend02} alt="Freind 1 icon" />
          </div>
          <div className="acitvity__text-box">
            <p>
              <span className="main-text">Jashanpreet</span>
              <span className="sub-text">Twitter</span>
            </p>
          </div>
        </div>
        <div className="activity_component">
          <div className="acitivity__icon-box">
            <img src={friend03} alt="Freind 1 icon" />
          </div>
          <div className="acitvity__text-box">
            <p>
              <span className="main-text">Jashanpreet</span>
              <span className="sub-text">Twitter</span>
            </p>
          </div>
        </div>
        <div className="activity_component">
          <div className="acitivity__icon-box">
            <img src={friend04} alt="Freind 1 icon" />
          </div>
          <div className="acitvity__text-box">
            <p>
              <span className="main-text">Jashanpreet</span>
              <span className="sub-text">Twitter</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Acitivity;
