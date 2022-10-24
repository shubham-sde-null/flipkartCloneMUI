import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import Mobiles from "../components/Mobiles";
import { useSelector } from "react-redux";
function ProductPage() {
  const NumberOfItems = useSelector((state) => state.totalCartItems.count);
  useEffect(() => {
    console.log("this is product page");
  }, []);
  return (
    <div key="productPage">
      <NavBar count={NumberOfItems} />
      <Mobiles />
    </div>
  );
}

export default ProductPage;
