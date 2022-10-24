import { createStore } from "redux";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
//here this rootReducer is consisting of multiple reducers bind together using combine reduers and it is been used over here
import rootReducer from "./rootReducer";
const store = createStore(rootReducer);
// const persistConfig = {
//   key: "root",
//   storage,
// };
// const persistedReducer = persistReducer(persistConfig, rootReducer);
// export let store = createStore(persistedReducer);
// export let persistor = persistStore(store);
export default store;
