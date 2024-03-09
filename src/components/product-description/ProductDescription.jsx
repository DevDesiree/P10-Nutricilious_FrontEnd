import { useState } from "react";
import Tomate from "../../assets/images/Tomate.svg";

const ProductDescription = () => {
  const product = {
    name: "Tomate",
    category: "Frutas y Vegetales",
    description:
      "El tomate pera orgánico de Asturias ofrece un sabor único, cultivado en tierras fértiles sin pesticidas ni químicos. Con una textura firme y piel suave, es ideal para ensaladas y platos mediterráneos",
    price: 0.3,
  };

  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="flex flex-col w-[90%] m-auto lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 p-4 text-black">
      <div className="bg-white shadow-md p-4 lg:p-10 rounded-md lg:w-1/2">
        <img
          src={Tomate}
          alt="Imagen del Producto"
          className="w-[90%] lg:w-[70%] h-auto object-cover mx-auto rounded-md"
        />
        <h2 className="text-md font-normal w-[90%] lg:w-[70%] m-auto text-left mt-2">
          {product.name}
        </h2>
      </div>

      <div className="bg-white shadow-md p-4 rounded-md lg:w-1/2">
        <h3 className="text-md font-semibold mb-4 text-left">
          {product.category + " >" + " Fruta"}
        </h3>
        <div className=" flex flex-col w-4/5 m-auto pt-5">
          <div className="">
            <h3 className="text-md font-semibold mb-4 text-left">
              Descripción
            </h3>
            <p className="mb-4 text-left text-sm ">{product.description}</p>
          </div>
          <div className="flex justify-between mt-4 pt-5">
            <p className="text-lg font-bold">
              {product.price.toFixed(2) + " €/ud"}
            </p>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-2">
                <button
                  onClick={decrementQuantity}
                  className="bg-gray-200 px-2 py-0.5 rounded-[50%]"
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  onClick={incrementQuantity}
                  className="bg-gray-200 px-2 py-0.5 rounded-[50%]"
                >
                  +
                </button>
                <button className=" px-1 py-1 rounded-md hover:text-yellow-400">
                  <i className="fa fa-cart-plus" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
