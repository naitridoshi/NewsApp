import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar fixed-top navbar-expand-lg bg-primary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">NewsMonkey</span>
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
            <li className="nav-item me-3">
              <Link className="nav-link " aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link " to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link " to="/business">
                Business
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link " to="/entertainment">
                Entertainment
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link " to="/health">
                Health
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link " to="/science">
                Science
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link " to="/sports">
                Sports
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link " to="/technology">
                Technology
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
