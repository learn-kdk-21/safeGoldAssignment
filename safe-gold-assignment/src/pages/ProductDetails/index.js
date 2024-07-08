import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import './index.scss';
export const ProductDetails = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <div className="productDetailsWrap">
      <div className="backAllProductsWrap">
        <ArrowBackIcon
          onClick={() => handleNavigate('/product-list')}
          style={{ color: '#bf9f41' }}
        />{' '}
        Back to All Products
      </div>
      <div className="productDetailsResponsiveWrap">
        <div className="imageSliderWrap"></div>
        <div className="productDetailsContentWrap"></div>
      </div>
    </div>
  );
};
