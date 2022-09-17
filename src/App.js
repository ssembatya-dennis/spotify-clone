import React from "react";
// import {
//   SideArticle,
//   MainStream,
//   Article,
//   Media,
// } from "./containers/Containers";
import SignUp from "./layout/sign-up/SignUp";

class App extends React.Component {
  render() {
    return (
      <>
        {/* <main className="app-container">
          <SideArticle />
          <MainStream />
          <Article />
          <Media />
        </main> */}
        <SignUp />
      </>
    );
  }
}

export default App;
