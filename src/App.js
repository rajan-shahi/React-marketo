import "./App.css";
import About from "./page/About";
import Home from "./page/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className=" overflow-x-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/shopbar" element={<ShopBar />} />
          <Route path="/signin" element={<SighIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/add to card" element={<AddNeweCard />} />
          <Route path="/blog" element={<BlogSideBar />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
