import React from "react";
import AppBar from "@mui/material/AppBar";
import "./Navbar.css";
import { Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { makeStyles } from "@mui/styles";
// const useStyles = makeStyles((theme) => ({
//   searchIcon: {

//   },
// }));
function NavBar() {
  //   const classes = useStyles();
  return (
    <AppBar className="navBar">
      <Toolbar className="navBarCont">
        <Box className="LogoContainer">
          <Link className="link">
            <Typography className="companyName">Flipkart</Typography>
          </Link>
          <Link className="link">
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
