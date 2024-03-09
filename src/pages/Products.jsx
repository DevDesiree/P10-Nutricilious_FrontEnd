import Pagination from '../components/pagination/Pagination'
import Search from '../components/search/Search'
import CardComponentQuantity from '../components/card-component/CardComponentQuantity';
const Products = () => {
  return (
    <div className='w-full'>
      <Search></Search>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 my-5 gap-3 place-items-center">
    <CardComponentQuantity/>
    <CardComponentQuantity/>
    <CardComponentQuantity/>
    <CardComponentQuantity/>
    <CardComponentQuantity/>
    <CardComponentQuantity/>
    <CardComponentQuantity/>
    <CardComponentQuantity/>
    </div>
      <Pagination itemsPerPage={4}></Pagination>
    </div>
  )
}

export default Products