import Navbar from "./components/Navbar";
import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import { ShopContextP } from "./context/ShopContextP";

function App() {
  return (
    <div className="App">
      <ShopContextP>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </Router>
      </ShopContextP>
    </div>
  );
}

export default App;
