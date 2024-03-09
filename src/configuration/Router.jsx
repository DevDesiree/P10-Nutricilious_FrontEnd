import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Products from "../pages/Products";
import Register from "../pages/Register";
import Login from "../pages/Login";


export default function Router() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}></Route> 
        <Route path="/product" element={<Product/>}></Route> 
        {/* <Route path="/cart" element={<Cart/>}></Route>  */}
        <Route path="/products" element={<Products></Products>}></Route> 
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        
    </Routes>
</BrowserRouter>
  )
}