import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box, Grid, useTheme, useMediaQuery } from "@mui/material";
// import { makeStyles } from "@mui/styles";
import "./ContainerWithCarousel.css";
// const useStyles = makeStyles(() => ({

// }));
function ContainerWithCarousel() {
  // const classes = useStyles();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const items1 = [
    {
      src: "https://i.postimg.cc/bYCNZ958/carousel1.png",
      product: "Bottles",
      price: "From ₹199",
      more: "Cello & More",
    },
    {
      src: "https://i.postimg.cc/Y9ZR8qfb/carousel2.png",
      product: isMatch ? "Accessories" : "Mouse And Accessories",
      price: "From ₹150",
      more: isMatch ? "More" : "More Computer Products",
    },
    {
      src: "https://i.postimg.cc/J0XqFVpm/carousel3.png",
      product: "Tiffins",
      price: "From ₹250",
      more: "Milton & More",
    },
    {
      src: "https://i.postimg.cc/8CVnwLx0/carousel4.png",
      product: "Cards Keeper",
      price: "From ₹100",
      more: isMatch ? "More" : "More Daily Things",
    },
  ];
  const items2 = [
    {
      src: "https://i.postimg.cc/fbTxfKMC/carousel8.png",
      product: "Apple iPads",
      price: "Shop Now",
      more: isMatch ? "Apple & More" : "Liquid Retina Display",
    },

    {
      src: "https://i.postimg.cc/9XZYV1F8/carousel10.png",
      product: "Puzzles",
      price: "From ₹50",
      more: isMatch ? "Puzzles & More" : "More in Puzzles ",
    },
    {
      src: "https://i.postimg.cc/Bvc7zX0Q/carousel6.png",
      product: "Stark Insulated",
      price: "From ₹399",
      more: isMatch ? "Insulated & More" : "More Insulated Bottles",
    },
    {
      src: "https://i.postimg.cc/15pgfYLT/carouseltoy.png",
      product: "Toys For Kids",
      price: "From ₹150",
      more: "More for childs",
    },
  ];
  return (
    <Box>
      <Grid
        container
        spacing={0}
        className={isMatch ? "mainGridS" : "mainGrid"}
      >
        {/* first grid item section  */}
        <Grid
          item
          lg={2}
          className={isMatch ? "firstGrid" : ""}
          order={isMatch ? "1" : "1"}
          // sx={{ border: "2px solid red", width: "100px", height: "100px" }}
        >
          <Box
            marginLeft={isMatch ? 0 : 1}
            className={isMatch ? "imageHolder" : ""}
          >
            <img
              // width={isMatch ? "50%" : ""}
              src="https://i.postimg.cc/qvjhcDp7/sideAdv1.png"
              alt="sideadv1"
            />
          </Box>
        </Grid>
        {/* second grid section */}
        <Grid
          item
          lg={8}
          // height="354px"
          className={isMatch ? "secondGrid" : "secondGridL"}
          order={isMatch ? "3" : "2"}
        >
          <Box className={isMatch ? "secondGridBox" : "secondGridBoxL"}>
            <Carousel
              indicators={false}
              className={isMatch ? "carouselHolder" : "carouselHolderL"}
            >
              <Box className={isMatch ? "carouselBox1" : "carouselBox1L"}>
                {items1.map((item) => (
                  <Box
                    className={
                      isMatch ? "carouselBox1Child" : "carouselBox1ChildL"
                    }
                  >
                    <img src={item.src} alt="" />
                    <p
                      className={
                        isMatch ? "carouselBox1Product" : "carouselBox1ProductL"
                      }
                    >
                      {item.product}
                    </p>
                    <p
                      className={
                        isMatch ? "carouselBox1Price" : "carouselBox1PriceL"
                      }
                    >
                      {item.price}
                    </p>
                    <p
                      className={
                        isMatch ? "carouselBox1More" : "carouselBox1MoreL"
                      }
                    >
                      {item.more}
                    </p>
                  </Box>
                ))}
              </Box>
              <Box
                className={isMatch ? "carouselBox2" : "carouselBox2L"}
                // display="flex"
                // justifyContent="space-between"
                // alignItems="center"
              >
                {items2.map((item) => (
                  <Box
                    className={
                      isMatch ? "carouselBox2Child" : "carouselBox2ChildL"
                    }
                    // display="flex"
                    // justifyContent="center"
                    // flexDirection="column"
                    // alignItems="center"
                    // style={{
                    //   //   paddingBottom: "10px",
                    //   marginTop: "30px",
                    //   //   border: "1px solid red",
                    //   textAlign: "center",
                    // }}
                  >
                    <img src={item.src} alt="" />
                    <p
                      className={
                        isMatch ? "carouselBox2Product" : "carouselBox2ProductL"
                      }
                      // style={{
                      //   justifySelf: "flex-end",
                      //   paddingTop: "10px",
                      //   fontWeight: "bold",
                      // }}
                    >
                      {item.product}
                    </p>
                    <p
                      className={
                        isMatch ? "carouselBox2Price" : "carouselBox2PriceL"
                      }
                      // style={{
                      //   justifySelf: "flex-end",
                      //   color: "#388e3c",
                      //   paddingTop: "5px",
                      // }}
                    >
                      {item.price}
                    </p>
                    <p
                      className={
                        isMatch ? "carouselBox2More" : "carouselBox2MoreL"
                      }
                      // style={{
                      //   justifySelf: "flex-end",
                      //   color: "#717171",
                      //   paddingTop: "5px",
                      // }}
                    >
                      {item.more}
                    </p>
                  </Box>
                ))}
              </Box>
            </Carousel>
          </Box>
        </Grid>
        {/* third grid section  */}
        <Grid
          item
          lg={2}
          className={isMatch ? "thirdGrid" : ""}
          order={isMatch ? "2" : "3"}
          // sx={{ border: "2px solid red", width: "100px", height: "100px" }}
        >
          <Box
            marginLeft={isMatch ? 0 : 1}
            className={isMatch ? "imageHolder" : ""}
          >
            <img
              // width={isMatch ? "50%" : ""}
              src="https://i.postimg.cc/3xd76tgN/sideAdv2.png"
              alt="sideadv2"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ContainerWithCarousel;
