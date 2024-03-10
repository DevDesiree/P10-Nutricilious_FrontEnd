import { useState, useEffect } from 'react';
import Pagination from '../components/pagination/Pagination';
import Search from '../components/search/Search';
import CardComponentQuantity from '../components/card-component/CardComponentQuantity';
import ImageApi from '../services/ImageApi';
import FetchApi from '../services/FetchApi';
import { useParams } from 'react-router-dom'; 

const Products = () => {
  const [products, setProducts] = useState([]);
  const [imageUrls, setImageUrls] = useState([]); // Adicionado estado para as URLs das imagens
  const [currentPage, setCurrentPage] = useState(0);
  const [searchText, setSearchText] = useState(''); // Estado para armazenar o texto de pesquisa
  const itemsPerPage = 8;
  const { id: categoryId } = useParams(); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obtenha os dados dos produtos
        const productsData = await FetchApi.getProductsByCategory(parseInt(categoryId));
        setProducts(productsData);

        // Obtenha as URLs das imagens
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

  // Filtrar os produtos com base no texto de pesquisa
  const filteredItems = searchText.trim() === '' ? currentItems : currentItems.filter(
    (product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className='w-full'>
      <Search onSearchChange={handleSearchChange} /> {/* Adicionado onSearchChange */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 my-5 gap-3 place-items-center">
        {filteredItems.map((product) => (
          <CardComponentQuantity 
            key={product.id} 
            productName={product.name} 
            productPrice={product.price} 
            imageUrl={imageUrls.find((url, index) => index === product.id)} // Use o índice do array para encontrar a URL correspondente
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
