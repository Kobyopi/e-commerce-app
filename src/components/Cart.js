import React from 'react';

const Cart = ({ cart }) => {
    const total = cart.reduce((acc, product) => acc + product.price, 0);

    return (
        <div className="cart">
            <h2>Cart</h2>
            <ul>
                {cart.map((product, index) => (
                    <li key={index}>{product.name} - ${product.price}</li>
                ))}
            </ul>
            <p>Total: ${total}</p>
        </div>
    );
};

export default Cart;
