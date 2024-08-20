import React from 'react';

const ProductDetail = ({ product }) => {
  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image || 'default-image.jpg'} alt={product.name} />
      <p>Company: {product.company}</p>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Discount: {product.discount}%</p>
      <p>{product.available ? "In Stock" : "Out of Stock"}</p>
    </div>
  );
};

export default ProductDetail;
