import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../utils/api';
import ProductCard from '../components/ProductCard';
import Filters from '../components/Filters';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
      setFilteredProducts(data);
      // Extract unique categories for filtering
      const uniqueCategories = [...new Set(data.map(product => product.category))];
      setCategories(uniqueCategories);
    };

    getProducts();
  }, []);

  const handleFilterChange = (category) => {
    if (category) {
      setFilteredProducts(products.filter(product => product.category === category));
    } else {
      setFilteredProducts(products);
    }
  };

  return (
    <div>
      <h1>All Products</h1>
      <Filters categories={categories} onFilterChange={handleFilterChange} />
      <div className="product-list">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
