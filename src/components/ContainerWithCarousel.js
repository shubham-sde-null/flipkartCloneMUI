import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box, Grid } from "@mui/material";
function ContainerWithCarousel() {
  const items1 = [
    {
      src: "https://i.postimg.cc/bYCNZ958/carousel1.png",
      product: "Bottles",
      price: "From ₹199",
      more: "Cello & More",
    },
    {
      src: "https://i.postimg.cc/Y9ZR8qfb/carousel2.png",
      product: "Mouse And Accessories",
      price: "From ₹150",
      more: "More Computer Products",
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
      more: "More Dailiy Things",
    },
  ];
  const items2 = [
    {
      src: "https://i.postimg.cc/fbTxfKMC/carousel8.png",
      product: "Apple iPads",
      price: "Shop Now",
      more: "Liquid Retina Display",
    },

    {
      src: "https://i.postimg.cc/9XZYV1F8/carousel10.png",
      product: "Puzzles",
      price: "From ₹50",
      more: "More in Puzzles",
    },
    {
      src: "https://i.postimg.cc/Bvc7zX0Q/carousel6.png",
      product: "Stark Insulated",
      price: "From ₹399",
      more: "More Inslated Bottles",
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
      <Grid container spacing={0}>
        {/* first grid item section  */}
        <Grid item lg={2}>
          <Box marginLeft={1}>
            <img
              src="https://i.postimg.cc/qvjhcDp7/sideAdv1.png"
              alt="sideadv1"
            />
          </Box>
        </Grid>
        {/* second grid section */}
        <Grid item lg={8} height="354px">
          <Box
            style={{
              backgroundColor: "white",
              height: "100%",
              paddingLeft: "5px",
              paddingRight: "5px",
            }}
          >
            <Carousel
              indicators={false}
              style={{
                border: "2px solid yellow",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                {items1.map((item) => (
                  <Box
                    display="flex"
                    justifyContent="center"
                    flexDirection="column"
                    alignItems="center"
                    style={{
                      paddingBottom: "10px",
                      marginTop: "30px",
                      //   border: "2px solid pink",
                      height: "100%",
                      textAlign: "center",
                    }}
                  >
                    <img height="200px" src={item.src} alt="" />
                    <p
                      style={{
                        justifySelf: "flex-end",
                        paddingTop: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      {item.product}
                    </p>
                    <p
                      style={{
                        justifySelf: "flex-end",
                        color: "#388e3c",
                        paddingTop: "5px",
                      }}
                    >
                      {item.price}
                    </p>
                    <p
                      style={{
                        justifySelf: "flex-end",
                        color: "#717171",
                        paddingTop: "5px",
                      }}
                    >
                      {item.more}
                    </p>
                  </Box>
                ))}
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                {items2.map((item) => (
                  <Box
                    display="flex"
                    justifyContent="center"
                    flexDirection="column"
                    alignItems="center"
                    style={{
                      //   paddingBottom: "10px",
                      marginTop: "30px",
                      //   border: "1px solid red",
                    }}
                  >
                    <img src={item.src} alt="" />
                    <p
                      style={{
                        justifySelf: "flex-end",
                        paddingTop: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      {item.product}
                    </p>
                    <p
                      style={{
                        justifySelf: "flex-end",
                        color: "#388e3c",
                        paddingTop: "5px",
                      }}
                    >
                      {item.price}
                    </p>
                    <p
                      style={{
                        justifySelf: "flex-end",
                        color: "#717171",
                        paddingTop: "5px",
                      }}
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
        <Grid item lg={2}>
          <Box marginLeft={2}>
            <img
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
