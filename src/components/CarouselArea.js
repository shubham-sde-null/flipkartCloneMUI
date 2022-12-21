import { Box, useTheme, useMediaQuery } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import "./CarouselArea.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
function CarouselArea() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  // const isMed = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Carousel
      className={isMatch ? "carouselAreaS" : "carouselArea"}
      indicators={isMatch ? false : false}
      NextIcon={<ArrowForwardIosIcon />}
      PrevIcon={<ArrowBackIosIcon />}
    >
      <Box className={isMatch ? "carouselCompS" : "carouselComp"}>
        <img src="https://www.linkpicture.com/q/image3_4.png" alt="image1" />
        {/* <img src="https://www.linkpicture.com/q/image1_11.png" alt="image1" /> */}
      </Box>
      <Box className={isMatch ? "carouselCompS" : "carouselComp"}>
        <img src="https://www.linkpicture.com/q/image3_4.png" alt="image2" />
        {/* <img src="https://www.linkpicture.com/q/image2.png" alt="image2" /> */}
      </Box>
      <Box className={isMatch ? "carouselCompS" : "carouselComp"}>
        <img src="https://www.linkpicture.com/q/image3_4.png" alt="image3" />
      </Box>
      <Box className={isMatch ? "carouselCompS" : "carouselComp"}>
        <img src="https://www.linkpicture.com/q/image4_5.png" alt="image4" />
      </Box>
    </Carousel>
  );
}

export default CarouselArea;
