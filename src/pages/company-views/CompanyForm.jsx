import React, { useState, useEffect } from "react";
import FetchApi from "../../services/FetchApi";

const CompanyForm = () => {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    id_category: "",  
    stock: "",
    price: "",
    description: "",
    status: "",
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const fetchedCategories = await FetchApi.getCategories();
        setCategories(fetchedCategories);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCategoryChange = (e) => {
    setFormData({
      ...formData,
      id_category: e.target.value, 
    });
  };

  // ...

const handleSubmit = async (e) => {
  e.preventDefault();

 // Verificar que los campos name, id_category y stock estén llenos antes de enviar la solicitud
 if (!formData.name || !formData.id_category || !formData.stock) {
  console.error("Los campos name, id_category y stock son obligatorios.");
  return;
}

  try {
    // Obtener el token de autenticación
    const token = localStorage.getItem("token");
    console.log("Token:", token);
    console.log(formData);

    // Asegúrate de que el campo sea 'category' en lugar de 'id_category'
    await FetchApi.setCompanyProduct(token, {
      ...formData,
      id_category: formData.id_category,
    });

    // Lógica adicional después de la creación (por ejemplo, redireccionar)
    console.log("Producto creado con éxito");
  } catch (error) {
    if (error.response && error.response.status === 422) {
      console.error("Error de validación:", error.response.data.errors);
      // Mostrar los errores en el formulario
    } else if (error.response && error.response.status === 401) {
      console.error("Error de autenticación:", error.response.data);
      // Manejar la falta de autorización (por ejemplo, redirigir a la página de inicio de sesión)
    } else {
      console.error("Error al crear el producto:", error);
    }
  }
};

// ...


  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto rounded-lg p-6 bg-white shadow-xl sm:rounded-3xl dark:border-gray-600 my-7"
    >
      <h1 className="block mb-5 text-center text-2xl font-medium text-gray-900">
        Crear Producto
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Nombre del Producto
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-gray-300 dark:text-gray-400">
              <i className="fa fa-shopping-basket" aria-hidden="true"></i>
            </div>
            <input
              type="text"
              id="name"
              name="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellew focus:border-yellew block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellew dark:focus:border-yellew"
              placeholder="Galletas"
              required
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="id_category"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Categoria
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-gray-300 dark:text-gray-400">
              <i className="fa fa-tag" aria-hidden="true"></i>
            </div>
            <select
              id="category"
              name="id_category"
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
              onChange={handleCategoryChange}
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
        </div>

        <div>
          <label
            htmlFor="stock"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Stock
          </label>
          <div className="relative">
            <input
              type="number"
              id="stock"
              name="stock"
              min="0"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Cantidad disponible"
              required
              value={formData.stock}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Precio
          </label>
          <div className="relative">
            <input
              type="number"
              id="price"
              name="price"
              min="0"
              step="0.01"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellew focus:border-yellew block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellew dark:focus:border-yellew"
              placeholder="En euros"
              required
              value={formData.price}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Descripción
          </label>
          <div className="relative">
            <textarea
              id="description"
              name="description"
              rows="3"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Descripción del Producto"
              required
              value={formData.description}
              onChange={handleInputChange}
            ></textarea>
          </div>
        </div>

        <div className="mb-5">
          <label
            htmlFor="stock_confirmation"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Estado
          </label>
          <div className="relative">
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={(e) =>
                setFormData({ ...formData, status: e.target.value })
              }
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="" disabled>
                Selecciona un estado
              </option>
              <option value="Active">Activo</option>
              <option value="Inactive">Inactivo</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-8">
        <button
          type="submit"
          className="text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
        >
          Registrar Producto
        </button>
      </div>
    </form>
  );
};

export default CompanyForm;
