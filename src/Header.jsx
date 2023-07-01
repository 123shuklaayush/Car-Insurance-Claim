import React from "react";
import logo from './banner/apex-ensure.png'
import './Header.css'
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">
            <Link to = "/">
            <img src={logo} width= "150px" alt="test" classNameName="img-logo"/>
            </Link>
          </a>
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
            <ul className="navbar-nav ms-auto list-items">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  View Policies
                </a>
              </li>
              <Link to = "/policy-details">
              <li className="nav-item">
                <a className="btn btn-primary" href="#">
                  Claim Policy
                </a>
              </li>
              </Link>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
