import React from "react";
import { Box, Typography } from "@mui/material";
import "./Mobile.css";
import Product from "./Product";
import SubCategories from "./SubCategories";
import mobileData from "../contexts/mobileData";

const filters = [
  "Relevence",
  "Popularity",
  "Price Low To High",
  "Price High To Low",
  "Newest First",
];
function Mobiles() {
  return (
    <>
      {/* main container */}
      <Box className="mobileContainer">
        {/* <Box className="categorySection">
          <Paper className="categoryData">
            {categories.map((item) => (
              <Typography className="categoryTitle">{item}</Typography>
            ))}
          </Paper>
        </Box> */}
        <SubCategories />
        <div container className="mobileGrid">
          <div className="leftSection">Filters</div>
          <div className="rightSection">
            <div className="rightSectionFilters">
              <Typography className="filterName" style={{ fontWeight: "bold" }}>
                Sort By
              </Typography>
              {/* <Divider /> */}
              {filters.map((item) => (
                <>
                  <Typography className="filterName" variant="body">
                    {item}
                  </Typography>
                </>
              ))}
            </div>
            <div className="rightSectionProducts">
              {mobileData.map((item) => (
                <Product
                  mobileName={item.mobileName}
                  rating={item.rating}
                  spec1={item.spec1}
                  spec2={item.spec2}
                  spec3={item.spec3}
                  spec4={item.spec4}
                  spec5={item.spec5}
                  spec6={item.spec6}
                  price={item.price}
                  delivery={item.delivery}
                  src={item.src}
                  width={item.width}
                  height={item.height}
                />
              ))}
            </div>
          </div>
        </div>
      </Box>
    </>
  );
}

export default Mobiles;
