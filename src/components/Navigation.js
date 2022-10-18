import React from "react";
import AppBar from "@mui/material/AppBar";
import { Toolbar, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import "./Navigation.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const useStyles = makeStyles((theme) => ({
  // navbarAllign: {
  //   display: "flex",
  //   justifyContent: "space-between",
  //   marginLeft: "120px",
  //   marginRight: "120px",
  // },
}));
function Navigation() {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.navBar}>
      <Toolbar className="navbarAllign">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Link to="/home" style={{ textDecoration: "none" }}>
            <Typography className="companyName" variant="h6">
              Flipkart
            </Typography>
          </Link>

          <Link to="/plus" style={{ textDecoration: "none" }}>
            <Typography variant="body" className="plus">
              Explore
              <span
                style={{
                  // display: "flex",
                  // justifyContent: "space-between",
                  // alignItems: "cente",
                  color: "#ffe500",
                  fontWeight: 500,
                  fontSize: "13px",
                  marginLeft: "5px",
                  marginRight: "3px",
                  // border: "1px solid white",
                  // width: "50px",
                }}
              >
                {" "}
                <div>Plus</div>
              </span>
              <img
                width="12px"
                height="12px"
                // marginLeft="5px"
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png"
                alt=""
              />
            </Typography>
          </Link>
        </Box>
        <Box className="searchIcon">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="searchInput"
          />{" "}
          <SearchIcon color="primary" fontSize="medium" cursor="pointer" />
        </Box>
        <Box>
          {/* <button className={classes.loginBtn}>Login</button> */}
          <Button variant="contained" className="loginBtn">
            Login
          </Button>
        </Box>
        <Box>
          <Button className="becomeSeller">Become a Seller</Button>
        </Box>
        <Box>
          <Button className="more">More</Button>
        </Box>
        <Box>
          <Button
            className="cartBtn"
            variant="outlined"
            startIcon={<ShoppingCartIcon />}
          >
            Cart
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;
