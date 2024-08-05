import React, { useContext } from "react";
// import AppContext from "./context/AppContext";
import ShowProduct from "./Commponents/product/ShowProduct";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./Commponents/product/ProductDetail";
import Navbar from "./Commponents/Navbar";
import SearchProduct from "./Commponents/product/SearchProduct";
import Register from "./Commponents/user/Register";
 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
 import Login from "./Commponents/user/login";
import Profile from "./Commponents/user/Profile";
import Cart from "./Commponents/Cart";
import Address from "./Commponents/Address";
import Checkout from "./Commponents/Checkout";
import OrderConfirmation from "./Commponents/OrderConfirmation";
const App = () => {
  // const {} = useContext(AppContext)
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<ShowProduct />} />
        <Route path="/product/search/:term" element={<SearchProduct />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Address />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/oderconfirmation" element={<OrderConfirmation />} />

      </Routes> 
    </Router>
  );
};

export default App;