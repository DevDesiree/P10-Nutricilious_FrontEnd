import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Products from "../pages/Products";
import Register from "../pages/Register";
import Login from "../pages/Login";
import CompanyViewAll from "../pages/company-views/CompanyViewAll";
import CompanyForm from "../pages/company-views/CompanyForm";
import CompanyShow from "../pages/company-views/CompanyShow";
import CompanyEdit from "../pages/company-views/CompanyEdit";
import CartComponent from "../components/cart-component/CartComponent";

const AdminRoute = ({ element }) => {
  const rol = localStorage.getItem('rol');
  return rol === 'Admin' ? element : <Navigate to="/login" />;
};

const UserRoute = ({ element }) => {
  const rol = localStorage.getItem('rol');
  return rol === 'User' ? element : <Navigate to="/login" />;
};

const CompanyRoute = ({ element }) => {
  const rol = localStorage.getItem('rol');
  return rol === 'Company' ? element : <Navigate to="/login" />;
};

export default function Router() {
  return (
    <BrowserRouter>
    <Routes>
        {/* Rutas publicas */}
        <Route path="/" element={<Home/>}></Route> 
        <Route path="/products/category/:id" element={<Products/>}></Route>
        <Route path="/product/:id" element={<Product/>}></Route> 
        <Route path="/cart" element={<CartComponent/>}></Route> 
     
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        
         {/* Rutas protegidas para Company*/}
        <Route path="/company/products" element={<CompanyRoute element={<CompanyViewAll/>} />} />
        <Route path="/company/create" element={<CompanyRoute element={<CompanyForm/>} />} />
        <Route path="/company/product" element={<CompanyRoute element={<CompanyShow/>} />} />
        <Route path="/company/edit" element={<CompanyRoute element={<CompanyEdit/>} />} />

        {/* Rutas protegidas para User*/}

        {/* Rutas protegidas para Admin*/}
    </Routes>
</BrowserRouter>
  )
}