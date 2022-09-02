import React from "react";
import { SideArticle, MainStream } from "./containers/Containers";

class App extends React.Component {
  render() {
    return (
      <main className="app-container">
        <SideArticle />
        <MainStream />
      </main>
    );
  }
}

export default App;
