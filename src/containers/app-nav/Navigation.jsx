import React from "react";
import "./navigation.css";
import compass from "../../assests/nav-icons/spotify-compass.svg";
import heart from "../../assests/nav-icons/spotify-heart.svg";
import podcast from "../../assests/nav-icons/spotify-podcast.svg";
import radio from "../../assests/nav-icons/spotify-radio.svg";
import profile from "../../assests/nav-icons/spotify-user.svg";

class Navigation extends React.Component {
  render() {
    return (
      <nav className="primary-navigation">
        <ul className="navigation__list">
          <li className="navigation__list-item">
            <img src={compass} alt="compass-icon" />
            <a
              href="#likes"
              className="navigation__list-link"
              id="linkDiscovery"
            >
              Discovery
            </a>
          </li>
          <li className="navigation__list-item">
            <img src={heart} alt="heart-icon" />
            <a href="#likes" className="navigation__list-link" id="linkLikes">
              Likes
            </a>
          </li>
          <li className="navigation__list-item">
            <img src={podcast} alt="compass-icon" />
            <a href="#likes" className="navigation__list-link" id="linkPodcast">
              Podcast
            </a>
          </li>
          <li className="navigation__list-item">
            <img src={radio} alt="compass-icon" />
            <a href="#likes" className="navigation__list-link" id="linkRadio">
              Radio
            </a>
          </li>
          <li className="navigation__list-item">
            <img src={profile} alt="compass-icon" />
            <a href="#likes" className="navigation__list-link" id="linkProfile">
              Profile
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
