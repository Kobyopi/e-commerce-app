import React from 'react';

const Filter = ({ filterProducts }) => {
    const handleFilterChange = (e) => {
        filterProducts(e.target.value);
    };

    return (
        <div>
            <label>Filter: </label>
            <select onChange={handleFilterChange}>
                <option value="all">All</option>
                <option value="onSale">On Sale</option>
                <option value="notOnSale">Not On Sale</option>
            </select>
        </div>
    );
};

export default Filter;
