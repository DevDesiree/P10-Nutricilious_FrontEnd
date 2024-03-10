import { useState, useEffect } from 'react';
import Pagination from '../components/pagination/Pagination';
import Search from '../components/search/Search';
import CardComponentQuantity from '../components/card-component/CardComponentQuantity';
import FetchApi from '../services/FetchApi';
import { useParams } from 'react-router-dom'; 
import CartComponent from '../components/cart-component/CartComponent';
import NavbarComponentShop from '../components/navbar-component/NavbarComponentShop';

const Products = ({ categoryId }) => {
  const [products, setProducts] = useState([]);
  const [imageUrls, setImageUrls] = useState([]); 
  const [currentPage, setCurrentPage] = useState(0);
  const [searchText, setSearchText] = useState('');
  const [showCart, setShowCart] = useState(false); 
  const [cartItems, setCartItems] = useState([]); 
  const itemsPerPage = 8;
  const { id: categoryId } = useParams(); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await FetchApi.getProducts();
        setProducts(productsData);

        const fruitImageUrls = await ImageApi.fetchFruitsImages('fruits');
        setImageUrls(fruitImageUrls);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className='w-full'>
      <Search onSearchChange={handleSearchChange} />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 my-5 gap-3 place-items-center">
        {products.map((product, index) => (
          <CardComponentQuantity 
            key={product.id} 
            productName={product.name} 
            productPrice={product.price} 
            imageUrl={imageUrls.find((url, index) => index === product.id)}
            onAddToCart={() => {
              handleAddToCart(product);
              setShowCart(true);
            }} 
          />
        ))}
      </div>
      <Pagination itemsPerPage={4} itemOffset={itemOffset} setItemOffset={setItemOffset} />
    </div>
  );
}

export default Products;
