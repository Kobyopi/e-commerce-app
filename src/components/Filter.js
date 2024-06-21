import React from 'react';
import './Filter.css';

const Filter = ({ filterProducts }) => {
    const handleFilterChange = (event) => {
        filterProducts(event.target.value); // Pass the selected value to filterProducts
    };

    return (
        <div className="filter-menu">
            <label>Filter products: </label>
            <select onChange={handleFilterChange}>
                <option value="all">All</option>
                <option value="onSale">On Sale</option>
                <option value="notOnSale">Not On Sale</option>
                <option value="Gadgets">Gadgets</option>
                <option value="Devices">Devices</option>
                <option value="Tools">Tools</option>
                <option value="Widgets">Widgets</option>
                <option value="Gizmos">Gizmos</option>
                <option value="Apparatus">Apparatus</option>
            </select>
        </div>
    );
};

export default Filter;
