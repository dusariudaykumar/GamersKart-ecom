import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
const SignUp = () => {
  return (
    <div className="sign-wrapper ">
      <form className="flex-col form-container">
        <h5 className="signup-heading">SignUp</h5>
        <div className="input-container flex-col">
          <div className="flex-col">
            <label className="signup-labels " htmlFor="first-name-input">
              First Name
            </label>
            <input
              className="input-name sample-input-email"
              type="text"
              id="first-name-input"
              placeholder="Enter your First Name"
              required
            />
          </div>
          <div className="flex-col">
            <label className="signup-labels " htmlFor="last-name-input">
              {" "}
              Last Name
            </label>
            <input
              className=" input-last-name sample-input-email"
              type="text"
              id="last-name-input"
              placeholder="Enter your Last Name"
              required
            />
          </div>
          <div className="flex-col">
            <label className="signup-labels " htmlFor="email-input">
              Email Address
            </label>
            <input
              className=" input-last-name sample-input-email"
              type="text"
              id="email-input"
              placeholder="Enter your Last Name"
              required
            />
          </div>
          <div className="flex-col">
            <label className="signup-labels " htmlFor="pwd-input">
              Password
            </label>
            <input
              className="sample-input-pwd"
              type="password"
              placeholder="Password"
              id="pwd-input"
              required
            />
          </div>
          <div className="flex-col">
            <label className="signup-labels " htmlFor="confirm-pwd-input">
              Confirm Password
            </label>
            <input
              className="sample-input-pwd"
              type="Confirm Password"
              id="confirm-pwd-input"
              placeholder="Confirm Password"
              required
            />
          </div>
          <div className="flex-align-item-center">
            <input type="checkbox" id="terms-conditons" required />
            <label htmlFor="terms-conditons">
              I accept all Terms & Conditions
            </label>
          </div>
          <button className="btn btn-solid">Create New Account</button>
        </div>
        <Link className="login-link flex" to="/login">
          Already have an account
          <span className="material-icons-outlined"> chevron_right </span>
        </Link>
      </form>
    </div>
  );
};

export { SignUp };
