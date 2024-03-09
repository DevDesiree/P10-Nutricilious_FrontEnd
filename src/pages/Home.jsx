import CardComponent from "../components/card-component/CardComponent";
import CarouselBasicExample from "../components/banner/Banner.jsx"
import Search from "../components/search/Search.jsx";


const Home = () => {
  return (
    <>    
    {/* <NavBar/> */}
    <CarouselBasicExample/>
    <Search/>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-5 gap-3 place-items-center">
    <CardComponent/>
    <CardComponent/>
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