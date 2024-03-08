import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";



function Router() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}></Route> 
        {/* <Route path="/product" element={<Product/>}></Route>  */}
        {/* <Route path="/cart" element={<Cart/>}></Route>  */}
    </Routes>
</BrowserRouter>
  )
}

export default Router