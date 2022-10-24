// import { connect } from "react-redux";
import { addToCart } from "../redux/action";
// import { cartList } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
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
import { Link } from "react-router-dom";
function SelectedProductPage() {
  const NumberOfItems = useSelector((state) => state.totalCartItems.count);
  const realCart = useSelector((state) => state);
  console.log("real cart is", realCart);
  const selectedMbName = realCart.dataReceived;
  // console.log("gettiing mobile Name", realCart.dataReceived);
  const dispatch = useDispatch();
  const fData = mobileData.filter((item) => item.mobileName === selectedMbName);
  console.log("the fData is", fData[0].price);
  useEffect(() => {
    console.log("this is selected product page");
  }, []);
  return (
    <div>
      <NavBar count={NumberOfItems} />
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
              <img src={fData[0].src} alt="" />
              {/* <img
                src="https://rukminim1.flixcart.com/image/416/416/l4n2oi80/mobile/x/o/a/-original-imagfhu75eupxyft.jpeg?q=70"
                alt=""
              /> */}
            </div>
          </div>
          <div className="btnContainer">
            <Button
              variant="contained"
              className="addToCart"
              onClick={() => {
                dispatch(
                  addToCart(
                    fData[0].mobileName,
                    fData[0].spec1,
                    fData[0].price,
                    fData[0].delivery,
                    fData[0].src,
                    fData[0].id
                    // mobileData[0].mobileName,
                    // mobileData[0].spec1,
                    // mobileData[0].price,
                    // mobileData[0].delivery,
                    // mobileData[0].src,
                    // mobileData[0].id
                  )
                );
                // dispatch(
                //   cartList(
                //     mobileData[0].mobileName,
                //     mobileData[0].rating,
                //     mobileData[0].price
                //   )
                // );
              }}
            >
              <ShoppingCartIcon />
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/cart"
              >
                <span>Add To Cart</span>
              </Link>
            </Button>
            <Button variant="contained" className="buyNow">
              <BoltIcon />
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/buynow"
              >
                <span>Buy Now</span>
              </Link>
            </Button>
          </div>
        </div>
        {/* this is the right section */}
        <div className="containerRight">
          <h3>{fData[0].mobileName}</h3>
          {/* <h3>{mobileData[0].mobileName}</h3> */}
          <span>
            {" "}
            <StarIcon fontSize="small" />
            {fData[0].rating}
            {/* {mobileData[0].rating} */}
          </span>
          <p>Extra ₹5555 Off</p>
          <h2>{fData[0].price}</h2>
          {/* <h2>{mobileData[0].price}</h2> */}
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
// const mapStateToProps = (state) => ({
//   cartNumber: state.count,
// });

// const mapDispatchToProps = (dispatch) => ({
//   addToCart: () => dispatch(addToCart),
// });
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(SelectedProductPage);
