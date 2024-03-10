import CardComponent from "../components/card-component/CardComponent";
import CardComponentQuantity from "../components/card-component/CardComponentQuantity";
// import CartComponent from "../components/cart-component/CartComponent";
import CarouselBasicExample from "../components/banner/Banner.jsx"
import NavbarComponent from "../components/navbar-component/NavbarComponent.jsx";



const Home = () => {
  return (
    <>  
    <NavbarComponent/> 
    <CarouselBasicExample/>
    <CardComponent/>
    <CardComponentQuantity/>
    {/* <CartComponent/> */}
    </>
  )
}

export default Home;