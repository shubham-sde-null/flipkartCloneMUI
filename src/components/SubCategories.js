import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyle = makeStyles((theme) => ({
  categorySection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "65px",
  },
  categoryData: {
    width: "100%",
    height: "45px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "150px",
    paddingRight: "150px",
  },
  categoryTitle: {
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "14px",
    color: "rgba(1, 1, 1, 0.934)",
  },
}));
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
function SubCategories() {
  const classes = useStyle();
  return (
    <Box className={classes.categorySection}>
      <Paper className={classes.categoryData}>
        {categories.map((item) => (
          <Typography className={classes.categoryTitle}>{item}</Typography>
        ))}
      </Paper>
    </Box>
  );
}

export default SubCategories;
