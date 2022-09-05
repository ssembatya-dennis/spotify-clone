import React from "react";
import "./main-stream.css";
import { MainHead } from "../../components/Component";
import { Subscription, Library } from "../Containers";

class MainContext extends React.Component {
  render() {
    return (
      <div className="main-stream">
        <MainHead>Listen to premium podcasts</MainHead>
        <Subscription className="subscription" />
        <MainHead>Music</MainHead>
        <Library />
      </div>
    );
  }
}

export default MainContext;
