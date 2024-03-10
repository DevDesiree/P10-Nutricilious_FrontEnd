import NavbarComponentShop from "../components/navbar-component/NavbarComponentShop";
import ProductDescription from "../components/product-description/ProductDescription";

const Product = () => {
  return (
    <div>
      <section>
        <NavbarComponentShop/>
        <ProductDescription />
      </section>

      {/* Banner */}
      <div className="bg-yellow-400 text-center p-8 md:p-16 lg:p-20">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-black">
          ¡Descubre nuestras recetas especiales y déjate inspirar!
        </h2>
        <a
          href="#"
          className="inline-block mt-4 bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300"
        >
          Haz Click
        </a>
      </div>
    </div>
  );
};

export default Product;
