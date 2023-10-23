import React, { useState, useEffect, useContext, useMemo } from 'react';
import CartContext from './CartContext';

const CartState = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    // Adding product to Cart from Product page
    const addToCart = (product) => {
        // Check if the product is already in the cart based on its ID
        const isProductInCart = cart.some(item => item.id === product.id);
        if (!isProductInCart) {
            setCart([...cart, product])
        } else {
            alert("Item has already been added to Cart")
        }
    }

    //Removing Product from Cart
    const removeFromCart = (productToRemove) => {
        const updatedCart = cart.filter(item => item.id !== productToRemove.id);
        setCart(updatedCart);
    };

    // Fetching Products Data
    useEffect(() => {
        fetch("/product.json")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data.products)
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const contextValue = useMemo(() => ({
        products,
        cart,
        setCart,
        addToCart,
        removeFromCart,
        // eslint-disable-next-line
    }), [products, cart]);

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

// Custom Hook for Cart
export function useCart() {
    const { cart, setCart, removeFromCart } = useContext(CartContext);

    return { cart, setCart, removeFromCart };
}

export default CartState;