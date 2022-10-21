// import Navigation from "./components/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Plus from "./pages/Plus";
import ProductPage from "./pages/ProductPage";
import SelectedProductPage from "./components/SelectedProductPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/plus" element={<Plus />} />{" "}
        <Route path="/mobiles" element={<ProductPage />} />
        <Route path="/mobiles/*" element={<SelectedProductPage />} />
      </Routes>{" "}
    </BrowserRouter>
  );
}

export default App;
