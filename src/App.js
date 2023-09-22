import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import View from "./components/View";

function App() {
  return (
    <div className=" overflow-x-hidden">
      <Navbar />
      <View />
      <Products/>
    </div>
  );
}

export default App;
