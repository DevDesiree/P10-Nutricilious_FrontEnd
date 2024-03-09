import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Products from "../pages/Products";


export default function Router() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}></Route> 
        <Route path="/product" element={<Product/>}></Route> 
        {/* <Route path="/cart" element={<Cart/>}></Route>  */}
        <Route path="/products" element={<Products></Products>}></Route> 
    </Routes>
</BrowserRouter>
  )
}