import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const checkIsActive = ({ isActive }) => {
    return isActive ? "nav-link active" : "nav-link";
  };

  const links = [
    { name: "Homepage", path: "/" },
    { name: "About", path: "/about" },
    { name: "Posts", path: "/posts" },
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <h2 className="text-warning me-4">Simple Dark Blog</h2>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {links.map((link) => (
                <li key={link.name} className="nav-item">
                  <NavLink className={checkIsActive} to={link.path}>
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
