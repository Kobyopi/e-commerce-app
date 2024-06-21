import React from 'react';
import './Cart.css';

const Cart = ({ cart, updateCartQuantity }) => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="cart">
            <h2>Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {cart.map((item) => (
                        <li key={item.id}>
                            <img src={item.image} alt={item.name} />
                            <div>
                                <h3>{item.name}</h3>
                                <p>Price: ${item.price}</p>
                                <p>Quantity: {item.quantity}</p>
                                <button onClick={() => updateCartQuantity(item.id, item.quantity + 1)}>+1</button>
                                <button onClick={() => updateCartQuantity(item.id, item.quantity - 1)}>-1</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            <h3>Total: ${total.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;
