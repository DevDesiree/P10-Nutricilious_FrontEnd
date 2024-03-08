import CardComponent from "../components/card-component/CardComponent";
import CardComponentQuantity from "../components/card-component/CardComponentQuantity";
// import CartComponent from "../components/cart-component/CartComponent";
import Banner from "../components/banner/Banner";

const Home = () => {
  return (
    <>    
    <Banner/>
    <CardComponent/>
    <CardComponentQuantity/>
    {/* <CartComponent/> */}
    </>
  )
}

export default Home;