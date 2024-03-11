import { useState, useEffect } from 'react';
import Pagination from '../components/pagination/Pagination';
import Search from '../components/search/Search';
import CardComponentQuantity from '../components/card-component/CardComponentQuantity';
import ImageApi from '../services/ImageApi';
import FetchApi from '../services/FetchApi';
import { useParams } from 'react-router-dom'; 
import NavbarComponent from '../components/navbar-component/NavbarComponent';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchText, setSearchText] = useState(''); 
  const itemsPerPage = 8;
  const { id: categoryId } = useParams(); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await FetchApi.getProductsByCategory(parseInt(categoryId));
        setProducts(productsData);


        const fruitImageUrls = await ImageApi.fetchFruitsImages('fruits');
        setImageUrls(fruitImageUrls);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, [categoryId]); 

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const filteredItems = searchText.trim() === '' ? currentItems : currentItems.filter(
    (product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className='w-full'>
      <NavbarComponent/>
      <Search onSearchChange={handleSearchChange} /> 
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 my-5 gap-3 place-items-center">
        {filteredItems.map((product) => (
          <CardComponentQuantity 
            key={product.id} 
            productName={product.name} 
            productPrice={product.price} 
            imageUrl={imageUrls.find((url, index) => index === product.id)}
          />
        ))}
      </div>
      <Pagination 
        totalItems={products.length} 
        itemsPerPage={itemsPerPage} 
        onPageChange={handlePageChange} 
      />
    </div>
  );
}

export default Products;