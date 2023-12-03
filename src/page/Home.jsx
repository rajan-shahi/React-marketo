import React from "react";
import View from "../components/View";
import Products from "../components/Products";
import DicountProducr from "../components/DicountProducr";
import Buy from "../components/Buy";
import Items from "../components/Items";
import PopularsProduct from "../components/PopularsProduct";

const Home = () => {
  return (
    <div>
      <View />
      <Products />
      <DicountProducr />
      <Buy />
      <Items />
      <PopularsProduct />
    
    </div>
  );
};

export default Home;
