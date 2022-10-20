import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import "./DropDown.css";
function DropDown(props) {
  return (
    <Paper className="dropDown">
      {props.mainMenus.map((item) => (
        <Box>
          <Typography className="title">{item.mainProduct}</Typography>
          <Typography className="subTitle">{item.company1}</Typography>
          <Typography className="subTitle">{item.company2}</Typography>
          <Typography className="subTitle">{item.company3}</Typography>
          <Typography className="subTitle">{item.company4}</Typography>
          <Typography className="subTitle">{item.company5}</Typography>
          <Typography className="subTitle">{item.company6}</Typography>
          <Typography className="subTitle">{item.company7}</Typography>
          <Typography className="subTitle">{item.company8}</Typography>
        </Box>
      ))}
      {/* <Typography className="title" variant="h6">
        {mainMenus.mainProduct}
      </Typography>
      <Typography className="title">{mainMenus.company1}</Typography>
      <Typography className="title">{mainMenus.company2}</Typography>
      <Typography className="title">{mainMenus.company3}</Typography>
      <Typography className="title">{mainMenus.company4}</Typography>
      <Typography className="title">{mainMenus.company5}</Typography>
      <Typography className="title">{mainMenus.company6}</Typography>
      <Typography className="title">{mainMenus.company7}</Typography>
      <Typography className="title">{mainMenus.company8}</Typography> */}
    </Paper>
  );
}

export default DropDown;
