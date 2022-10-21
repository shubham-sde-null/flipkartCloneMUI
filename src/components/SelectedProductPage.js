import React from "react";
import NavBar from "./NavBar";
import SubCategories from "./SubCategories";
import "./SelectedProductPage.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BoltIcon from "@mui/icons-material/Bolt";
import mobileData from "../contexts/mobileData";
import StarIcon from "@mui/icons-material/Star";
import Accordion from "@mui/material/Accordion";
function SelectedProductPage() {
  return (
    <div>
      <NavBar />
      <SubCategories />
      <div className="mainContainer">
        {/* this is the left section */}
        <div className="containerLeft">
          <div className="leftCompartment">
            <div className="smallImages">
              <div>
                <img
                  src="https://rukminim1.flixcart.com/image/128/128/l4n2oi80/mobile/x/o/a/-original-imagfhu75eupxyft.jpeg?q=70"
                  width="39px"
                  height="49px"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://rukminim1.flixcart.com/image/128/128/l59xq4w0/mobile/k/l/x/-original-imagfz7yvktcmbrf.jpeg?q=70"
                  width="39px"
                  height="49px"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://rukminim1.flixcart.com/image/128/128/l4n2oi80/mobile/x/j/x/-original-imagfhu7szcyjbb7.jpeg?q=70"
                  width="39px"
                  height="49px"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://rukminim1.flixcart.com/image/128/128/l4n2oi80/mobile/x/o/a/-original-imagfhu75eupxyft.jpeg?q=70"
                  width="39px"
                  height="49px"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://rukminim1.flixcart.com/image/128/128/l4n2oi80/mobile/x/o/a/-original-imagfhu75eupxyft.jpeg?q=70"
                  width="39px"
                  height="49px"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://rukminim1.flixcart.com/image/128/128/l4n2oi80/mobile/x/o/a/-original-imagfhu75eupxyft.jpeg?q=70"
                  width="39px"
                  height="49px"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://rukminim1.flixcart.com/image/128/128/l4n2oi80/mobile/x/o/a/-original-imagfhu75eupxyft.jpeg?q=70"
                  width="39px"
                  height="49px"
                  alt=""
                />
              </div>
            </div>
            <div className="largeImage">
              {" "}
              <img
                src="https://rukminim1.flixcart.com/image/416/416/l4n2oi80/mobile/x/o/a/-original-imagfhu75eupxyft.jpeg?q=70"
                alt=""
              />
            </div>
          </div>
          <div className="btnContainer">
            <Button variant="contained" className="addToCart">
              <ShoppingCartIcon />
              <span>Add To Cart</span>
            </Button>
            <Button variant="contained" className="buyNow">
              <BoltIcon />
              <span>Buy Now</span>
            </Button>
          </div>
        </div>
        {/* this is the right section */}
        <div className="containerRight">
          <h3>{mobileData[0].mobileName}</h3>
          <span>
            {" "}
            <StarIcon fontSize="small" />
            {mobileData[0].rating}
          </span>
          <p>Extra ₹5555 Off</p>
          <h2>{mobileData[0].price}</h2>
          <Accordion className="accContainer">
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className="accordion">Available Offers</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="accordion">lorem10</Typography>
              <Typography className="accordion">lorem10</Typography>
              <Typography className="accordion">lorem10</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="accContainer">
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className="accordion">Product Description</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="accordion">lorem10</Typography>
              <Typography className="accordion">lorem10</Typography>
              <Typography className="accordion">lorem10</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="accContainer">
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className="accordion">
                Product Specifications
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="accordion">lorem10</Typography>
              <Typography className="accordion">lorem10</Typography>
              <Typography className="accordion">lorem10</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default SelectedProductPage;
