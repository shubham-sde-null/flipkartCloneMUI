import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import "./Navbar.css";
import { Toolbar, Typography, Button, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HistoryIcon from "@mui/icons-material/History";

function NavBar() {
  const defaultSuggest = [
    "mobiles",
    "laptops",
    "poco f1",
    "tshirts",
    "keyborard",
  ];
  const [autoSuggest, setAutoSuggest] = useState(false);
  const openAutoSuggest = () => {
    setAutoSuggest(!autoSuggest);
  };

  return (
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
              {defaultSuggest.map((item) => (
                <Box className="autoSuggestContainer">
                  <Typography className="searchResult">
                    {" "}
                    <HistoryIcon fontSize="small" />
                    <span> {item}</span>
                  </Typography>
                </Box>
              ))}
            </Paper>
          )}
        </Box>
        <Button variant="contained" id="loginBtn">
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
  );
}

export default NavBar;
