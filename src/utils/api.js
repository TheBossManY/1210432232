import axios from 'axios';
axios.get('/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000')


const API_BASE_URL = 'http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000';

export const fetchProducts = async (category, company) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`, {
      params: { category, company },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
