// import { connect } from "react-redux";

import React, { useState, useEffect, useMemo } from "react";
import AppBar from "@mui/material/AppBar";
import "./Navbar.css";
import { Toolbar, Typography, Button, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HistoryIcon from "@mui/icons-material/History";
import Login from "./Login";
import Register from "./Register";
import Badge from "@mui/material/Badge";
const historyData = ["mobiles", "laptops", "poco f1", "tshirts", "keyborard"];

const defaultSuggest = [
  "mobiles",
  "monitors",
  "mac book",
  "laptop accessories",
  "laptops",
  "ram for laptops",
  "xiaomi",
  "poco f1",
  "tshirts",
  "tshirts for men",
  "keyborard",
];
function NavBar({ count }) {
  const [register, setRegister] = useState(false);
  // const count = useSelector((state) => state.count);
  // const list = useSelector((oldCartItemList) => oldCartItemList);
  // console.log("the value of count is", count);
  // const res = useSelector((dataReceived) => dataReceived);
  // const count = res.totalCartItems.count;

  // console.log("this is props", props);
  // console.log("this is res", res);
  const [login, setLogin] = useState(true);
  //here I am using the useMemo hook to check if there is user in the local storage, if there is some user then it will memorize it and it will avoid the re-render of the component, whereas in useEffect hook my localstorage was getting checked at every step and showing the login page again and again
  useMemo(() => {
    if (localStorage.getItem("userInfo")) {
      setLogin(false);
      // console.log(localStorage.getItem("userInfo"));
    }
    // eslint-disable-next-line
  }, []);
  // useEffect(() => {
  //   if (localStorage.getItem("userInfo")) {
  //     setLogin(false);
  //     // console.log(localStorage.getItem("userInfo"));
  //   }
  //   // eslint-disable-next-line
  // }, []);
  const [inputValue, setInputValue] = useState(" ");
  const [filteredArray, setFilteredArray] = useState(historyData);
  const registerHandler = () => {
    setRegister(!register);
    console.log("register is", register);
  };
  const loginHandler = () => {
    localStorage.removeItem("userInfo");
    setLogin(!login);
  };
  function loginCloseHandler() {
    setLogin(!login);
  }
  const inputValueHandler = (e) => {
    setInputValue(e.target.value);
  };

  // console.log("the login is", login);
  useEffect(() => {
    setFilteredArray((_) => {
      const newArray = defaultSuggest.filter((item) =>
        item.includes(inputValue)
      );
      return newArray;
    });
  }, [inputValue]);
  const [autoSuggest, setAutoSuggest] = useState(false);
  const openAutoSuggest = () => {
    setAutoSuggest(!autoSuggest);
    setFilteredArray(historyData);
  };

  return (
    <div>
      <AppBar className="navBar">
        <Toolbar className="navBarCont">
          <Box className="LogoContainer">
            <Link className="link" to="/">
              <Typography className="companyName">Flipkart</Typography>
            </Link>
            <Link className="link" to="/plus">
              <Typography className="plus">
                Explore <span>Plus</span>
              </Typography>
            </Link>
          </Box>
          <Box className="searchBar">
            <input
              type="text"
              placeholder="Search for products, brands and more"
              className="searchInput"
              onChange={inputValueHandler}
              onClick={openAutoSuggest}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "50px",
                height: "100%",
                alignItems: "center",
              }}
            >
              {" "}
              <SearchIcon
                color="primary"
                //   fontSize="medium"
                cursor="pointer"
                id="searchIcon"
              />
            </div>
            {/* here I am implementing the search bar which will be only show when user is typing something into the search bar */}
            {autoSuggest && (
              <Paper id="autoSuggest">
                {filteredArray.map((item) => (
                  <Box className="autoSuggestContainer">
                    <Link to={`/${item}`} className="linkStyles">
                      <Typography
                        className="searchResult"
                        onClick={console.log("hello")}
                      >
                        {" "}
                        <HistoryIcon fontSize="small" />
                        <span> {item}</span>
                      </Typography>
                    </Link>
                  </Box>
                ))}
              </Paper>
            )}
          </Box>
          <Button variant="contained" id="loginBtn" onClick={loginHandler}>
            {/* Login */}
            {localStorage.getItem("userInfo") ? "Logout" : "Login"}
            {/* {login === false && cross === true ? "Login" : "Logout"} */}
          </Button>
          <Button variant="text" className="navBarBtn">
            Become a Seller
          </Button>
          <Button variant="text" className="navBarBtn">
            {localStorage.getItem("userInfo") ? (
              <Badge badgeContent={count} color="error">
                <ShoppingCartIcon />
              </Badge>
            ) : (
              <Badge badgeContent={0} color="error">
                <ShoppingCartIcon />
              </Badge>
            )}
            {/* <Badge badgeContent={count} color="error">
              <ShoppingCartIcon />
            </Badge> */}
            {/* Cart */}
            <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
              {" "}
              <span style={{ paddingLeft: "10px" }}>Cart</span>
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
      {login && (
        <Login
          loginCloseHandler={loginCloseHandler}
          registerHandler={registerHandler}
        />
      )}
      {register && (
        <Register
          loginCloseHandler={loginCloseHandler}
          registerHandler={registerHandler}
        />
      )}
    </div>
  );
}
// const mapStateToProps = (state) => ({
//   cartNumber: state.count,
// });

// const mapDispatchToProps = (dispatch) => ({});
// export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
export default NavBar;
