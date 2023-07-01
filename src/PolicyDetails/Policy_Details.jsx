import React, { useState } from 'react';
import banner from "./../banner/Group 3.png";
import { Link } from 'react-router-dom';

function Policy_Details() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
  };

  return (
    <div>
      <div className="sec-1">
        <img src={banner} alt="banner-1" style={{ width: "100%" }} />
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Enter Your Policy Number
            </label>
            <input
              type="email"
              placeholder="Policy Number"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              Enter your policy number (e.g., XXXX-XXXX-XXXX)
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputText1" className="form-label">
              Enter Your Car Number
            </label>
            <input
              type="text"
              placeholder="Enter Car Number"
              className="form-control"
              id="exampleInputText1"
            />
            <div id="emailHelp" className="form-text">
              Enter your car number (e.g., XX-XX-XX-0000)
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputText1" className="form-label">
              Enter Your Car's Chassis Number
            </label>
            <input
              type="text"
              placeholder="Enter Chassis Number"
              className="form-control"
              id="exampleInputText1"
            />
            <div id="emailHelp" className="form-text">
            Enter your chassis number (e.g., 17 characters alphanumeric)
            </div>
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              onChange={handleCheckboxChange}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              You Agree to the <a href="#">Terms and Conditions</a>
            </label>
          </div>
          <Link to = "/checkout">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!isChecked}
          >
            Submit
          </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Policy_Details;
