import React from 'react';
import './SortMenu.css';

const SortMenu = ({ sortProducts }) => {
    return (
        <div className="sort-menu">
            <label>Sort by price: </label>
            <select onChange={(e) => sortProducts(e.target.value)}>
                <option value="default">Default</option>
                <option value="lowToHigh">Low to High</option>
                <option value="highToLow">High to Low</option>
            </select>
        </div>
    );
};

export default SortMenu;
