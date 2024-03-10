<<<<<<< HEAD
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
=======
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import Pagination from '../components/pagination/Pagination';
import Search from '../components/search/Search';
import CardComponentQuantity from '../components/card-component/CardComponentQuantity';
import ImageApi from '../services/ImageApi';
import { useLocation } from 'react-router-dom'; // Importe useLocation para obter o ID da categoria na URL

const Products = () => {
  const [products, setProducts] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [categoryId, setCategoryId] = useState(null); // Estado para armazenar o ID da categoria selecionada
  const location = useLocation(); // Hook useLocation para obter o ID da categoria na URL

  useEffect(() => {
    const fetchImageUrls = async () => {
      try {
        // Obter as URLs das imagens usando o serviço ImageApi
        const fruitImageUrls = await ImageApi.fetchFruitsImages('fruits');
        setImageUrls(fruitImageUrls);
      } catch (error) {
        console.error('Erro ao buscar imagens:', error);
      }
    };

    fetchImageUrls();
  }, []);

  useEffect(() => {
    // Obtenha o ID da categoria da URL quando a localização for alterada
    const searchParams = new URLSearchParams(location.search);
    const categoryIdParam = searchParams.get('categoryId');
    setCategoryId(categoryIdParam);
  }, [location.search]);
>>>>>>> a9c72e1bf0c5d4eb6945333146501f41bce39446

  return (
    <div className='w-full'>
      <Search />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 my-5 gap-3 place-items-center">
<<<<<<< HEAD
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
=======
        {products
          .filter(product => product.categoryId === categoryId) // Filtra os produtos pela categoria selecionada
          .map((product) => (
            <CardComponentQuantity 
              key={product.id} 
              productName={product.name} 
              productPrice={product.price} 
              imageUrl={imageUrls.find((url, index) => index === product.id)} // Encontre a URL da imagem correspondente ao ID do produto
            />
          ))}
      </div>
      <Pagination itemsPerPageOptions={[8, 16, 24]} categoryId={categoryId} />
>>>>>>> a9c72e1bf0c5d4eb6945333146501f41bce39446
    </div>
  );
}

export default Products;
