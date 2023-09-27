import React from "react";
import Navbar from "../components/Navbar";
import View from "../components/View";
import Products from "../components/Products";
import DicountProducr from "../components/DicountProducr";
import Buy from "../components/Buy";
import Items from "../components/Items";
import PopularsProduct from "../components/PopularsProduct";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import Blog from "./Blog";

const Home = () => {
  return (
    <div>
      <Navbar />
      <View />
      <Products />
      <DicountProducr />
      <Buy />
      <Items />
      <PopularsProduct />
      <Footer />
      <Copyright />
      <Blog/>
    </div>
  );
};

export default Home;
