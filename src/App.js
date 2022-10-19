// import Navigation from "./components/Navigation";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Plus from "./pages/Plus";
import Categories from "./components/Categories";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Categories />
      </div>{" "}
      <Routes>
        <Route path="/home" element={<Home />} />{" "}
        <Route path="/plus" element={<Plus />} />{" "}
      </Routes>{" "}
    </BrowserRouter>
  );
}

export default App;
