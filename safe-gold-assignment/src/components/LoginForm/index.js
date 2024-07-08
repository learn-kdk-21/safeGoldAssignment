import React, { useState } from 'react';
import './LoginForm.scss';
import { Button, TextField } from '@mui/material';

export const LoginForm = ({ onClick = () => {}, handleClose = () => {} }) => {
  const [mobileNumber, setMobileNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    handleClose();
  };

  return (
    <form className="loginForm" onSubmit={handleSubmit}>
      <div className="loginHeaderText">Login / Signup</div>
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
      <TextField
        sx={{ margin: '20px 0' }}
        className="phoneInputWrap"
        maxLength={10}
        minLength={10}
        id="standard-basic"
        label="Enter Mobile Number"
        variant="standard"
        onChange={(e) => setMobileNumber(e.target.value)}
        value={mobileNumber}
        fullWidth
      />
      <Button
        onClick={() => onClick()}
        sx={{
          textTransform: 'none',
          color: 'white !important',
          margin: '24px 0',
        }}
        variant="contained"
        fullWidth
      >
        Proceed
      </Button>
      <p className="footerTextWrap">
        By proceeding you agree to our{' '}
        <a className="termsWrap" href="/">
          Terms and Conditions
        </a>
      </p>
    </form>
  );
};
