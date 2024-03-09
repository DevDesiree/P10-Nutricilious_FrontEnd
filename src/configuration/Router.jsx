import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Products from "../pages/Products";
import CompanyView from "../pages/company-views/CompanyView";


export default function Router() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}></Route> 
        <Route path="/product" element={<Product/>}></Route> 
        {/* <Route path="/cart" element={<Cart/>}></Route>  */}
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/company/products" element={<CompanyView></CompanyView>}></Route>
    </Routes>
</BrowserRouter>
  )
}