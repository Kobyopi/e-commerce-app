import React from 'react';
import './Filter.css';

const ProductFilter = ({ applyFilter }) => {
    const onFilterChange = (event) => {
        applyFilter(event.target.value);
    };

    return (
        <div>
            <label htmlFor="product-filter">Filter Products: </label>
            <select id="product-filter" onChange={onFilterChange}>
                <option value="all">All Products</option>
                <option value="onSale">On Sale</option>
                <option value="notOnSale">Unavailable</option>
                <option value="Gadget">Gadget</option>
                <option value="Device">Device</option>
                <option value="Tool">Tool</option>
                <option value="Book">Book</option>
                <option value="Shoe">Shoe</option>
                <option value="Jacket">Jacket</option>
            </select>
        </div>
    );
};

export default ProductFilter;
