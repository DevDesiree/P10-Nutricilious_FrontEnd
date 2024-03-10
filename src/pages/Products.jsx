import { useState, useEffect } from 'react';
import FetchApi from '../services/FetchApi';
import ImageApi from '../services/ImageApi';
import NavbarComponentShop from '../components/navbar-component/NavbarComponentShop';

const Products = ({ categoryId }) => {
  const [products, setProducts] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        // Obtém os produtos relacionados ao ID da categoria clicada
        const productsData = await FetchApi.getProductsByCategory(categoryId);
        setProducts(productsData);

        // Obter as URLs das imagens usando o serviço ImageApi
        const fruitImageUrls = await ImageApi.fetchFruitsImages('fruits');
        setImageUrls(fruitImageUrls);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchProductsByCategory();
  }, [categoryId]); // Executa sempre que o categoryId mudar

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