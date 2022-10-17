import Navigation from "./components/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Plus from "./pages/Plus";
// import Temp from "./components/Temp";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
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
