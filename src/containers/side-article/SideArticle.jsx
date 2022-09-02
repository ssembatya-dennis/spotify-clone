import React from "react";
import { Logo, Search } from "../../components/Component";
import { Navigation, Acitivity, Account } from "../Containers";
import "./side-article.css";

class SideArticle extends React.Component {
  render() {
    return (
      <div className="side-article">
        <Logo />
        <Search />
        <Navigation />
        <Acitivity />
        <Account />
      </div>
    );
  }
}

export default SideArticle;
