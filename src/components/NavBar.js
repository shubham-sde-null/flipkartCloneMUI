import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import "./Navbar.css";
import { Toolbar, Typography, Button, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HistoryIcon from "@mui/icons-material/History";
import Login from "./Login";
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
function NavBar() {
  const [login, setLogin] = useState(false);
  const [inputValue, setInputValue] = useState(" ");
  const [filteredArray, setFilteredArray] = useState(historyData);
  const loginHandler = () => {
    setLogin(!login);
  };
  function loginCloseHandler() {
    setLogin(false);
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
            Login
          </Button>
          <Button variant="text" className="navBarBtn">
            Become a Seller
          </Button>
          <Button
            variant="text"
            className="navBarBtn"
            startIcon={<ShoppingCartIcon />}
          >
            Cart
          </Button>
        </Toolbar>
      </AppBar>
      {login && <Login loginCloseHandler={loginCloseHandler} />}
    </div>
  );
}

export default NavBar;
