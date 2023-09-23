import "./App.css";
import Buy from "./components/Buy";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import View from "./components/View";

function App() {
  return (
    <div className=" overflow-x-hidden">
      <Navbar />
      <View />
      <Products />
      <Buy/>
    </div>
  );
}

export default App;
