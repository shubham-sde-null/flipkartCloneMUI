import React, { useEffect, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
function Login(props) {
  const navigate = useNavigate();
  const [email, setEmial] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    console.log("the email is", email);
    console.log("the password is", password);
  });
  async function loginHandler() {
    let item = { email, password };
    let result = await fetch("http://localhost:8000/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    if (result) {
      result = await result.json();
      localStorage.setItem("userInfo", JSON.stringify(result));
      navigate("/");
      // props.loginCloseHandler();
    }
  }
  return (
    <div className="loginPage">
      <div className="loginContainer">
        <div className="leftLogin">
          <h2>Login</h2>
          <p>Get access to your Orders, whishlist and Recommendations</p>
          <img
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"
            alt=""
          />
        </div>
        <div className="rightLogin">
          <div>
            <input
              type="text"
              placeholder="Enter Email/ Mobile Number"
              className="rightTextField"
              onChange={(e) => {
                setEmial(e.target.value);
              }}
              value={email}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="rightTextField"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
          </div>
          <div className="rightPartDesc">
            {" "}
            <p>
              By continuing, you agree to Flipkart's Terms of Use and Privacy
              Policy.
            </p>
          </div>

          <Button
            variant="contained"
            className="loginButton"
            onClick={loginHandler}
          >
            Login
          </Button>
          <p className="or">OR</p>
          <Button variant="contained" className="requestOTP">
            Request OTP
          </Button>
          <p className="account">New To Flikart? Create an account</p>
        </div>
        {/* <div className="closeBtn">
          <p>close</p>
        </div> */}
      </div>
      <div
        className="closeBtn"
        onClick={() => {
          props.crossBtnHandler();
          props.loginCloseHandler();
        }}
      >
        <CloseIcon fontSize="large" />
      </div>
    </div>
  );
}

export default Login;
