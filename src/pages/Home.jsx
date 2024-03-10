import { useState, useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import CardComponent from "../components/card-component/CardComponent";
import CarouselBasicExample from "../components/banner/Banner.jsx";
import NavbarComponent from '../components/navbar-component/NavbarComponent.jsx';
import FetchApi from '../services/FetchApi';
import avocadoYtomate from '../assets/images/avocadoYTomate.jpg';
import naranja from '../assets/images/naranja.jpg';
import barrasCereales from '../assets/images/barrasCereales.jpg';
import queso from '../assets/images/queso.jpg';
import acete from '../assets/images/acete.jpg';
import proteinaAnimal from '../assets/images/proteinaAnimal.jpg';
import proteinaVegetal from '../assets/images/proteinaVegetal.jpg';
import cereales from '../assets/images/cereales.jpg';

const Home = () => {
  const navigate = useNavigate(); 
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await FetchApi.getCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error('Erro ao buscar categorias:', error);
      }
    };

    fetchCategories();
  }, []);

  // Defina as descrições para cada categoria
  const categoryDescription = {
    category1: "Productos ricos en proteínas vegetales para una alimentación equilibrada y saludable.",
    category2: "Productos ricos en proteínas vegetales para una alimentación equilibrada y saludable.",
    category3: "Productos de alta calidad y gran sabor, ideales para tus comidas principales.",
    category4: "Variedad de cereales integrales para una dieta rica en fibra y nutrientes esenciales.",
    category5: "Productos lácteos frescos y nutritivos para disfrutar en tus desayunos y meriendas.",
    category6: "Deliciosos snacks saludables para disfrutar en cualquier momento del día.",
    category7: "Selección de frutas y verduras frescas, ideales para una dieta balanceada y saludable.",
    category8: "Aceites naturales y saludables para cocinar y aderezar tus platos favoritos.",
  };

  const categoryImage = {
    image1: avocadoYtomate,
    image2: proteinaVegetal,
    image3: proteinaAnimal,
    image4: cereales,
    image5: queso,
    image6: barrasCereales,
    image7: naranja,
    image8: acete,
  };

  const handleCategoryClick = (categoryId) => {
    navigate(`/products/category/${categoryId}`);
  };

  return (
    <>  
    <NavbarComponent/>
    <CarouselBasicExample/>
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 my-5 gap-3 place-items-center">
      {categories.map((category, index) => (
        <CardComponent 
          key={category.id} 
          category={category} 
          description={categoryDescription[`category${index + 1}`]}
          imageUrl={categoryImage[`image${index + 1}`]} 
          onButtonClick={() => handleCategoryClick(category.id)}
        />
      ))}
    </div>
    </>
  )
}

export default Home;
