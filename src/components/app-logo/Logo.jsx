import React from "react";
import logo from "../../assests/spotify-logo.svg";
import "./logo.css";

class Logo extends React.Component {
  render() {
    return (
      <div className="logo-box">
        <div className="logo-icon">
          <img src={logo} alt="logo" />
        </div>
        <div className="logo-text">
          <p>Spotify</p>
        </div>
      </div>
    );
  }
}

export default Logo;
