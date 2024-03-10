import { useState, useEffect } from 'react';
import Pagination from '../components/pagination/Pagination';
import Search from '../components/search/Search';
import CardComponentQuantity from '../components/card-component/CardComponentQuantity';
import FetchApi from '../services/FetchApi';
import ImageApi from '../services/ImageApi';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await FetchApi.getProducts();
        setProducts(productsData);

        // Obter as URLs das imagens usando o serviço ImageApi
        const fruitImageUrls = await ImageApi.fetchFruitsImages('fruits');
        setImageUrls(fruitImageUrls);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className='w-full'>
      <Search />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 my-5 gap-3 place-items-center">
        {products.map((product, index)=> (
          <CardComponentQuantity 
            key={product.id} 
            productName={product.name} 
            productPrice={product.price} 
            imageUrl={imageUrls[index]} 
          />
        ))}
      </div>
      <Pagination itemsPerPage={4} />
    </div>
  );
}

export default Products;
