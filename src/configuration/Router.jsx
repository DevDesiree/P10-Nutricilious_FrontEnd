import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Products from "../pages/Products";
import Register from "../pages/Register";
import Login from "../pages/Login";
import CompanyViewAll from "../pages/company-views/CompanyViewAll";
import CompanyForm from "../pages/company-views/CompanyForm";
import CompanyShow from "../pages/company-views/CompanyShow";
import CompanyEdit from "../pages/company-views/CompanyEdit";


export default function Router() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}></Route> 
        <Route path="/products/category/:id" element={<Products/>}></Route>
        <Route path="/product/:id" element={<Product/>}></Route> 
        {/* <Route path="/cart" element={<Cart/>}></Route>  */}
     
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        
        <Route path="/company/products" element={<CompanyViewAll></CompanyViewAll>}></Route>
        <Route path="/company/create" element={<CompanyForm></CompanyForm>}></Route>
        <Route path="/company/product" element={<CompanyShow></CompanyShow>}></Route>
        <Route path="/company/edit" element={<CompanyEdit></CompanyEdit>}></Route>
    </Routes>
</BrowserRouter>
  )
}