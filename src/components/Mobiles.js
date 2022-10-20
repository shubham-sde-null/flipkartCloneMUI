import React from "react";
import { Box, Divider, Grid, Paper, Typography } from "@mui/material";
import "./Mobile.css";
import Product from "./Product";
const mobileData = [
  {
    mobileName: "Smasung Galaxy F13(Waterfall Blue 64GB)",
    rating: "4.4",
    spec1: "4 GB RAM | 64 GB ROM | Expandable Upto 1TB",
    spec2: "16.76(6.6 inch) Full HD+Display",
    spec3: "50MP + 5MP + 2MP | 8MP Front Camera",
    spec4: "6000 mAh Lithium Ion Battery",
    spec5: "Exynos 850 Processor",
    spec6: "1 Year Warranty Provided",
    price: "₹9,499",
    delivery: "Free Delivery",
    src: "https://rukminim1.flixcart.com/image/312/312/l4n2oi80/mobile/x/o/a/-original-imagfhu75eupxyft.jpeg?q=70",
    width: "162px",
    height: "200px",
  },
  {
    mobileName: "Realme 9i 5G (Metallica Gold 64GB)",
    rating: "4.5",
    spec1: "4 GB RAM | 64 GB ROM | Expandable Upto 1TB",
    spec2: "16.76(6.6 inch) Full HD+Display",
    spec3: "50MP + 2MP + 2MP | 8MP Front Camera",
    spec4: "5000 mAh Lithium Ion Battery",
    spec5: "Mediatek Dimensity 810 5G",
    spec6: "1 Year Warranty Provided",
    price: "₹12,999",
    delivery: "Free Delivery",
    src: "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/o/b/a/-original-imaghbequzj25wy2.jpeg?q=70",
    width: "200px",
    height: "200px",
  },
  {
    mobileName: "Redmi 10(Caribbean Green, 64 GB)",
    rating: "4.3",
    spec1: "4 GB RAM | 64 GB ROM | Expandable Upto 1TB",
    spec2: "17.02(6.7 inch) HD+Display",
    spec3: "50MP + 2MP | 5MP Front Camera",
    spec4: "6000 mAh Lithium Polymer Battery",
    spec5: "Snapdragon 680",
    spec6: "1 Year Warranty Provided",
    price: "₹8,999",
    delivery: "Free Delivery",
    src: "https://rukminim1.flixcart.com/image/312/312/l0tweq80/mobile/d/d/s/-original-imagcgtgyqebxqhx.jpeg?q=70",
    width: "92px",
    height: "200px",
  },
  {
    mobileName: "Poco X3 Pro(Steel Blu, 128GB)",
    rating: "4.4",
    spec1: "6 GB RAM | 128 GB ROM | Expandable Upto 1TB",
    spec2: "16.94(6.67 inch) Full HD+Display",
    spec3: "48MP + 8MP + 2MP+2MP | 20MP Front Camera",
    spec4: "5160 mAh Lithium Ion Polymer Battery",
    spec5: "Snapdragon 860",
    spec6: "1 Year Warranty Provided",
    price: "₹19,999",
    delivery: "Free Delivery",
    src: "https://rukminim1.flixcart.com/image/312/312/kr9jafk0/mobile/m/m/y/x3-pro-mzb08t9in-poco-original-imag52znesm3hemf.jpeg?q=70",
    width: "94px",
    height: "200px",
  },
];
const categories = [
  "Electronics",
  "TVs & Appliances",
  "Men",
  "Women",
  "Baby & Kids",
  "Home & Furniture",
  "Sports,Books & More",
  "Flights",
  "Offer Zone",
];
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
        <Box className="categorySection">
          <Paper className="categoryData">
            {categories.map((item) => (
              <Typography className="categoryTitle">{item}</Typography>
            ))}
          </Paper>
        </Box>
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
