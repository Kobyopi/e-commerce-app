import React, { useState } from 'react';
import './SearchBar.css';

const ProductSearchBar = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchInputChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        onSearch(query);
    };

    return (
        <div className="product-search-bar">
            <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleSearchInputChange}
            />
        </div>
    );
};

export default ProductSearchBar;
