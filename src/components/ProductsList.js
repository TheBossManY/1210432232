import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch products data from the API
    axios.get('/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000')
      .then(response => {
        setProducts(response.data);  // Assuming response.data is an array of products
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Top Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating}</p>
            <p>Discount: {product.discount}%</p>
            <p>Availability: {product.availability ? 'In Stock' : 'Out of Stock'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
