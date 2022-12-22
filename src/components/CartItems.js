import React from "react";
import "./CartItems.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector, useDispatch } from "react-redux";
import { useTheme, useMediaQuery } from "@mui/material";
import { removeFromCart } from "../redux/action";
function CartItems({ src, mobileName, spec1, price, delivery, id }) {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch();
  return (
    <div className={isMatch ? "cartItemsSmall" : "cartItems"}>
      <div className={isMatch ? "productDescSmall" : "productDesc"}>
        <div className={isMatch ? "productDescImgSmall" : "productDescImg"}>
          <img
            width={isMatch ? "90px" : ""}
            height={isMatch ? "130px" : ""}
            src={src}
            alt=""
          />
        </div>
        <div className={isMatch ? "productDescDataSmall" : "productDescData"}>
          <h3 style={{ fontSize: isMatch ? "1rem" : "" }}>{mobileName}</h3>
          <p style={{ fontSize: isMatch ? "0.9rem" : "" }}>{spec1}</p>
          <h3 style={{ fontSize: isMatch ? "1.2rem" : "" }}>
            ₹
            {price.toString().length === 4
              ? `${price.toString()[0]},${price.toString()[1]}${
                  price.toString()[2]
                }${price.toString()[3]}`
              : price.toString().length === 5
              ? `${price.toString()[0]}${price.toString()[1]},${
                  price.toString()[2]
                }${price.toString()[3]}${price.toString()[4]}`
              : price.toString().length === 6
              ? `${price.toString()[0]},${price.toString()[1]}${
                  price.toString()[2]
                },${price.toString()[3]}${price.toString()[4]}${
                  price.toString()[5]
                }`
              : ``}
          </h3>
          <h6 style={{ color: "#388e3c", fontSize: "0.8rem" }}>{delivery}</h6>
        </div>
      </div>
      <div
        className={isMatch ? "removeFromCartSmall" : "removeFromCart"}
        onClick={() => {
          dispatch(removeFromCart(id));
        }}
      >
        <DeleteIcon /> <p>Remove</p>
      </div>
    </div>
  );
}

export default CartItems;
