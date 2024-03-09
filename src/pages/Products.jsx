import Pagination from '../components/pagination/Pagination'
import Search from '../components/search/Search'
import CardComponentQuantity from '../components/card-component/CardComponentQuantity';
import { useState } from 'react';
import { useMediaQuery } from '@react-hook/media-query';

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const isXl = useMediaQuery('(min-width: 1280px)');
  const itemsPerPage = isXl ? 8 : 4; // Número de itens por página

  const totalItems = 14; // Número total de itens (no seu caso, a quantidade total de cards)

  // Calcula o índice inicial e final dos itens a serem exibidos na página atual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='w-full'>
      <Search />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 my-5 gap-3 place-items-center">
        {Array.from({ length: itemsPerPage }).map((_, index) => {
          const itemIndex = indexOfFirstItem + index;
          return <CardComponentQuantity key={itemIndex} />;
        })}
      </div>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default Products;
