import { combineReducers } from "redux";
import {
  totalCartItems,
  cartItemList,
  finalAmount,
  dataReceived,
} from "./reducer";
export default combineReducers({
  totalCartItems: totalCartItems,
  cartItemList: cartItemList,
  finalAmount: finalAmount,
  dataReceived: dataReceived,
});
