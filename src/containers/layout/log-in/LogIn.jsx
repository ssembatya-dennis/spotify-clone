import React from "react";
import { Logo } from "../../../components/Component";
import Google from "../../../assests/social-icons/google.svg";
import "./login.css";

class Login extends React.Component {
  render() {
    return (
      <div className="Sign_up-container">
        <div className="head_text-box">
          <Logo />
          <h2 className="login-heading">To continue, log in to Spotify.</h2>
        </div>

        <div className="sign_up-cta">
          <div className="cta_facebook">
            <a href="#facebook" className="facebook-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />{" "}
              </svg>{" "}
              <span className="social-span">Continue with Facebook</span>
            </a>
          </div>
          <div className="cta_google">
            <a href="#google" className="google-btn">
              <img src={Google} className="google-img" alt="Google svg" />{" "}
              <span className="social-span">Continue with Google</span>
            </a>
          </div>

          <div className="login-wrapper">
            <a href="#Sign_up" className="sign_up-text">
              Don't have a Spotify account?
            </a>
            <a href="#sign_up" className="Sign_up-btn">
              Sign up
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
