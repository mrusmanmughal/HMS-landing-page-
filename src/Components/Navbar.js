import React from "react";
import logo from "../assets/logo/hms_logo_header.png";
import { BsBoxArrowInRight, BsFillPersonPlusFill } from "react-icons/bs";
const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand px-5">
          <img src={logo} alt="Logo" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav m-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Why HMS
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-bolder" href="#">
                Features
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link  " href="#">
                Get Value
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link  " href="#">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link  " href="#">
                Contact
              </a>
            </li>
          </ul>
          <form class="form-inline px-5 my-2 my-lg-0">
            <button
              class="btn btn-outline-danger mx-2 px-3 my-2 my-sm-0"
              type="submit"
            >
              <BsBoxArrowInRight />
              Login
            </button>
            <button
              class="btn btn-success  px-3 rounded border-1 m-2 my-sm-0"
              type="submit"
            >
              <BsFillPersonPlusFill />
              Sign up
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
