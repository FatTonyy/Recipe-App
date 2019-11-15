import React from "react";
import Logo from "../images/logo.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm text-white navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">
        {/* <img src={Logo} width="154" height="21" alt="logo" /> */}
      </Link>
      <div className="collapse navbar-collapse show ml-sm-5">
        <ul className="navbar-nav">
          <li className="navbar-item">
            <Link className="nav-link active" to="/">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="nav-link" to="/recipe">
              Recipe
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
