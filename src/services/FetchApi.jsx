/* eslint-disable no-useless-catch */
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';

const FetchApi = {

  login: async (credentials) => {
    try {
      const response = await axios.post(`${API_URL}/login`, credentials);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Llamar AdminProductsController@index
  getProducts: async () => {
    try {
      const response = await axios.get(`${API_URL}/products`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Llamar AdminProductsController@show
  getAdminProductById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/admin/products/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Llamar CompanyProductsController@index
  getCompanyProducts: async (accessToken) => {
    try {
      const response = await axios.get(`${API_URL}/company/products`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // llamar UserProductsController@addToCart
  addToCart: async (productId, productQuantity, accessToken) => {
    try {
      const response = await axios.post(
        `${API_URL}/user/add-to-cart`,
        {
          id_product: productId,
          product_quantity: productQuantity,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Llamar CompanyProductsController@store
  getCategories: async () => {
    try {
      const response = await axios.get(`${API_URL}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  setCompanyProduct: async (accessToken, formData) => {
    try {
      const response = await axios.post(
        `${API_URL}/company/products/create`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 422) {
        console.error("Error de validación:", error.response.data.errors);
      }
      throw error;
    }
  },
  // updateCompanyProduct: async (id) => {
  //   try {
  //     const response = await axios.get(`${API_URL}/company/products/${id}`);
  //     return response.data;
  //   } catch (error) {
  //     throw error;
  //   }
  // },

  getCompanyProduct: async (accessToken, id) => {
    try {
      const response = await axios.get(`${API_URL}/company/products/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteCompanyProduct: async (accessToken, productId) => {
    try {
      const response = await axios.delete(`${API_URL}/company/products/delete/${productId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  
};

export default FetchApi;
