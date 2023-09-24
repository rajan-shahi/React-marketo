import "./App.css";
import Buy from "./components/Buy";
import Copyright from "./components/Copyright";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import View from "./components/View";
import DicountProducr from "./components/DicountProducr";
import PopularsProduct from "./components/PopularsProduct";

function App() {
  return (
    <div className=" overflow-x-hidden">
      <Navbar />
      <View />
      <Products />
      <DicountProducr />
      <Buy />
      <Items />
      <PopularsProduct/>
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
