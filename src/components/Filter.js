import React from 'react';

const Filter = ({ filterProducts, categories, selectedCategory }) => {
    const handleCategoryChange = (event) => {
        filterProducts(event.target.value);
    };

    return (
        <div className="filter-menu">
            <select value={selectedCategory} onChange={handleCategoryChange}>
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Filter;
