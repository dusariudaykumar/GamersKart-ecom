import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useAuth } from "../../contexts/auth-context";

const Login = () => {
  // initial data of the useState
  const initialLoginData = {
    email: "",
    password: "",
  };
  const [loginData, setLoginData] = useState(initialLoginData);
  const { authState, setAuthState } = useAuth();
  const navigate = useNavigate();

  const testHandler = (e) => {
    e.preventDefault();
    setLoginData({
      email: "adarshbalika@gmail.com",
      password: "adarshbalika",
    });
  };
  const loginFormChangeHandler = (e) => {
    const { name, value } = e.target;
    setLoginData((prevLoginFormData) => ({
      ...prevLoginFormData,
      [name]: value,
    }));
  };
  const { email, password } = loginData; // destructering loginData

  //Login Functionality

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const authResp = await axios.post("/api/auth/login", {
        email: email,
        password: password,
      });
      console.log(authResp);
      if (authResp.status === 200) {
        setAuthState({
          userData: { ...authResp.data.foundUser },
          isAuth: true,
          encodedToken: authResp.data.encodedToken,
        });
        toast.success("Login Sucessfull");
      }
      localStorage.setItem("token", authResp.data.encodedToken);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-wrapper ">
      <form className="flex-col form-container">
        <h5 className="login-heading">Login</h5>
        <div className="input-container">
          <input
            className="sample-input-email"
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={email}
            onChange={loginFormChangeHandler}
            required
          />
          <input
            className="sample-input-pwd"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={loginFormChangeHandler}
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
          <button onClick={loginHandler} className="btn btn-solid">
            Login
          </button>
          <button onClick={testHandler} className="btn btn-outline ">
            Test Credentials
          </button>
        </div>
        <Link className="sign-up flex" to="/signup">
          Don't have account ? Sign up!
          <span className="material-icons-outlined"> chevron_right </span>
        </Link>
        <ToastContainer />
      </form>
    </div>
  );
};

export { Login };
