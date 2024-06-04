import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ShopContextProvider } from "./context/shop-context"; 
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart"; 
import { Navbar } from './component/navbar';
import "./App.css";

const App = () => (
  <ShopContextProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Shop />} /> {/* Default route */}
      </Routes>
    </Router>
  </ShopContextProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));

export default App;



