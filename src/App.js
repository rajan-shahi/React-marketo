import "./App.css";
import About from "./page/About";
import AboutUS from "./page/AboutUS";
import Blog from "./page/Blog";
import Home from "./page/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './page/Login';
import Signup from "./page/Signup";

function App() {
  return (
    <div className=" overflow-x-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/aboutUs" element={<AboutUS/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
