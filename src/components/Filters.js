import React from 'react';

const Filters = ({ categories, onFilterChange }) => {
  return (
    <div>
      <h4>Filters</h4>
      <select onChange={(e) => onFilterChange(e.target.value)}>
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
