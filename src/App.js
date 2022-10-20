// import Navigation from "./components/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Plus from "./pages/Plus";
import ProductPage from "./pages/ProductPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/plus" element={<Plus />} />{" "}
        <Route path="/mobiles" element={<ProductPage />} />
      </Routes>{" "}
    </BrowserRouter>
  );
}

export default App;
