import React from 'react'
import Pagination from '../components/pagination/Pagination'
import Search from '../components/search/Search'

const Products = () => {
  return (
    <>
    <Search></Search>
      <Pagination itemsPerPage={4}></Pagination>
    </>
  )
}

export default Products