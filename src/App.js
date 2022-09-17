import React from "react";
import {
  SideArticle,
  MainStream,
  Article,
  Media,
  // SignUp,
  // Login,
} from "./containers/Containers";

class App extends React.Component {
  render() {
    return (
      <main className="app-container">
        <SideArticle />
        <MainStream />
        <Article />
        <Media />
        {/* <SignUp />
        <Login /> */}
      </main>
    );
  }
}

export default App;
