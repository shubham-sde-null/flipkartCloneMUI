import React from "react";
import "./Login.css";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
function Login(props) {
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
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Password"
              className="rightTextField"
            />
          </div>
          <div className="rightPartDesc">
            {" "}
            <p>
              By continuing, you agree to Flipkart's Terms of Use and Privacy
              Policy.
            </p>
          </div>

          <Button variant="contained" className="loginButton">
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
      <div className="closeBtn" onClick={props.loginCloseHandler}>
        <CloseIcon fontSize="large" />
      </div>
    </div>
  );
}

export default Login;
