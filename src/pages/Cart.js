import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import "./Cart.css";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
// import CartItems from "./CartItems";
import CartItems from "../components/CartItems";
import Footer from "../components/Footer";
import { useTheme, useMediaQuery } from "@mui/material";
// import { totalAmount } from "../redux/action";
function Cart() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const [cartPrice, setCartPrice] = useState(0);
  // const [strVal, setStrVal] = useState("");
  useEffect(() => {
    console.log("this is the cart page");
  }, []);
  // const dispatch = useDispatch();
  // const cartNumber = useSelector((state) => state.totalCartItems.count);
  const NumberOfItems = useSelector((state) => state.totalCartItems.count);
  const addToCartData = useSelector((state) => state.cartItemList);
  console.log("data received on cart page", addToCartData);
  useEffect(() => {
    function show() {
      let initial = 0;
      // for (let i = 0; i < 4; i++) {
      //   initial = initial + addToCartData[i].price;
      // }
      addToCartData.forEach((item) => (initial = initial + item.price));
      console.log(initial);
      let tempVar = String(initial);
      setCartPrice(tempVar);
    }
    show();
  }, [addToCartData]);
  // useEffect(() => {
  //   let newStr = String(setCartPrice);
  //   setStrVal(`Rs${newStr}`);
  // }, []);
  // let initial=0;
  // addToCartData.map((item) => dispatch(totalAmount(item.price)));
  // addToCartData.map((item) => dispatch(totalAmount(item.price)));
  // const finalPrice = useSelector((state) => state);
  // console.log("finalPrice", finalPrice);
  // console.log("cartNumber", cartNumber);
  return (
    <>
      <div className={isMatch ? "cartSmall" : "cart"} key="cart">
        <NavBar count={NumberOfItems} />
        <div className={isMatch ? "cartContainerSmall" : "cartContainer"}>
          <div
            className={isMatch ? "leftCartContainerSmall" : "leftCartContainer"}
          >
            <div className={isMatch ? "cartNumberSmall" : "cartNumber"}>
              <p>Flipkart({NumberOfItems})</p>
              <p>Grocerry</p>
            </div>
            <div className={isMatch ? "cartAddressSmall" : "cartAddress"}>
              <p>Deliver to: Mumbai-400000</p>
              <div>
                <Button variant="outlined">Change</Button>
              </div>
            </div>
            <div
              className={isMatch ? "productMainContSmall" : "productMainCont"}
            >
              {addToCartData.map((item) => (
                <CartItems
                  src={item.src}
                  mobileName={item.mobileName}
                  spec1={item.spec1}
                  price={item.price}
                  delivery={item.delivery}
                  id={item.id}
                />
              ))}
              {/* <div className="cartItems">
            <div className="productDesc">
              <div className="productDescImg">
                <img src={addToCartData[0].src} alt="" />
              </div>
              <div className="productDescData">
                <h3>{addToCartData[0].mobileName}</h3>
                <p>{addToCartData[0].spec1}</p>
                <h3>{addToCartData[0].price}</h3>
                <h6>{addToCartData[0].delivery}</h6>
              </div>
            </div>
            <div className="removeFromCart">Remove</div>
          </div> */}
            </div>
          </div>
          <div
            className={
              isMatch ? "rightCartContainerSmall" : "rightCartContainer"
            }
          >
            <div className={isMatch ? "productDetailsSmall" : "productDetails"}>
              <p>Price Details</p>
              <hr className="horizontalLine" />
              {/* <h1>{strVal}</h1> */}
              <div className={isMatch ? "totalAmountSmall" : "totalAmount"}>
                <p>Total Amount</p>
                <h2>
                  <CurrencyRupeeIcon fontSize={isMatch ? "small" : "medium"} />
                  {/* {cartPrice.length === 4
              ? `${cartPrice[0]},${cartPrice[1]}${cartPrice[2]}${cartPrice[3]}`
              : `${cartPrice[0]}${cartPrice[1]},${cartPrice[2]}${cartPrice[3]}${cartPrice[4]}`} */}
                  {cartPrice.length === 1
                    ? `${cartPrice[0]}`
                    : cartPrice.length === 4
                    ? `${cartPrice[0] ? cartPrice[0] : ""}${
                        cartPrice[1] ? "," : ""
                      }${cartPrice[1] ? cartPrice[1] : ""}${
                        cartPrice[2] ? cartPrice[2] : ""
                      }${cartPrice[3] ? cartPrice[3] : ""}`
                    : cartPrice.length === 5
                    ? `${cartPrice[0] ? cartPrice[0] : ""}${
                        cartPrice[1] ? cartPrice[1] : ""
                      } ${cartPrice[1] ? "," : ""}${
                        cartPrice[2] ? cartPrice[2] : ""
                      }${cartPrice[3] ? cartPrice[3] : ""}${
                        cartPrice[4] ? cartPrice[4] : ""
                      }`
                    : `${cartPrice[0] ? cartPrice[0] : ""} ${
                        cartPrice[1] ? "," : ""
                      }${cartPrice[1] ? cartPrice[1] : ""}${
                        cartPrice[2] ? cartPrice[2] : ""
                      } ${cartPrice[1] ? "," : ""}${
                        cartPrice[3] ? cartPrice[3] : ""
                      }${cartPrice[4] ? cartPrice[4] : ""}${cartPrice[5]}`}
                  /-
                </h2>
              </div>

              <hr className="horizontalLine" />
              <div className={isMatch ? "extraInfoSmall" : "extraInfo"}>
                <p>Delivery Charges</p>
                <p style={{ color: "#388e3c", fontSize: "18px" }}>Free</p>
              </div>
            </div>
            <div className={isMatch ? "placeOrderSmall" : "placeOrder"}>
              <Button
                className={isMatch ? "placeOrderBtnSmall" : "placeOrderBtn"}
              >
                Place Order
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
