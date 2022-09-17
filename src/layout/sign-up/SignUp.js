import React from "react";
import { Logo } from "../../components/Component";
import "./sign-up.css";

class SignUp extends React.Component {
  render() {
    return (
      <article className="sign_up-page">
        <div className="header_text-box">
          <Logo />
          <h1>Sign up for free to start listening.</h1>
        </div>

        <div className="cta">
          <div className="cta__facebook">
            <a href="#facebook">Facebook</a>
          </div>
          <div className="cta__google">
            <a href="#Google">Google</a>
          </div>
        </div>

        <span className="form__line-break">OR</span>

        <form>
          <label htmlFor="email">What's your email?</label>
          <input type="email" name="email" id="email" placeholder="Email" />

          <label htmlFor=""></label>
        </form>
      </article>
    );
  }
}

export default SignUp;
