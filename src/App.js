import "./App.css";
import About from "./page/About";
import AboutUS from "./page/AboutUS";
import Blog from "./page/Blog";
import Home from "./page/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./page/Login";
import Signup from "./page/Signup";
import Shop from "./page/Shop";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className=" overflow-x-hidden">
      <BrowserRouter>
        <Navbar />
        <div className="  md:py-32 py-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/aboutUs" element={<AboutUS />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
