import React, { useState } from 'react';
import ProductList from './ProductList';
import Filter from './Filter';
import SortMenu from './SortMenu';
import Cart from './Cart';
import SearchBar from './SearchBar';
import Modal from './Modal';
import SignUpForm from './SignUpForm';
import productsData from '../data/products';

const HomePage = () => {
    const [products, setProducts] = useState(productsData);
    const [cart, setCart] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [sortedOrder, setSortedOrder] = useState('default');

    const addToCart = (product) => {
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
            setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const updateCartQuantity = (productId, quantity) => {
        if (quantity <= 0) {
            setCart(cart.filter(item => item.id !== productId));
        } else {
            setCart(cart.map(item => item.id === productId ? { ...item, quantity } : item));
        }
    };

    const sortProducts = (order) => {
        setSortedOrder(order);
        let sortedProducts;
        switch (order) {
            case 'lowToHigh':
                sortedProducts = [...products].sort((a, b) => a.price - b.price);
                break;
            case 'highToLow':
                sortedProducts = [...products].sort((a, b) => b.price - a.price);
                break;
            default:
                sortedProducts = productsData; // Default order (can be customized)
                break;
        }
        setProducts(sortedProducts);
    };

    const filterProducts = (criteria) => {
        // Implement filter logic here
    };

    const handleSearch = (query) => {
        const filteredProducts = productsData.filter(product =>
            product.name.toLowerCase().includes(query.toLowerCase())
        );
        setProducts(filteredProducts);
    };

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
            <Cart cart={cart} updateCartQuantity={updateCartQuantity} />
            <Modal show={isModalOpen} onClose={closeModal}>
                <SignUpForm />
            </Modal>
        </div>
    );
};

export default HomePage;
