import React, { useState } from 'react';
import ProductList from './ProductList';
import Filter from './Filter';
import SortMenu from './SortMenu';
import Cart from './Cart';
import SearchBar from './SearchBar';

const HomePage = () => {
    const initialProducts = [
        { id: 1, name: 'Product 1', price: 100, onSale: true, visible: true, image: 'product1.jpg' },
        { id: 2, name: 'Product 2', price: 200, onSale: false, visible: true, image: 'product2.jpg' },
        { id: 3, name: 'Product 3', price: 150, onSale: true, visible: true, image: 'product3.jpg' },
        // More products should be added
    ];


    const [products, setProducts] = useState(initialProducts);
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    }

    const filterProducts = (criteria) => {
        // Implement filter logic here
    };

    const sortProducts = (order) => {
        // Implement sort logic here
    };

    const handleSearch = (query) => {
        const filteredProducts = initialProducts.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
    );
    setProducts(filteredProducts);
    }

    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            <Filter filterProducts={filterProducts} />
            <SortMenu sortProducts={sortProducts} />
            <ProductList products={products} addToCart={addToCart} />
            <Cart cart={cart} />
        </div>
    );
};

export default HomePage;
