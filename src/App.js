// import Navigation from "./components/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Plus from "./pages/Plus";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/plus" element={<Plus />} />{" "}
      </Routes>{" "}
    </BrowserRouter>
  );
}

export default App;
