// import { connect } from "react-redux";

import React, { useState, useEffect, useMemo } from "react";
import AppBar from "@mui/material/AppBar";
import DrawerComp from "./DrawerComponent";
// import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import GetAppIcon from "@mui/icons-material/GetApp";
import { categories } from "../contexts/drawerData";
import "./Navbar.css";
import {
  Toolbar,
  Typography,
  Button,
  Paper,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HistoryIcon from "@mui/icons-material/History";
import Login from "./Login";
import Register from "./Register";
import Badge from "@mui/material/Badge";
import { makeStyles } from "@mui/styles";
import { listStyle } from "./../contexts/listStyles";
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
const useStyles = makeStyles((theme) => ({
  Logo: {
    // border: "1px solid red",
    // fontSize: "25px",
    // width: "100%",
    // height: "100%",
    // [theme.breakpoints.down("sm")]: {
    //   color: "red",
    // },
  },
  Logos: {
    fontSize: "18px",
    // display: "block",
    textAlign: "center",
    // border: "1px solid red",
    // width: "100%",
    // margin: "auto",
    // marginRight: "auto",
    // marginRight: "20px",

    // -webkit-tap-highlight-color: transparent;
  },
  Login: {
    fontSize: "30px",
    // border: "1px solid red",
  },
  Logins: {
    fontSize: "15px",
  },
  GridContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // border: "1px solid yellow",
    height: "50px",
  },
  GridUtility: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    // border: "1px solid hotpink",
  },
  searchBar: {
    width: "100%",
    height: "60%",
    borderRadius: "3px",
    outline: "none",
    border: "none",
    paddingLeft: "10px",
  },
  searchBarCont: {
    display: "flex",
    width: "80%",
    alignItems: "center",
    height: "100%",
  },
  searchBarContH: {
    visibility: "hidden",
  },
  gridSearch: {
    // border: "1px solid black",
    height: "100%",
  },
  smallScreen: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-around",
    // gap: "2px",
    // border: "1px solid orange",
    width: "100%",
    // justifyContent: "space-between",
    // alignItems: "center",
    // border: "1px solid black",
    // boxSizing: "border-box",
    // padding: "0px",
    // margin: "0px",
  },
  featuresSmallScreen: {
    display: "flex",
    justifyContent: "space-between",
    // border: "2px solid yellow",
    width: "100%",
    // gap: "15px",
  },
  searchBarSmallScreen: {
    width: "90%",
    // border: "1px solid black",
    margin: "auto",
    // marginBottom: "1px",
    height: "28px",
  },
  leftPart: {
    justifySelf: "flex-start",
    display: "flex",
    // border: "2px solid red",
    justifyContent: "center",
    alignItems: "center",
    gap: "15px",
    padding: "0px 5px",
  },
  rightPart: {
    display: "flex",
    // border: "2px solid black",
    justifyContent: "center",
    alignItems: "center",
    gap: "15px",
    padding: "0px 5px",
  },

  autoSuggestHolder: {
    position: "absolute",
    top: "48px",
    left: "367px",
    width: "49.3%",
    minHeight: "30px",
    height: "fit-content",
    border: "1px solid lightgray",
    borderRadius: "5px",
    color: "black",
    backgroundColor: "white",
    // paddingLeft: "7px",
  },
}));
function NavBar({ count }) {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const isMed = useMediaQuery(theme.breakpoints.down("md"));
  const classes = useStyles();
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
      <AppBar className={isMatch ? "navBarS" : "navBar"}>
        <Toolbar
          // sx={{ padding: "0px" }}
          className={isMatch ? "navBarContS" : "navBarCont"}
        >
          {isMatch ? (
            <div
              className={classes.smallScreen}
              // style={{ border: "1px solid green" }}
            >
              <div className={classes.featuresSmallScreen}>
                <div className={classes.leftPart}>
                  <DrawerComp categories={categories} />
                  <Link style={listStyle} to="/">
                    <Typography
                      className={`${
                        isMatch ? `${classes.Logos}` : `${classes.Logo}`
                      }`}
                    >
                      Flipkart
                    </Typography>
                  </Link>
                </div>
                <div className={classes.rightPart}>
                  <IconButton>
                    <GetAppIcon fontSize="small" sx={{ color: "white" }} />
                    {/* <LoginRoundedIcon sx={{ color: "white" }} /> */}
                  </IconButton>
                  <IconButton>
                    {/* <ShoppingCartIcon
                      fontSize="small"
                      sx={{ color: "white" }}
                    /> */}
                    {localStorage.getItem("userInfo") ? (
                      <Badge badgeContent={count} color="error">
                        <ShoppingCartIcon
                          fontSize="small"
                          sx={{ color: "white" }}
                        />
                      </Badge>
                    ) : (
                      <Badge badgeContent={0} color="error">
                        <ShoppingCartIcon
                          fontSize="small"
                          sx={{ color: "white" }}
                        />
                      </Badge>
                    )}
                    {/* <LoginRoundedIcon sx={{ color: "white" }} /> */}
                  </IconButton>
                  <Typography variant="body" sx={{ fontWeight: "100" }}>
                    Login
                  </Typography>
                </div>
              </div>
              <div className={classes.searchBarSmallScreen}>
                {/* start of the small search bar  */}
                <Box className="searchBarSmall">
                  <input
                    type="text"
                    placeholder="Search for products, brands and more"
                    className="searchInputSmall"
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
                      // fontSize="small"
                      cursor="pointer"
                      id="searchIconSmall"
                    />
                  </div>
                  {/* here I am implementing the search bar which will be only show when user is typing something into the search bar */}
                  {autoSuggest && (
                    <Paper id="autoSuggestSmall">
                      {filteredArray.map((item) => (
                        <Box className="autoSuggestContainerSmall">
                          <Link to={`/${item}`} className="linkStylesSmall">
                            <Typography
                              className="searchResultSmall"
                              // onClick={console.log("hello")
                              // }
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
                {/* end of the small search bar */}
              </div>
            </div>
          ) : (
            <div className="largeSize">
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
                {localStorage.getItem("userInfo") ? (
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "#2874f0" }}
                  >
                    Logout
                  </Link>
                ) : (
                  "Login"
                )}
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
                <Link
                  to={localStorage.getItem("userInfo") ? "/cart" : "/"}
                  style={{ textDecoration: "none", color: "white" }}
                  onClick={() => {
                    if (!localStorage.getItem("userInfo")) {
                      window.alert("please login first");
                    }
                  }}
                >
                  {" "}
                  <span style={{ paddingLeft: "10px" }}>Cart</span>
                </Link>
              </Button>
            </div>
          )}
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
