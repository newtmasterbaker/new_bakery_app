import React, { useState, useEffect } from 'react';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('/api/products');
            const data = await response.json();
            setProducts(data);
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h2>Product Listings</h2>
            <div className="product-list">
                {products.map((product) => (
                    <div key={product._id} className="product-item">
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
