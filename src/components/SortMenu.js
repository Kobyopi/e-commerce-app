import React from 'react';

const SortMenu = ({ sortProducts }) => {
    const handleSortChange = (e) => {
        sortProducts(e.target.value);
    };

    return (
        <div>
            <label>Sort by: </label>
            <select onChange={handleSortChange}>
                <option value="priceAsc">Price (Low to High)</option>
                <option value="priceDesc">Price (High to Low)</option>
            </select>
        </div>
    );
};

export default SortMenu;
