import React from "react";
import account from "../../assests/account-icons/account-pic.svg";
import "./account.css";

class Account extends React.Component {
  render() {
    return (
      <div className="account">
        <h3 className="account_title">My Account</h3>
        <div className="account_component">
          <div className="account__icon-box">
            <img src={account} alt="Freind 1 icon" />
          </div>
          <div className="account__text-box">
            <p>
              <span className="main-text">Gurjot Singh</span>
              <span className="sub-text">gurjotkauhrain@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Account;
