import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { Link, useNavigate } from 'react-router-dom';

const CompanyProductsTable = () => {
  const itemsPerPage = 6;
  const productsData = [
    {
      id: 1,
      name: "Producto 1",
      price: 10.99,
      stock: 20,
      status: "Active",
      category: "Electrónicos",
      companyId: 1,
    },
    {
      id: 2,
      name: "Producto 2",
      price: 15.99,
      stock: 15,
      status: "Inactive",
      category: "Ropa",
      companyId: 2,
    },
    {
      id: 3,
      name: "Producto 3",
      price: 25.99,
      stock: 30,
      status: "Active",
      category: "Electrónicos",
      companyId: 1,
    },
    {
      id: 4,
      name: "Producto 4",
      price: 10.99,
      stock: 20,
      status: "Active",
      category: "Electrónicos",
      companyId: 1,
    },
    {
      id: 5,
      name: "Producto 5",
      price: 15.99,
      stock: 15,
      status: "Inactive",
      category: "Ropa",
      companyId: 2,
    },
    {
      id: 6,
      name: "Producto 6",
      price: 25.99,
      stock: 30,
      status: "Active",
      category: "Electrónicos",
      companyId: 1,
    },
    {
      id: 7,
      name: "Producto 7",
      price: 10.99,
      stock: 20,
      status: "Active",
      category: "Electrónicos",
      companyId: 1,
    },
    {
      id: 8,
      name: "Producto 8",
      price: 15.99,
      stock: 15,
      status: "Inactive",
      category: "Ropa",
      companyId: 2,
    },
    {
      id: 9,
      name: "Producto 9",
      price: 25.99,
      stock: 30,
      status: "Active",
      category: "Electrónicos",
      companyId: 1,
    },
    {
      id: 10,
      name: "Producto 10",
      price: 10.99,
      stock: 20,
      status: "Active",
      category: "Electrónicos",
      companyId: 1,
    },
    {
      id: 11,
      name: "Producto 11",
      price: 15.99,
      stock: 15,
      status: "Inactive",
      category: "Ropa",
      companyId: 2,
    },
    {
      id: 12,
      name: "Producto 12",
      price: 25.99,
      stock: 30,
      status: "Active",
      category: "Electrónicos",
      companyId: 1,
    },
    {
      id: 13,
      name: "Producto 13",
      price: 10.99,
      stock: 20,
      status: "Active",
      category: "Electrónicos",
      companyId: 1,
    },
    {
      id: 14,
      name: "Producto 14",
      price: 15.99,
      stock: 15,
      status: "Inactive",
      category: "Ropa",
      companyId: 2,
    },
    {
      id: 15,
      name: "Producto 15",
      price: 25.99,
      stock: 30,
      status: "Active",
      category: "Electrónicos",
      companyId: 1,
    },
    {
      id: 16,
      name: "Producto 10",
      price: 10.99,
      stock: 20,
      status: "Active",
      category: "Electrónicos",
      companyId: 1,
    },
    {
      id: 17,
      name: "Producto 11",
      price: 15.99,
      stock: 15,
      status: "Inactive",
      category: "Ropa",
      companyId: 2,
    },
    {
      id: 18,
      name: "Producto 12",
      price: 25.99,
      stock: 30,
      status: "Active",
      category: "Electrónicos",
      companyId: 1,
    },
    {
      id: 19,
      name: "Producto 13",
      price: 10.99,
      stock: 20,
      status: "Active",
      category: "Electrónicos",
      companyId: 1,
    },
    {
      id: 20,
      name: "Producto 14",
      price: 15.99,
      stock: 15,
      status: "Inactive",
      category: "Ropa",
      companyId: 2,
    },
    {
      id: 21,
      name: "Producto 15",
      price: 25.99,
      stock: 30,
      status: "Active",
      category: "Electrónicos",
      companyId: 1,
    },

    // Agrega más datos según sea necesario
  ];

  const companies = [
    { id: 1, name: "Empresa A" },
    { id: 2, name: "Empresa B" },
    // Agrega más empresas según sea necesario
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCompanyChange = (event) => {
    const companyId = parseInt(event.target.value, 10);
    setSelectedCompany(companyId === 0 ? null : companyId);
    setCurrentPage(0); // Reiniciar la página cuando cambia la empresa
  };

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category === "Todas" ? null : category);
    setCurrentPage(0); // Reiniciar la página cuando cambia la categoría
  };

  const filteredProducts = productsData.filter(
    (product) =>
      (!selectedCompany || product.companyId === selectedCompany) &&
      (!selectedCategory || product.category === selectedCategory)
  );

  const offset = currentPage * itemsPerPage;
  const currentProducts = filteredProducts.slice(offset, offset + itemsPerPage);

  const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  // Función para eliminar un producto
  const deleteProduct = (id) => {
    // Implementa la lógica de eliminación aquí
    // Puedes usar setProducts para actualizar la lista después de eliminar
    console.log(`Eliminar producto con ID ${id}`);
  };

  return (
    <div className="my-4 mx-auto py-3 px-8 w-[80%] bg-white shadow-2xl dark:bg-black dark:text-white rounded-md">
      <h2 className="text-black text-2xl font-bold mb-4">
        Listado de Productos
      </h2>
      <div className="flex justify-between space-x-4 mb-4">
        <select
          onChange={handleCompanyChange}
          value={selectedCompany || 0}
          className="p-2 border rounded bg-white dark:bg-gray-800 dark:border-gray-700"
        >
          <option value={0}>Todas las Empresas</option>
          {companies.map((company) => (
            <option key={company.id} value={company.id}>
              {company.name}
            </option>
          ))}
        </select>
        <Link to={`/company/create`} className="mt-4 ml-[1%] bg-yellow-400 text-black py-2 px-4 rounded-xl text-center hover:bg-yellow-500 focus:outline-none focus:ring focus:border-yellow-600 self-end"> <i className="fa fa-plus-circle" aria-hidden="true"></i> Crear Producto </Link>
      </div>
      <div className="overflow-x-auto shadow-sm rounded-xl">
        <table className="w-full text-sm text-left bg-white dark:bg-gray-800 border dark:border-gray-700 ">
          <thead className="text-md text-white bg-black ">
            <tr>
              <th className="px-4 py-2">Nombre del Producto</th>
              <th className="px-4 py-2">Nombre de la Compañía</th>
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
                  {companies.find((company) => company.id === product.companyId)
                    ?.name || "Desconocida"}
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