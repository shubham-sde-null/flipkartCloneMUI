import React, { useEffect, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { Button, useMediaQuery, useTheme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
function Login(props) {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const isMed = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const [email, setEmial] = useState("");
  const [password, setPassword] = useState("");
  // useEffect(() => {
  //   console.log("the email is", email);
  //   console.log("the password is", password);
  // });
  async function loginHandler() {
    let item = { email, password };
    // http://localhost:8000/loginuser
    //earlie this was the url when running on local server
    let result = await fetch(
      "https://lime-drab-chipmunk.cyclic.app/loginuser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify(item),
      }
    );
    if (result) {
      result = await result.json();
      localStorage.setItem("userInfo", JSON.stringify(result));
      navigate("/");
      props.loginCloseHandler();
    }
  }
  return (
    <div className={isMatch ? "loginPageS" : "loginPage"}>
      <div className={isMatch ? "loginContainerS" : "loginContainer"}>
        <div className={isMatch ? "leftLoginS" : "leftLogin"}>
          <h2>Login</h2>
          <p>Get access to your Orders, whishlist and Recommendations</p>
          <img
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"
            alt=""
          />
        </div>
        <div className={isMatch ? "rightLoginS" : "rightLogin"}>
          <div>
            <input
              type="text"
              placeholder="Enter Email/ Mobile Number"
              className={isMatch ? "rightTextFieldS" : "rightTextField"}
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
              className={isMatch ? "rightTextFieldS" : "rightTextField"}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
          </div>
          <div className={isMatch ? "rightPartDescS" : "rightPartDesc"}>
            {" "}
            <p>
              By continuing, you agree to Flipkart's Terms of Use and Privacy
              Policy.
            </p>
          </div>

          <Button
            variant="contained"
            className={isMatch ? "loginButtonS" : "loginButton"}
            onClick={loginHandler}
          >
            Login
          </Button>
          <p className={isMatch ? "orS" : "or"}>OR</p>
          <Button
            variant="contained"
            className={isMatch ? "requestOTPS" : "requestOTP"}
          >
            Request OTP
          </Button>
          <p
            className={isMatch ? "accountS" : "account"}
            onClick={props.registerHandler}
            style={{ cursor: "pointer" }}
          >
            New To Flikart? Create an account
          </p>
        </div>
        {/* <div className="closeBtn">
          <p>close</p>
        </div> */}
      </div>
      <div
        className={isMatch ? "closeBtnS" : "closeBtn"}
        onClick={props.loginCloseHandler}
      >
        <CloseIcon fontSize="large" />
      </div>
    </div>
  );
}

export default Login;
