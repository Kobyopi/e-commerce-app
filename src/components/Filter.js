import React from 'react';
import './Filter.css';

const Filter = ({ filterProducts }) => {
    return (
        <div className="filter-menu">
            <label>Filter products: </label>
            <select onChange={(e) => filterProducts(e.target.value)}>
                <option value="all">All</option>
                <option value="onSale">On Sale</option>
                <option value="notOnSale">Not On Sale</option>
            </select>
        </div>
    );
};

export default Filter;
