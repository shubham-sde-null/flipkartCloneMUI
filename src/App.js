// import Navigation from "./components/Navigation";
import { Provider } from "react-redux";
import store from "./redux/store";
// import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Plus from "./pages/Plus";
import ProductPage from "./pages/ProductPage";
import SelectedProductPage from "./components/SelectedProductPage";
// import Cart from "./components/Cart";
import Cart from "./pages/Cart";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />{" "}
          <Route path="/plus" element={<Plus />} />{" "}
          <Route path="/mobiles" element={<ProductPage />} />
          <Route path="/mobiles/*" element={<SelectedProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/buynow" element={<Cart />} />
        </Routes>{" "}
      </BrowserRouter>
    </Provider>
  );
}

export default App;
