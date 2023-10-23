import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartState";

function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Shop Cart
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Features
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#!"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Shop
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/">
                    All Products
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Popular Items
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    New Products
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <div className="d-flex">
            <Link
              to="/cart"
              className="d-flex align-items-center btn btn-outline-dark"
            >
              <BsFillCartFill className="mx-1" /> Cart ({cart.length})
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;