import React, { useState, useEffect } from "react";
import FetchApi from "../../services/FetchApi";
import { useParams, useNavigate } from "react-router-dom";

const CompanyEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
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
        setCategories(fetchedCategories);
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

  const handleCancel = () => {
    navigate("/company/products");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      await FetchApi.updateCompanyProduct(id, productDetails, token);
      console.log("Producto actualizado con éxito");
      navigate("/company/products");
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto rounded-lg p-6 bg-white shadow-xl sm:rounded-3xl dark:border-gray-600 my-7"
    >
      <h1 className="block mb-5 text-center text-2xl font-medium text-gray-900">
        Detalles y Edición del Producto
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Nombre del Producto
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={productDetails.name}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellew focus:border-yellew block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellew dark:focus:border-yellew"
          />
        </div>

        <div>
          <label
            htmlFor="id_category"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Categoría
          </label>
          <select
            id="id_category"
            name="id_category"
            value={productDetails.id_category}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
          >
            <option value="" disabled>
              Selecciona una categoría
            </option>
            {/* Mapeo de categorías */}
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="stock"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Stock
          </label>
          <input
            type="text"
            id="stock"
            name="stock"
            value={productDetails.stock}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Precio
          </label>
          <input
            type="text"
            id="price"
            name="price"
            value={productDetails.price}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellew focus:border-yellew block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellew dark:focus:border-yellew"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Descripción
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={productDetails.description}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="status"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Estado
          </label>
          <input
            type="text"
            id="status"
            name="status"
            value={productDetails.status}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        {/* Botones al final del formulario */}
        <div className="flex justify-end gap-3 mt-8">
          <button
            type="submit"
            className="text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
          >
            Actualizar Producto
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="text-black bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Cancelar
          </button>
        </div>
      </div>
    </form>
  );
};

export default CompanyEdit;
