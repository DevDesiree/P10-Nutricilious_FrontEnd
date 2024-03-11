import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { Link, useNavigate } from "react-router-dom";
import FetchApi from "../../services/FetchApi";

const CompanyProductsTable = () => {
  const itemsPerPage = 6;

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [productNameFilter, setProductNameFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obtener productos
        const accessToken = localStorage.getItem("token");
        const companyProducts = await FetchApi.getCompanyProducts(accessToken);
        setProducts(companyProducts);

        // Obtener categorías
        const fetchedCategories = await FetchApi.getCategories();
        setCategories(fetchedCategories);
      } catch (error) {
        console.error("Error al obtener datos:", error);
        setErrorMessage(
          "Error al obtener datos. Por favor, inténtalo de nuevo más tarde."
        );
      }
    };

    fetchData();
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      (selectedCategory === null ||
        selectedCategory === "" ||
        product.id_category == selectedCategory) &&
      (!productNameFilter ||
        product.name.toLowerCase().includes(productNameFilter.toLowerCase()))
  );

  const offset = currentPage * itemsPerPage;
  const currentProducts = filteredProducts.slice(offset, offset + itemsPerPage);

  const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
    console.log("Filtered Products:", filteredProducts);
  };

  // Función para eliminar un producto
  const deleteProduct = async (id) => {
    try {
      // Obtener el token de autenticación
      const token = localStorage.getItem("token");

      // Enviar solicitud de eliminación al servidor
      await FetchApi.deleteCompanyProduct(token, id);

      // Actualizar la lista de productos después de la eliminación
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== id)
      );

      console.log(`Producto con ID ${id} eliminado con éxito`);
    } catch (error) {
      console.error(`Error al eliminar el producto con ID ${id}:`, error);
      // Puedes agregar lógica adicional para manejar errores si es necesario
    }
  };

  return (
    <div className="my-4 mx-auto py-3 px-8 w-[80%] bg-white shadow-2xl dark:bg-black dark:text-white rounded-md">
      <h2 className="text-black text-2xl font-bold mb-4">
        Listado de Productos
      </h2>
      <div className="flex flex-wrap justify-between space-x-4 mb-4">
        <div className="flex flex-wrap gap-3">
          <select
            onChange={(e) => {
              setSelectedCategory(e.target.value);
            }}
            value={selectedCategory || "Todas"}
            className="p-2 border rounded bg-white dark:bg-gray-800 dark:border-gray-700"
          >
            <option value="">Todas las Categorías</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Filtrar por nombre"
            value={productNameFilter}
            onChange={(e) => setProductNameFilter(e.target.value)}
            className="p-2 border rounded bg-white dark:bg-gray-800 dark:border-gray-700"
          />
        </div>
        <Link
          to={`/company/create`}
          className="mt-4 ml-[1%] bg-yellow-400 text-black py-2 px-4 rounded-xl text-center hover:bg-yellow-500 focus:outline-none focus:ring focus:border-yellow-600 self-end"
        >
          {" "}
          <i className="fa fa-plus-circle" aria-hidden="true"></i> Crear
          Producto{" "}
        </Link>
      </div>
      <div className="overflow-x-auto shadow-sm rounded-xl">
        <table className="w-full text-sm text-left bg-white dark:bg-gray-800 border dark:border-gray-700 ">
          <thead className="text-md text-white bg-black ">
            <tr>
              <th className="px-4 py-2">Nombre del Producto</th>
              <th className="px-4 py-2">Categoria</th>
              <th className="px-4 py-2">Estado</th>
              <th className="px-4 py-2">Precio</th>
              <th className="px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((product) => (
              <tr
                key={product.id}
                className="bg-white dark:bg-gray-800 hover:bg-yellow-200"
              >
                <td className="px-4 py-2">{product.name}</td>
                <td className="px-4 py-2">
                  {categories.find(
                    (category) => category.id === product.id_category
                  )?.name || "Desconocida"}
                </td>
                <td className="px-4 py-2">{product.status}</td>
                <td className="px-4 py-2">{product.price}</td>
                <td className="px-4 py-2 flex flex-wrap gap-2">
                  <Link
                    to={`/company/edit`}
                    className="font-medium text-yellow-500 hover:text-yellow-900"
                  >
                    <i className="fas fa-pencil-alt" aria-hidden="true"></i>
                  </Link>
                  <Link
                    to={`/company/product`}
                    className="font-medium text-gray-800 hover:text-gray-500"
                  >
                    <i className="fa fa-eye"></i>
                  </Link>
                  <button
                    onClick={() => deleteProduct(product.id)}
                    className="font-medium text-red-600 hover:text-red-800"
                  >
                    <i className="fas fa-trash" aria-hidden="true"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName="pagination flex mt-4 justify-center"
        activeClassName="bg-yellow-400 text-black rounded"
        pageClassName="mx-2 p-2 cursor-pointer"
        previousLabel="<"
        previousClassName="mx-2 p-2 bg-black text-white cursor-pointer border rounded"
        nextLabel=">"
        nextClassName="mx-2 p-2 bg-black text-white cursor-pointer border rounded"
      />
    </div>
  );
};

export default CompanyProductsTable;
