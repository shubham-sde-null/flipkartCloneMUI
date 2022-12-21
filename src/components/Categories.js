import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import "./Categories.css";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import DropDown from "./DropDown";
function Categories() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const isMed = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
    // console.log(open);
  };
  // const handleClose = () => {
  //   setOpen(!open);
  //   console.log(open);
  // };
  const mainMenus = [
    {
      mainProduct: "Mobiles",
      company1: "Mi",
      company2: "Realme",
      company3: "Samsung",
      company4: "Infinix",
      company5: "Apple",
      company6: "Vivo",
      company7: "Oppo",
      company8: "Poco",
    },
    {
      mainProduct: "Home & Furniture",
      company1: "Bedsheets",
      company2: "Curtains",
      company3: "Pillows",
      company4: "Floor Coverings",
      company5: "Smart Doors",
      company6: "Locks",
      company7: "Tables",
      company8: "Bed",
    },
    {
      mainProduct: "Clothing",
      company1: "Men's Wear",
      company2: "Womens Wear",
      company3: "Sports Dresses",
      company4: "Winter Wear",
      company5: "Men's T-Shirts",
      company6: "Women's T-Shirts",
      company7: "Underwears",
      company8: "Formals",
    },
    {
      mainProduct: "Sports",
      company1: "Cricket",
      company2: "Footaball",
      company3: "Cycling",
      company4: "Badminton",
      company5: "Tennis",
      company6: "Indoor Sports",
      company7: "Hockey",
      company8: "Sports Gears",
    },
  ];
  return (
    <div className={isMatch ? "mainCategoryS" : "mainCategory"}>
      <Paper className={isMatch ? "cateContainerS" : "cateContainer"}>
        <Box className={isMatch ? "containerDataS" : "containerData"}>
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/f0b3c58d99158fc3.png?q=100"
            alt="Top Offers"
          />
          <p
            className={isMatch ? "categoryTitleS" : "categoryTitle"}
            onMouseEnter={handleOpen}
            // onMouseLeave={handleClose}
          >
            {isMatch ? "Offers" : "Top Offers"}
          </p>
        </Box>
        <Box className={isMatch ? "containerDataS" : "containerData"}>
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/9bb3499c8248d2ba.png?q=100"
            alt="Mobiles & Tablets"
          />
          <p
            className={isMatch ? "categoryTitleS" : "categoryTitle"}
            onMouseEnter={handleOpen}
          >
            {isMatch ? "Mobiles" : "Mobiles & Tablets"}
            {/* Mobiles & Tablets */}
          </p>
        </Box>
        <Box className={isMatch ? "containerDataS" : "containerData"}>
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/f8928124c04bc6e9.png?q=100"
            alt="Electronics"
          />
          <p className={isMatch ? "categoryTitleS" : "categoryTitle"}>
            Electronics
          </p>
        </Box>
        <Box className={isMatch ? "containerDataS" : "containerData"}>
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/0d7278abbff8ba2a.png?q=100"
            alt="TVs & Appliances"
          />
          <p className={isMatch ? "categoryTitleS" : "categoryTitle"}>
            {isMatch ? "Appliances" : "TVs & Appliances"}
          </p>
        </Box>
        <Box className={isMatch ? "containerDataS" : "containerData"}>
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/a28598a782b6b4cf.png?q=100"
            alt="Fashion"
          />
          <p className={isMatch ? "categoryTitleS" : "categoryTitle"}>
            Fashion
          </p>
        </Box>
        <Box className={isMatch ? "containerDataS" : "containerData"}>
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/a84e58e11c8b10b6.png?q=100"
            alt="Beauty"
          />
          <p className={isMatch ? "categoryTitleS" : "categoryTitle"}>Beauty</p>
        </Box>
        <Box className={isMatch ? "containerDataS" : "containerData"}>
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/47874cd4acbfaf20.png?q=100"
            alt="Home & Furniture"
          />
          <p className={isMatch ? "categoryTitleS" : "categoryTitle"}>
            {isMatch ? "Furniture" : "Home & Furniture"}
          </p>
        </Box>
        <Box className={isMatch ? "containerDataS" : "containerData"}>
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/a1140bead6bfd787.png?q=100"
            alt="FK Originals"
          />
          <p className={isMatch ? "categoryTitleS" : "categoryTitle"}>
            {" "}
            {isMatch ? "Originals" : "FK Originals"}
          </p>
        </Box>
        <Box className={isMatch ? "containerDataS" : "containerData"}>
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/705e339964226df2.png?q=100"
            alt="Flights & Hotels"
          />
          <p className={isMatch ? "categoryTitleS" : "categoryTitle"}>
            {isMatch ? "Flights" : "Flights & Hotels"}
          </p>
        </Box>
        <Box className={isMatch ? "containerDataS" : "containerData"}>
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/5b09c4d0a60ecad7.png?q=100"
            alt="Grocerry"
          />
          <p className={isMatch ? "categoryTitleS" : "categoryTitle"}>
            Grocerry
          </p>
        </Box>
      </Paper>
      {open && <DropDown mainMenus={mainMenus} />}
    </div>
  );
}

export default Categories;
