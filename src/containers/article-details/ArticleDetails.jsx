import React from "react";
import { MainHead } from "../../components/Component";
import Podcast01 from "../../assests/podcast/podcast-6.svg";
import Podcast02 from "../../assests/podcast/podcast-2.svg";
import Podcast03 from "../../assests/podcast/podcast-3.svg";
import Podcast04 from "../../assests/podcast/podcast-4.svg";
import Podcast05 from "../../assests/podcast/podcast-5.svg";
import Podcast06 from "../../assests/podcast/podcast-6.svg";

import PodcastIcon from "../../assests/podcast/podcast-icon.svg";
import "./article-details.css";

class Article extends React.Component {
  render() {
    return (
      <div className="article">
        <div className="podcast__main-head">
          <MainHead>Podcasts</MainHead>
        </div>
        <ul className="podcast__list">
          <li className="podcast__list-item">
            <figure className="podcast__figure">
              <img src={Podcast01} alt="tile 2" />
              <figcaption className="podcast__caption">
                <span className="main-caption">The Mythpat Podcast</span>
                <span className="sub-caption">Spotify Studios</span>
              </figcaption>
            </figure>
            <img src={PodcastIcon} alt="icon1 img" />
          </li>

          <li className="podcast__list-item">
            <figure className="podcast__figure">
              <img src={Podcast02} alt="tile 2" />
              <figcaption className="podcast__caption">
                <span className="main-caption">The Ranveer Show</span>
                <span className="sub-caption">BeerBiceps</span>
              </figcaption>
            </figure>
            <img src={PodcastIcon} alt="icon1 img" />
          </li>

          <li className="podcast__list-item">
            <figure className="podcast__figure">
              <img src={Podcast03} alt="tile 2" />
              <figcaption className="podcast__caption">
                <span className="main-caption">Yaadon Ka Idiot Box...</span>
                <span className="sub-caption">Spotify Studios</span>
              </figcaption>
            </figure>
            <img src={PodcastIcon} alt="icon1 img" />
          </li>

          <li className="podcast__list-item">
            <figure className="podcast__figure">
              <img src={Podcast04} alt="tile 2" />
              <figcaption className="podcast__caption">
                <span className="main-caption">Maha Bharat with...</span>
                <span className="sub-caption">Spotify Studios</span>
              </figcaption>
            </figure>
            <img src={PodcastIcon} alt="icon1 img" />
          </li>

          <li className="podcast__list-item">
            <figure className="podcast__figure">
              <img src={Podcast05} alt="tile 2" />
              <figcaption className="podcast__caption">
                <span className="main-caption">Stories with Abhash</span>
                <span className="sub-caption">Abhash Jha</span>
              </figcaption>
            </figure>
            <img src={PodcastIcon} alt="icon1 img" />
          </li>

          <li className="podcast__list-item">
            <figure className="podcast__figure">
              <img src={Podcast06} alt="tile 2" />
              <figcaption className="podcast__caption">
                <span className="main-caption">Chanakya Niti</span>
                <span className="sub-caption">Kiran Chavda</span>
              </figcaption>
            </figure>
            <img src={PodcastIcon} alt="icon1 img" />
          </li>
        </ul>
      </div>
    );
  }
}

export default Article;
