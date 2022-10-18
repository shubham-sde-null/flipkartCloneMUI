// import Navigation from "./components/Navigation";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Plus from "./pages/Plus";
// import Categories from "./components/Categories";
// import Temp from "./components/Temp";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Navigation /> */}
        <NavBar />
        {/* <Temp /> */}
      </div>{" "}
      <Routes>
        <Route path="/home" element={<Home />} />{" "}
        <Route path="/plus" element={<Plus />} />{" "}
      </Routes>{" "}
    </BrowserRouter>
  );
}

export default App;
