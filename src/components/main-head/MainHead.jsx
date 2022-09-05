import React from "react";
import "./main-head.css";

class MainHead extends React.Component {
  render() {
    return (
      <div className="main-head">
        <h3 className="heading-primary">{this.props.children}</h3>
        <a href="#full-list" className="full-list" id="full-list">
          View All
        </a>
      </div>
    );
  }
}

export default MainHead;
