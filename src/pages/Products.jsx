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

  return (
    <div className='w-full'>
      <Search />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 my-5 gap-3 place-items-center">
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
    </div>
  );
}

export default Products;