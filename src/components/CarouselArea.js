import { Box } from "@mui/system";
import React from "react";
import Carousel from "react-material-ui-carousel";
import "./CarouselArea.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
function CarouselArea() {
  return (
    <Carousel
      className="carouselArea"
      indicators={false}
      NextIcon={<ArrowForwardIosIcon />}
      PrevIcon={<ArrowBackIosIcon />}
    >
      <Box>
        <img src="https://www.linkpicture.com/q/image1_11.png" alt="image1" />
      </Box>
      <Box>
        <img src="https://www.linkpicture.com/q/image2.png" alt="image2" />
      </Box>
      <Box>
        <img src="https://www.linkpicture.com/q/image3_4.png" alt="image3" />
      </Box>
      <Box>
        <img src="https://www.linkpicture.com/q/image4_5.png" alt="image4" />
      </Box>
    </Carousel>
  );
}

export default CarouselArea;
