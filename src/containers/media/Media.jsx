import React from "react";
import mediaImg from "../../assests/media/media-img.svg";
import mediaheart from "../../assests/media/heart.svg";
import mediadownload from "../../assests/media/download.svg";
import mediacontrols from "../../assests/media/media-controls.svg";
import mediavolume from "../../assests/media/volume.svg";

import "./media.css";

class Media extends React.Component {
  render() {
    return (
      <div className="media">
        <div className="media__info">
          <figure className="media__figure">
            <img src={mediaImg} alt="tile 2" />
            <figcaption className="media__caption">
              <span className="main-caption">The Ranveer Show</span>
              <span className="sub-caption">BeerBiceps</span>
            </figcaption>
          </figure>
          <div className="media__react">
            <img src={mediaheart} alt="media heart" />
            <img src={mediadownload} alt="media download" />
          </div>
        </div>
        <div className="media__controls">
          <img src={mediacontrols} alt="media controls" />
        </div>
        <div className="media__duration">
          <span className="media__time">01:38 / 04:53</span>
          <img src={mediavolume} alt="media volume" />
        </div>
      </div>
    );
  }
}

export default Media;
