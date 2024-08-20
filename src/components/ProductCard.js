import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image || 'default-image.jpg'} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Company: {product.company}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Discount: {product.discount}%</p>
      <p>{product.available ? "In Stock" : "Out of Stock"}</p>
    </div>
  );
};

export default ProductCard;
