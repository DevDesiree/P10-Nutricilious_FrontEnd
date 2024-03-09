import Pagination from '../components/pagination/Pagination'
import Search from '../components/search/Search'

const Products = () => {
  return (
    <div className='w-full'>
      <Search></Search>
      <Pagination itemsPerPage={4}></Pagination>
    </div>
  )
}

export default Products