import React, { useState, useEffect } from "react";
import FetchApi from "../../services/FetchApi";
import { useParams } from "react-router-dom";

const CompanyEdit = () => {
  const { id } = useParams();
  console.log(id);
  const [productDetails, setProductDetails] = useState({
    name: "",
    id_category: "",
    stock: "",
    price: "",
    description: "",
    status: "",
  });

  useEffect(() => {
    console.log(id);
    const loadProductDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        const productDetailsData = await FetchApi.getCompanyProduct(token, id);
        setProductDetails(productDetailsData);
      } catch (error) {
        console.error("Error al cargar los detalles del producto:", error);
      }
    };

    loadProductDetails();
  }, [id]);

  return (
    <div className="max-w-3xl mx-auto rounded-lg p-6 bg-white shadow-xl sm:rounded-3xl dark:border-gray-600 my-7">
      <h1 className="block mb-5 text-center text-2xl font-medium text-gray-900">
        Detalles del Producto
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
            Nombre del Producto
          </label>
          <p>{productDetails.name}</p>
        </div>

        <div>
          <label htmlFor="id_category" className="block mb-2 text-sm font-medium text-gray-900">
            Categoría
          </label>
          <p>{productDetails.id_category}</p>
        </div>

        <div>
          <label htmlFor="stock" className="block mb-2 text-sm font-medium text-gray-900">
            Stock
          </label>
          <p>{productDetails.stock}</p>
        </div>

        <div>
          <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">
            Precio
          </label>
          <p>{productDetails.price}</p>
        </div>

        <div>
          <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">
            Descripción
          </label>
          <p>{productDetails.description}</p>
        </div>

        <div className="mb-5">
          <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900">
            Estado
          </label>
          <p>{productDetails.status}</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyEdit;