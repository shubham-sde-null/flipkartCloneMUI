import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import "./Mobile.css";
import Product from "./Product";
import SubCategories from "./SubCategories";
import mobileData from "../contexts/mobileData";
import FilterListIcon from "@mui/icons-material/FilterList";
import SortIcon from "@mui/icons-material/Sort";

const filters = [
  "Relevence",
  "Popularity",
  "Price Low To High",
  "Price High To Low",
  "Newest First",
];
function Mobiles() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      {isMatch ? (
        <Box className="mobileContainerSmall">
          <div className="smallTop">
            <div className="sortArea">
              <Typography
                variant="body"
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap="5px"
              >
                <SortIcon />
                <Typography variant="body" sx={{ fontSize: "0.9rem" }}>
                  Sort
                </Typography>
              </Typography>
            </div>
            <div className="filterArea">
              {" "}
              <Typography
                variant="body"
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap="5px"
              >
                <FilterListIcon />
                <Typography variant="body" sx={{ fontSize: "0.9rem" }}>
                  Filter
                </Typography>
              </Typography>
            </div>
          </div>
          <div className="smallDown">
            <div className="rightSectionProductsSmall">
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
                  id={item.id}
                />
              ))}
            </div>
          </div>
        </Box>
      ) : (
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
                <Typography
                  className="filterName"
                  style={{ fontWeight: "bold" }}
                >
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
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          </div>
        </Box>
      )}

      {/* main container */}
    </>
  );
}

export default Mobiles;
