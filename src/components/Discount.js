import React from "react";
import Paper from "@mui/material/Paper";
import "./Categories.css";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import "./Discount.css";
function Discount() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const isMed = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Paper
      className={isMatch ? "discountContainerS" : "discountContainer"}
      elevation={0}
    >
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
