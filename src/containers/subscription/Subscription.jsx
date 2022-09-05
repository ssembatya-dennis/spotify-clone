import React from "react";
import subscribe from "../../assests/subscribe/subscribe.svg";
import "./subscription.css";

class Subscription extends React.Component {
  render() {
    return (
      <div className="subscription">
        <div className="subscription-details">
          <h3 className="subscription_title">Upgrade your plan</h3>
          <p className="subscription_text">
            50% discount on 1 year subscription
          </p>
          <div className="cta__box">
            <a href="#premium" className="cta cta__premium">
              Go Premium
            </a>
            <a href="#free" className="cta cta__free">
              Try free
            </a>
          </div>
        </div>
        <div className="subscription__img-box">
          <img
            src={subscribe}
            alt="subscribe img"
            className="subscription__img"
          />
        </div>
      </div>
    );
  }
}

export default Subscription;
