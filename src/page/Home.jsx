import React from "react";
import Navbar from "../components/Navbar";
import View from "../components/View";
import Products from "../components/Products";
import DicountProducr from "../components/DicountProducr";
import Buy from "../components/Buy";
import Items from "../components/Items";
import PopularsProduct from "../components/PopularsProduct";
import Copyright from "../components/Copyright";

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
      <Copyright />
    </div>
  );
};

export default Home;
