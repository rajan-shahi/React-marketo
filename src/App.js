import "./App.css";
import About from "./page/About";
import AboutUS from "./page/AboutUS";
import Home from "./page/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className=" overflow-x-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/aboutUs" element={<AboutUS/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
