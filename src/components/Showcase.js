import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
function Showcase({ image1, image2, image3 }) {
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
    <div style={{ marginTop: "7px", marginLeft: "10px", marginRight: "10px" }}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item lg={4}>
          <Box>
            <img src={image1} alt="showcase1" />
          </Box>
        </Grid>
        <Grid item lg={4}>
          <Box>
            <img src={image2} alt="showcase2" />
          </Box>
        </Grid>
        <Grid item lg={4}>
          <Box>
            <img src={image3} alt="showcase3" />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Showcase;
