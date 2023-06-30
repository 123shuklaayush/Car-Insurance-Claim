import React from "react";
import logo from './banner/apex-ensure.png'
import './Header.css'
function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={logo} width= "150px" alt="test" className="img-logo"/>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto list-items">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  View Policies
                </a>
              </li>
              <li class="nav-item">
                <a class="btn btn-primary" href="#">
                  Claim Policy
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
