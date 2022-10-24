import { ADD_TO_CART, REMOVE_FROM_CART, SELECTED_PRODUCT } from "./action";
import { TOTAL_AMOUNT } from "./action";
export const totalCartItems = (state = { count: 0 }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { count: state.count + 1 };
    case REMOVE_FROM_CART:
      return { count: state.count - 1 };
    default:
      return state;
  }
};
export const cartItemList = (oldCartItemList = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...oldCartItemList, action.payload];
    case REMOVE_FROM_CART:
      return oldCartItemList.filter((item) => item.id !== action.payload.id);

    default:
      return oldCartItemList;
  }
};
export const finalAmount = (state = { totalAmount: 0 }, action) => {
  switch (action.type) {
    case TOTAL_AMOUNT:
      return { totalAmount: state.totalAmount + action.payload.price };
    default:
      return state;
  }
};
export const dataReceived = (productName = "", action) => {
  switch (action.type) {
    case SELECTED_PRODUCT:
      return (productName = action.payload.mobileName);
    default:
      return productName;
  }
};
