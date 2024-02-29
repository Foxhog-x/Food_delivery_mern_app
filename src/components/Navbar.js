import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Badge } from "react-bootstrap-v5";
import Modal from "../Modal";
import Cart from "../screens/Cart";

export const Navbar = () => {
  const [cartView, setCartView] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/Login");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-success text-white">
        <div className="container-fluid">
          <Link className="navbar-brand bold" to={"/"}>
            🍱FOOD & FOOD
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto  ">
              <li className="nav-item ">
                <Link
                  className="nav-link active fs-5  "
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              {localStorage.getItem("authToken") ? (
                <li className="nav-item me-auto">
                  <Link
                    className="nav-link active fs-5  "
                    aria-current="page"
                    to="/"
                  >
                    My Orders
                  </Link>
                </li>
              ) : (
                ""
              )}
            </ul>

            {!localStorage.getItem("authToken") ? (
              <div className="d-flex">
                <Link className="btn bg-white text-success mx-1" to="/Login">
                  Login
                </Link>
                <Link className="btn bg-white text-success mx-1" to="/Signup">
                  Signup
                </Link>
              </div>
            ) : (
              <div className="d-flex">
                <div
                  className="btn bg-white text-success mx-1"
                  onClick={() => {
                    setCartView(true);
                  }}
                >
                  My Cart{"  "}
                  {
                    <Badge pill bg="danger">
                      2
                    </Badge>
                  }
                  <div></div>
                  {cartView ? (
                    <Modal onClose={() => setCartView(false)}>
                      {" "}
                      <Cart />
                    </Modal>
                  ) : null}
                  <div>
                    <Link
                      className="btn bg-white text-danger mx-1"
                      to="/"
                      onClick={handleLogout}
                    >
                      LogOut
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};
