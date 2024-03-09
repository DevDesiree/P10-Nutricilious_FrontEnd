import CardComponent from "../components/card-component/CardComponent";
import CarouselBasicExample from "../components/banner/Banner.jsx"



const Home = () => {
  return (
    <>    
    {/* <NavBar/> */}
    <CarouselBasicExample/>
    <div className="grid grid-cols-2 gap-4 my-5">
    <CardComponent/>
    <CardComponent/>
    <CardComponent/>
    <CardComponent/>
    <CardComponent/>
    <CardComponent/>
    </div>




    </>
  )
}

export default Home;