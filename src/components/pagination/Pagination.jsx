import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import FetchApi from '../../services/FetchApi';
import { useParams } from 'react-router-dom';


export default function Pagination({ itemsPerPageOptions, categoryId }) {
  const [products, setProducts] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageOptions[0]);
  
  // Atualize a contagem de páginas com base no número total de produtos e itens por página
  const pageCount = Math.ceil(products.length / itemsPerPage);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await FetchApi.getProductsByCategory(categoryId);
        setProducts(productsData);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchProducts();
  }, [categoryId, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(parseInt(event.target.value));
    setItemOffset(0); // Reseta o deslocamento do item
  };

  // Calcule os produtos atuais para serem exibidos
  const currentItems = products.slice(itemOffset, itemOffset + itemsPerPage);

  return (
    <div className="flex flex-col items-center mt-8 gap-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 my-5 gap-3 place-items-center">
        {currentItems.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
      <div className="pagination-container mb-4 w-full flex justify-center items-center">
        <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
          {itemsPerPageOptions.map(option => (
            <option key={option} value={option}>{option} itens por página</option>
          ))}
        </select>
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          containerClassName="pagination flex space-x-2"
          pageClassName="bg-white p-2 rounded cursor-pointer"
          activeClassName="bg-yellow-300 text-black"
          previousClassName="bg-gray-300 hover:bg-black hover:text-white p-2 rounded-full cursor-pointer"
          nextClassName="bg-gray-300 hover:bg-black hover:text-white p-2 rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
}
