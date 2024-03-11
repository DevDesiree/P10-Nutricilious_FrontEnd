import React, { useState, useEffect } from "react";
import FetchApi from "../../services/FetchApi";
import { useParams } from "react-router-dom";

const obtenerTokenDeAutenticacion = () => {
  const token = localStorage.getItem("token");
  console.log("Token:", token);
  return token;
};
const CompanyEdit = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState({
    name: "",
    id_category: "",
    stock: "",
    price: "",
    description: "",
    status: "",
  });

  useEffect(() => {
    const loadProductDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        const fetchedCategories = await FetchApi.getCategories();
        const productDetailsData = await FetchApi.getCompanyProduct(token, id);
        setProductDetails(productDetailsData);
      } catch (error) {
        console.error("Error al cargar los detalles del producto:", error);
      }
    };

    loadProductDetails();
  }, [id]);

  const handleInputChange = (e) => {
    setProductDetails({
      ...productDetails,
      [e.target.name]: e.target.value,
    });
  };

  console.log(productDetails);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      await FetchApi.updateCompanyProduct(id, productDetails, token);
      console.log("Producto actualizado con éxito");
      // Puedes redirigir a otra página o realizar otras acciones después de la actualización
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto rounded-lg p-6 bg-white shadow-xl sm:rounded-3xl dark:border-gray-600 my-7">
      <h1 className="block mb-5 text-center text-2xl font-medium text-gray-900">
        Detalles y Edición del Producto
      </h1>
      <form onSubmit={handleSubmit}>
        {/* Campos del formulario */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
            Nombre del Producto
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={productDetails.name}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="id_category" className="block mb-2 text-sm font-medium text-gray-900">
            Categoría
          </label>
          <select
            id="id_category"
            name="id_category"
            value={productDetails.id_category}
            onChange={handleInputChange}
          >
             <option value="" disabled>
                Selecciona una categoría
              </option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
          </select>
        </div>

        <div>
          <label htmlFor="stock" className="block mb-2 text-sm font-medium text-gray-900">
            Stock
          </label>
          <input
            type="text"
            id="stock"
            name="stock"
            value={productDetails.stock}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">
            Precio
          </label>
          <input
            type="text"
            id="price"
            name="price"
            value={productDetails.price}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">
            Descripción
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={productDetails.description}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900">
            Estado
          </label>
          <input
            type="text"
            id="status"
            name="status"
            value={productDetails.status}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit">Actualizar Producto</button>
      </form>
    </div>
  );
};

export default CompanyEdit;
