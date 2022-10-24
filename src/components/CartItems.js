import React from "react";
import "./CartItems.css";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/action";
function CartItems({ src, mobileName, spec1, price, delivery, id }) {
  const dispatch = useDispatch();
  return (
    <div className="cartItems">
      <div className="productDesc">
        <div className="productDescImg">
          <img src={src} alt="" />
        </div>
        <div className="productDescData">
          <h3>{mobileName}</h3>
          <p>{spec1}</p>
          <h3>{price}</h3>
          <h6>{delivery}</h6>
        </div>
      </div>
      <div
        className="removeFromCart"
        onClick={() => {
          dispatch(removeFromCart(id));
        }}
      >
        Remove
      </div>
    </div>
  );
}

export default CartItems;
