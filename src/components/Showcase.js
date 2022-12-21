import { Grid, useTheme, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles(() => ({
  mainCont: {
    marginTop: "7px",
    marginLeft: "10px",
    marginRight: "10px",
    border: "2px solid red",
  },
  mainContS: {
    width: "auto",
    marginTop: "8px",
    // marginLeft: "10px",
    // marginRight: "10px",
    // border: "2px solid blue",
    // background: "red",
    boxSizing: "border-box",
  },
  gridCont: {},
  gridContS: {
    // border: "3px solid yellow",
    // marginTop: "50px",
    // paddingTop: "15px",
    // marginTop: "90px",
  },
}));
function Showcase({ image1, image2, image3 }) {
  const classes = useStyles();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  // const isMed = useMediaQuery(theme.breakpoints.down("md"));
  return (
    // <div style={{ border: "1px solid red" }}>
    //   <img
    //     src="https://i.postimg.cc/C1F1cKzL/showcase1.png"
    //     alt=""
    //     width="150px"
    //     height="150px"
    //   />
    // </div>
    // {
    <div className={isMatch ? `${classes.mainContS}` : `${classes.mainCont}`}>
      <Grid
        container
        spacing={isMatch ? 1 : 2}
        justifyContent="center"
        alignItems="center"
        className={isMatch ? `${classes.gridContS}` : `${classes.gridCont}`}
      >
        <Grid item lg={4}>
          <Box>
            <img
              width={isMatch ? "100%" : ""}
              height={isMatch ? "95px" : ""}
              src={image1}
              alt="showcase1"
            />
          </Box>
        </Grid>
        <Grid item lg={4}>
          <Box>
            <img
              width={isMatch ? "100%" : ""}
              height={isMatch ? "95px" : ""}
              src={image2}
              alt="showcase2"
            />
          </Box>
        </Grid>
        <Grid item lg={4} sx={{ display: isMatch ? "none" : "" }}>
          <Box>
            <img
              width={isMatch ? "100%" : ""}
              height={isMatch ? "95px" : ""}
              src={image3}
              alt="showcase3"
            />
          </Box>
        </Grid>
        <Grid item lg={4} sx={{ display: isMatch ? "none" : "none" }}>
          <Box>
            <img
              width={isMatch ? "100%" : ""}
              height={isMatch ? "95px" : ""}
              src={image3}
              alt="showcase3"
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Showcase;
