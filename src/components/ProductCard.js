import React from 'react';

const ProductCard = ({ product, addToCart }) => {
    return (
        <div className="product-card" style={{ display: product.visible ? 'block' : 'none' }}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            {product.onSale && <p>On Sale!</p>}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default ProductCard;
