import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Product from "./pages/Product";
import AllProducts from "./pages/AllProducts";
import Checkout from "./pages/Checkout";
import ThankYou from "./pages/ThankYou";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:productId" element={<Product />} />
      <Route path="/product" element={<AllProducts />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/payment-done" element={<ThankYou />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
