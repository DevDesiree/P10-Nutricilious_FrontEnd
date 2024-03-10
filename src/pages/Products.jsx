import { useState, useEffect } from 'react';
import FetchApi from '../services/FetchApi';
import ImageApi from '../services/ImageApi';

const Products = ({ categoryId }) => {
  const [products, setProducts] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        // Obtém os produtos relacionados ao ID da categoria clicada
        const productsData = await FetchApi.getProductsByCategory(categoryId);
        setProducts(productsData);

        // Obtém as URLs das imagens usando o serviço ImageApi
        const productImageUrls = await ImageApi.fetchProductImages(productsData);
        setImageUrls(productImageUrls);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchProductsByCategory();
  }, [categoryId]); // Executa sempre que o categoryId mudar

  return (
    <div className='w-full'>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 my-5 gap-3 place-items-center">
        {products.map((product, index)=> (
          <div key={product.id} className="card">
            <img src={imageUrls[index]} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
