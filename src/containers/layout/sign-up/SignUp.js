import React from "react";
import { Logo } from "../../../components/Component";
import "./sign_up.css";
import Google from "../../../assests/social-icons/google.svg";

class SignUp extends React.Component {
  render() {
    return (
      <div className="Sign_up-container">
        <div className="head_text-box">
          <Logo />
          <h2 className="sign_up-heading">
            Sign up for free to start listening.
          </h2>
        </div>
        <div className="login_email">
          <div className="login_user">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 user-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </div>
          <input
            type="text"
            className="login_email-input"
            name="User_email"
            placeholder="Username or Email"
          />
          <a href="#email" className="email-btn">
            Sign up with Email
          </a>
        </div>
        <p className="line-divider">OR</p>
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
              <span className="social-span">Sign up with Facebook</span>
            </a>
          </div>
          <div className="cta_google">
            <a href="#google" className="google-btn">
              <img src={Google} className="google-img" alt="Google svg" />{" "}
              <span className="social-span">Sign up with Google</span>
            </a>
          </div>
          <div className="Sign_up-wrapper">
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

export default SignUp;
