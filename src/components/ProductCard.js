import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, addToCart }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            {product.onSale ? (
                <p className="sale-badge">On Sale!</p>
            ) : (
                <p className="not-available">Not Available</p>
            )}
            <button onClick={() => addToCart(product)} disabled={!product.onSale}>
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;
