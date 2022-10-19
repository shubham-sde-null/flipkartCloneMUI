import React from "react";
import Paper from "@mui/material/Paper";
import "./Categories.css";
import { Box } from "@mui/material";
function Categories() {
  return (
    <Paper className="cateContainer">
      <Box className="containerData">
        <img
          src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/f0b3c58d99158fc3.png?q=100"
          alt="Top Offers"
        />
        <p className="categoryTitle">Top Offers</p>
      </Box>
      <Box className="containerData">
        <img
          src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/9bb3499c8248d2ba.png?q=100"
          alt="Mobiles & Tablets"
        />
        <p className="categoryTitle">Mobiles & Tablets</p>
      </Box>
      <Box className="containerData">
        <img
          src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/f8928124c04bc6e9.png?q=100"
          alt="Electronics"
        />
        <p className="categoryTitle">Electronics</p>
      </Box>
      <Box className="containerData">
        <img
          src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/0d7278abbff8ba2a.png?q=100"
          alt="TVs & Appliances"
        />
        <p className="categoryTitle">TVs & Appliances</p>
      </Box>
      <Box className="containerData">
        <img
          src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/a28598a782b6b4cf.png?q=100"
          alt="Fashion"
        />
        <p className="categoryTitle">Fashion</p>
      </Box>
      <Box className="containerData">
        <img
          src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/a84e58e11c8b10b6.png?q=100"
          alt="Beauty"
        />
        <p className="categoryTitle">Beauty</p>
      </Box>
      <Box className="containerData">
        <img
          src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/47874cd4acbfaf20.png?q=100"
          alt="Home & Furniture"
        />
        <p className="categoryTitle">Home & Furniture</p>
      </Box>
      <Box className="containerData">
        <img
          src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/a1140bead6bfd787.png?q=100"
          alt="FK Originals"
        />
        <p className="categoryTitle">FK Originals</p>
      </Box>
      <Box className="containerData">
        <img
          src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/705e339964226df2.png?q=100"
          alt="Flights & Hotels"
        />
        <p className="categoryTitle">Flights & Hotels</p>
      </Box>
      <Box className="containerData">
        <img
          src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/5b09c4d0a60ecad7.png?q=100"
          alt="Grocerry"
        />
        <p className="categoryTitle">Grocerry</p>
      </Box>
    </Paper>
  );
}

export default Categories;
