import React, { useState } from "react";
import "./LoginForm.scss";

export const LoginForm = ({ onClose }) => {
  const [mobileNumber, setMobileNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    onClose();
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="loginText">Login / Signup</div>
      <div className="form-group">
        <div className="form-check-inline">
          <input
            type="radio"
            id="customer"
            name="userType"
            value="customer"
            className="form-check-input"
            defaultChecked
          />
          <label htmlFor="customer" className="radio_lb">
            Customer
          </label>
        </div>
        <div className="form-check-inline">
          <input type="radio" id="partner" name="userType" value="partner" />
          <label htmlFor="partner" className="radio_lb">
            Partner
          </label>
        </div>
      </div>
      <div className="form-label-group">
        <input
          id="inputMobile"
          type="text"
          placeholder="Enter Mobile Number"
          minLength={10}
          maxLength={10}
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <button type="btn">Proceed</button>
      </div>
      <p>
        By proceeding you agree to our <a href="#">Terms and Conditions</a>
      </p>
    </form>
  );
};
