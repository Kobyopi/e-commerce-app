import React, { useState } from 'react';
import ProductList from './ProductList';
import Filter from './Filter';
import SortMenu from './SortMenu';
import Cart from './Cart';
import SearchBar from './SearchBar';
import Modal from './Modal';
import SignUpForm from './SignUpForm';

const HomePage = () => {
    const initialProducts = [
        { id: 1, name: 'Product 1', price: 100, onSale: true, visible: true, image: 'product1.jpg' },
        { id: 2, name: 'Product 2', price: 200, onSale: false, visible: true, image: 'product2.jpg' },
        { id: 3, name: 'Product 3', price: 150, onSale: true, visible: true, image: 'product3.jpg' },
        // More products should be added
    ];


    const [products, setProducts] = useState(initialProducts);
    const [cart, setCart] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

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

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const redirectToFacebook = () => {
        window.location.href = 'https://www.facebook.com';
    };

    const openLanguageSwitcher = () => {
        alert('Language switcher opened!');
    };

    return (
        <div>
            <div className="button-group">
                <button onClick={openModal}>Sign Up</button>
                <button onClick={redirectToFacebook}>Go to Facebook</button>
                <button onClick={openLanguageSwitcher}>Switch Language</button>
            </div>
            <SearchBar onSearch={handleSearch} />
            <Filter filterProducts={filterProducts} />
            <SortMenu sortProducts={sortProducts} />
            <ProductList products={products} addToCart={addToCart} />
            <Cart cart={cart} />
            <Modal show={isModalOpen} onClose={closeModal}>
                <SignUpForm />
            </Modal>
        </div>
    );
};

export default HomePage;
