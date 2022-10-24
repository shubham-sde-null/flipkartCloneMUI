import React from "react";
import NavBar from "./NavBar";
import "./Cart.css";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";
// import { totalAmount } from "../redux/action";
function Cart() {
  // const dispatch = useDispatch();
  const NumberOfItems = useSelector((state) => state.totalCartItems.count);
  const addToCartData = useSelector((state) => state.cartItemList);
  // console.log("data received on cart page", addToCartData);
  return (
    <div className="cart">
      <NavBar />
      <div className="cartContainer">
        <div className="leftCartContainer">
          <div className="cartNumber">
            <p>Flipkart({NumberOfItems})</p>
            <p>Grocerry</p>
          </div>
          <div className="cartAddress">
            <p>Deliver to: Mumbai-400000</p>
          </div>
          <div className="productMainCont">
            {addToCartData.map((item) => (
              <CartItems
                src={item.src}
                mobileName={item.mobileName}
                spec1={item.spec1}
                price={item.price}
                delivery={item.delivery}
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
        <div className="rightCartContainer">
          <div className="productDetails">
            <h1>Hello</h1>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}

export default Cart;
