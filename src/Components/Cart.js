import React from "react";
import "./Cart.css";
import { useCart } from "../Context/CartState";

const Cart = () => {
  const { cart, setCart, removeFromCart } = useCart();

  const handleQuantityChange = (product, event) => {
    const newQuantity = parseInt(event.target.value, 10);

    const updatedCart = cart.map((item) => {
      if (item.id === product.id) {
        const updatedItem = {
          ...item,
          quantity: newQuantity,
          newPrice: !newQuantity ? item.price : item.price * newQuantity,
        };
        return updatedItem;
      }
      return item;
    });

    setCart(updatedCart);
  };

  // Calculate the subtotal by summing up the prices of all items in the cart
  const calculateSubTotal = () => {
    return cart.reduce(
      (total, item) => total + (!item.newPrice ? item.price : item.newPrice),
      0
    );
  };

  return (
    <div>
      <h1 className="cart-heading">Cart Items</h1>

      {cart && cart.length > 0 ? (
        <div className="container-fluid vh-80">
          {cart.map((product) => (
            <div key={product.id} className="product-container">
              <div className="product-img">
                <img
                  className="card-img-top"
                  src={product.thumbnail}
                  alt={product.title}
                />
              </div>
              <div className="product-details">
                <h3 className="card-title text-bold">{product.title}</h3>
                <h5>Description</h5>
                <span>{product.description}</span>
              </div>
              <div className="product-quantity">
                <select
                  value={product.quantity}
                  onChange={(e) => handleQuantityChange(product, e)}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              <div className="product-price">
                $ {!product.newPrice ? product.price : product.newPrice}
                <button
                className="product-remove btn btn-danger justify-content-end"
                onClick={() => removeFromCart(product)}
              >
                Remove
              </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="cart-empty">Your Cart is empty. Please add some items to the cart.</div>
      )}
      <div className="total-container vh-80">
        <div className="sub-total">
          <span className="sub-text">Sub Total:</span>
          <span className="sub-amount">$ {calculateSubTotal()}</span>
        </div>
        <div className="shipping">
          <span className="shipping-text">Shipping:</span>
          <span className="shipping-amount">Free</span>
        </div>
        <hr className="horizon-line" />
        <div className="total">
          <span className="total-text">Total:</span>
          <span className="total-amount">$ {calculateSubTotal()}</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;