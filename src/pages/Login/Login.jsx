import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  return (
    <div className="login-wrapper ">
      <form className="flex-col form-container">
        <h5 className="login-heading">Login</h5>
        <div className="input-container">
          <input
            className="sample-input-email"
            type="email"
            placeholder="Enter your Email"
            required
          />
          <input
            className="sample-input-pwd"
            type="password"
            placeholder="Password"
            required
          />
          <div className="flex-space-between">
            <div className="flex-align-item-center">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember Me</label>
            </div>
            <span>
              <Link to="/">Forgot Password</Link>
            </span>
          </div>
          <button className="btn btn-solid">Login</button>
        </div>
        <Link className="sign-up flex" to="/signup">
          Don't have account ? Sign up!
          <span className="material-icons-outlined"> chevron_right </span>
        </Link>
      </form>
    </div>
  );
};

export { Login };
