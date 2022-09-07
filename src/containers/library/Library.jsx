import React from "react";
import "./library.css";
import Tile01 from "../../assests/library/tile-1.svg";
import Tile02 from "../../assests/library/tile-2.svg";
import Tile03 from "../../assests/library/tile-3.svg";
import Tile04 from "../../assests/library/tile-4.svg";
import Tile05 from "../../assests/library/tile-5.svg";

import Icon from "../../assests/library/library-heart.svg";
import verticleStrip from "../../assests/library/verticle-strip.svg";

class Library extends React.Component {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td>
              <a href="#libraryLink">
                <figure className="library__figure">
                  <img src={Tile01} alt="tile 1" />
                  <figcaption className="caption">Vaaste</figcaption>
                </figure>
              </a>
            </td>
            <td className="song-info">Dhvani Bhanushali</td>
            <td className="song-info">04:58</td>
            <td>
              <img src={Icon} alt="icon1 img" />
            </td>
            <td>
              <a href="#options">
                <img src={verticleStrip} alt="options icon" />
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#libraryLink">
                <figure className="library__figure">
                  <img src={Tile02} alt="tile 2" />
                  <figcaption className="caption">Pyar Di Kahani</figcaption>
                </figure>
              </a>
            </td>
            <td className="song-info">Ammy Virk</td>
            <td className="song-info">04:58</td>
            <td>
              <img src={Icon} alt="icon1 img" />
            </td>
            <td>
              <a href="#options">
                <img src={verticleStrip} alt="options icon" />
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#libraryLink">
                <figure className="library__figure">
                  <img src={Tile03} alt="tile 1" />
                  <figcaption className="caption">Waalian</figcaption>
                </figure>
              </a>
            </td>
            <td className="song-info">Harnoor</td>
            <td className="song-info">04:58</td>
            <td>
              <img src={Icon} alt="icon1 img" />
            </td>
            <td>
              <a href="#options">
                <img src={verticleStrip} alt="options icon" />
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#libraryLink">
                <figure className="library__figure">
                  <img src={Tile04} alt="tile 1" />
                  <figcaption className="caption">Kabhi Tumhe</figcaption>
                </figure>
              </a>
            </td>
            <td className="song-info">Javed-Mohsin</td>
            <td className="song-info">04:58</td>
            <td>
              <img src={Icon} alt="icon1 img" />
            </td>
            <td>
              <a href="#options">
                <img src={verticleStrip} alt="options icon" />
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#libraryLink">
                <figure className="library__figure">
                  <img src={Tile05} alt="tile 1" />
                  <figcaption className="caption">Khabbi Seat</figcaption>
                </figure>
              </a>
            </td>
            <td className="song-info">Ammy Virk</td>
            <td className="song-info">04:58</td>
            <td>
              <img src={Icon} alt="icon1 img" />
            </td>
            <td>
              <a href="#options">
                <img src={verticleStrip} alt="options icon" />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Library;
