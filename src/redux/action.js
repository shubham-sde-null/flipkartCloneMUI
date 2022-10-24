export const ADD_TO_CART = "ADD_TO_CART";
// export const CART_LIST = "CART_LIST";
export const TOTAL_AMOUNT = "TOTAL_AMOUNT";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
// export const PRODUCT_TO_HIGHLIGHT = "PRODUCT_TO_HIGHLIGHT";
export const SELECTED_PRODUCT = "SELECTED_PRODUCT";
export const addToCart = (mobileName, spec1, price, delivery, src, id) => ({
  type: ADD_TO_CART,
  payload: {
    mobileName,
    spec1,
    price,
    delivery,
    src,
    id,
  },
});
export const totalAmount = (price) => ({
  type: TOTAL_AMOUNT,
  payload: {
    price,
  },
});
export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: {
    id,
  },
});
export const productToHighlight = (id) => ({
  type: "PRODUCT_TO_HIGHLIGHT",
  payload: {
    id,
  },
});
export const selectedProduct = (mobileName) => ({
  type: SELECTED_PRODUCT,
  payload: {
    mobileName,
  },
});
