import React from "react";
import logo from "../assets/logo/hms_logo_header.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar  navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand px-5">
            <img src={logo} alt="Logo" />
          </a>
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
            <ul className="navbar-nav fw-bolder  m-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#Offer">
                  Why HMS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  " href="#Features">
                  Features
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link  " href="#Get-value">
                  Get Value
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  " href="#pricing">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  " href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <div className="form-inline px-5 my-2 my-lg-0">
              <button
                className="btn btn-outline-danger fw-bold  Button-radius mx-2 px-3 my-2 "
                type="submit"
              >
                <i className="bi bi-box-arrow-in-right  h5    p-1"></i>
                Login
              </button>

              <button
                className="btn btn-success fw-bold    Button-radius   px-3     m-2 my-sm-0 text-white"
                type="submit"
                href="#contact"
              >
                <i class="bi bi-info-circle h5   p-1"></i>
                Request a demo
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
