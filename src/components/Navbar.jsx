import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const checkIsActive = ({ isActive }) => {
    return isActive ? "nav-link active" : "nav-link";
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <h2 className="text-warning me-4">Simple Dark Blog</h2>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NavLink className={checkIsActive} to="/">
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className={checkIsActive} to="/about">
                  About
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className={checkIsActive} to="/posts">
                  Posts
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
