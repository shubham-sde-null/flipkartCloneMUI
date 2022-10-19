import React from "react";
import Paper from "@mui/material/Paper";
import "./Categories.css";
import { Box } from "@mui/material";
import "./Discount.css";
function Discount() {
  return (
    <Paper className="discountContainer" elevation={0}>
      <Box className="discountData">
        <img
          src="https://www.linkpicture.com/q/discount_1.png"
          alt="Bank Offers"
        />
      </Box>
    </Paper>
  );
}

export default Discount;
