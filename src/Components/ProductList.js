import React, { useContext } from "react";
import "./ProductStyle.css";
import CartContext from "../Context/CartContext";

const ProductList = () => {
  const { products, addToCart } = useContext(CartContext);

  return (
    <div className="container-fluid bg-dark text-white">
      <h2 className="text-center pt-3">Product List</h2>
      <div className="row">
        {products.map((product) => (
          <div
            className="col-12 col-md-4 col-sm-6 col-lg-3 col-xl-3"
            key={product.id}
          >
            <div className="card my-4">
              <header>
                <img
                  className="card-img-top"
                  src={product.thumbnail}
                  alt={product.title}
                />
              </header>
              <div className="card-body text-center">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text text-black fw-bold">
                  $ {product.price}
                </p>
              </div>
              <button
                onClick={() => addToCart(product)}
                type="button"
                className="btn btn-primary"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;