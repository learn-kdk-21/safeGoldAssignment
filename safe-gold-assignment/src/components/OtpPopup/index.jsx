import React, { useState } from 'react';
import './index.scss';
import { Button, TextField } from '@mui/material';

export const OtpPopup = ({
  handleClose = () => {},
  phoneNumber = '1000000018',
}) => {
  const [otp, setOtp] = useState('');

  const handleSubmit = (e) => {
    handleClose();

    // Handle form submission logic
  };

  return (
    <form className="otpFormWrap" onSubmit={handleSubmit}>
      <div className="otpHeaderText">Verify OTP</div>
      <div className="verifyMobileTextWrap">
        Verify Mobile Number <div className="numberWrap">{phoneNumber}</div>
        <div className="changeWrap">Change</div>
      </div>
      <TextField
        sx={{ margin: '20px 0' }}
        className="phoneInputWrap"
        maxLength={6}
        minLength={6}
        id="standard-basic"
        label="Enter One Time Password (OTP)"
        variant="standard"
        onChange={(e) => setOtp(e.target.value)}
        value={otp}
        fullWidth
      />
      <div className="disabledResendWrap">
        Didn't receive OTP? Resend in 162
      </div>
      <Button
        type="submit"
        sx={{
          textTransform: 'none',
          color: 'white !important',
          margin: '24px 0',
        }}
        variant="contained"
        fullWidth
      >
        Verify
      </Button>
      <p className="footerTextWrap">
        <a className="termsWrap" href="/">
          Send OTP over registered email
        </a>
      </p>
    </form>
  );
};
