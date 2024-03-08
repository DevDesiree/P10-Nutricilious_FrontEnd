import CardComponent from "../components/card-component/CardComponent";
import CardComponentQuantity from "../components/card-component/CardComponentQuantity";
// import CartComponent from "../components/cart-component/CartComponent";
import CarouselBasicExample from "../components/banner/Banner.jsx"



const Home = () => {
  return (
    <>    
    <CarouselBasicExample/>
    <CardComponent/>
    <CardComponentQuantity/>
    {/* <CartComponent/> */}
    </>
  )
}

export default Home;