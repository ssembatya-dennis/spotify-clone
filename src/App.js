import React from "react";
import { SideArticle, MainStream, Article } from "./containers/Containers";

class App extends React.Component {
  render() {
    return (
      <main className="app-container">
        <SideArticle />
        <MainStream />
        <Article />
      </main>
    );
  }
}

export default App;
