import React, { useEffect, useState } from "react";
import "./Register.css";
// import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
function Register(props) {
  //   const navigate = useNavigate();
  const [email, setEmial] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    console.log("the email is", email);
    console.log("the password is", password);
  });
  async function registerHandler() {
    let item = { email, password };
    let result = await fetch("http://localhost:8000/registeruser", {
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
      //   navigate("/");
      localStorage.removeItem("userInfo");
      props.loginCloseHandler();
      props.registerHandler();
    }
  }
  return (
    <div className="loginPage">
      <div className="loginContainer">
        <div className="leftLogin">
          <h2>Looks like you're new here!</h2>
          <p>Sign Up with your email to get started</p>
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
            onClick={registerHandler}
          >
            Register
          </Button>
          {/* <p className="or">OR</p> */}
          <Button
            variant="contained"
            className="requestOTP"
            onClick={() => {
              props.registerHandler();
            }}
          >
            Existing User? Log in
          </Button>
          {/* <p className="account">New To Flikart? Create an account</p> */}
        </div>
        {/* <div className="closeBtn">
          <p>close</p>
        </div> */}
      </div>
      <div
        className="closeBtn"
        onClick={() => {
          props.loginCloseHandler();
          props.registerHandler();
        }}
      >
        <CloseIcon fontSize="large" />
      </div>
    </div>
  );
}
export default Register;
