import React, { useState } from 'react';

const ShoppingCart = () => {
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        setCart([...cart, product]);
    };

    const handleRemoveFromCart = (productId) => {
        setCart(cart.filter((item) => item._id !== productId));
    };

    const handleCheckout = async () => {
        // Implement checkout logic here
    };

    return (
        <div>
            <h2>Shopping Cart</h2>
            <div className="cart-items">
                {cart.map((item) => (
                    <div key={item._id} className="cart-item">
                        <h3>{item.name}</h3>
                        <p>${item.price}</p>
                        <button onClick={() => handleRemoveFromCart(item._id)}>Remove</button>
                    </div>
                ))}
            </div>
            <button onClick={handleCheckout}>Checkout</button>
        </div>
    );
};

export default ShoppingCart;
