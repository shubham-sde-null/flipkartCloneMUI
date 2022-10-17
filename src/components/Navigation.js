import React from "react";
import AppBar from "@mui/material/AppBar";
import { Toolbar, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import "./Navigation.css";
import SearchIcon from "@mui/icons-material/Search";
const useStyles = makeStyles((theme) => ({
  Heading: {
    fontWeight: "bold",
    color: "white",
    fontStyle: "italic",
    cursor: "pointer",
  },
  Plus: {
    fontSize: "12px",
    fontWeight: 500,
    fontStyle: "italic",
    textDecoration: "none",
    color: "white",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  search: {
    width: "550px",
    height: "40px",
    borderRadius: "1.5px",
    outline: "none",
    border: "none",
  },
  loginBtn: {
    backgroundColor: "white",
    color: "#1976d2",
  },
  navbarAllign: {
    diaply: "flex",
    justifyContent: "space-between",
    marginLeft: "120px",
    marginRight: "120px",
  },
}));
function Navigation() {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.navBar}>
      <Toolbar className={classes.navbarAllign}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Link to="/home" style={{ textDecoration: "none" }}>
            <Typography className={classes.Heading} variant="h6">
              Temp
            </Typography>
          </Link>

          <Link to="/plus" style={{ textDecoration: "none" }}>
            <Typography variant="body" className={classes.Plus}>
              Explore <span style={{ color: "yellow" }}>Plus</span>
            </Typography>
          </Link>
        </Box>
        <Box className="searchIcon">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className={classes.search}
            id="searchPlaceholder"
          />{" "}
          <SearchIcon color="primary" fontSize="medium" />
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
          <button>More</button>
        </Box>
        <Box>
          <button>Cart</button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;
