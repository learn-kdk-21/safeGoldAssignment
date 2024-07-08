import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import { Button } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import oneGmBack from '../../assets/1gm_back.jpeg';
import oneGmFront from '../../assets/1gm_front.jpeg';
import oneGmPacketBack from '../../assets/1gm_packet_back.jpeg';
import oneGmPacketFront from '../../assets/1gm_packet_front.jpeg';
import truck from '../../assets/truck.png';
import certificate from '../../assets/certificate.png';
import priceTag from '../../assets/price-tag.png';
import './index.scss';

const images = [oneGmBack, oneGmFront, oneGmPacketBack, oneGmPacketFront];
export const ProductDetails = () => {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };
  const settings = {
    customPaging: function (i) {
      console.log(i);
      return (
        <a className="previewImageWrap">
          <img src={images[i]} alt="bottomImage" />
        </a>
      );
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="productDetailsWrap">
      <div className="backAllProductsWrap">
        <ArrowBackIcon
          onClick={() => handleNavigate('/product-list')}
          style={{ color: '#bf9f41', cursor: 'pointer' }}
        />
        Back to All Products
      </div>
      <div className="productDetailsResponsiveWrap">
        <div className="imageSliderWrap">
          <Slider {...settings}>
            {images &&
              images.map((item, index) => (
                <div key={index} className="ProductImagesWrap">
                  <img src={item} alt="product" />
                </div>
              ))}
          </Slider>
        </div>
        <div className="productDetailsContentWrap">
          <div className="imageNameWrap">0.5 Gram Religious Jodi Coin</div>
          <div className="priceBuyNowButtonWrap">
            <div className="priceWrap">₹ 7,735.89</div>
            <Button
              sx={{
                height: '48px',
                borderRadius: '5px',
                minWidth: '120px',
                color: '#fff',
                padding: '14px 24px',
                backgroundColor: '#00bbb4',
                boxShadow: '0 5px 30px -10px rgb(0, 187, 180, .5)',
              }}
              variant="contained"
            >
              Buy Now <ArrowRightAltIcon sx={{ marginLeft: '10px' }} />
            </Button>
          </div>
          <div className="uspDetailsWrapper">
            <div className="uspDetailsDiv">
              <img
                src={certificate}
                alt="Gold Coin Brick and card"
                className="uspImg"
              />
              24K Pure Gold Quality Guaranteed
            </div>
            <div className="uspDetailsDiv">
              <img
                src={truck}
                alt="Gold Coin Brick and card"
                className="uspImg"
              />
              100% Secure with Delivery Insurance
            </div>
            <div className="uspDetailsDiv">
              <img
                src={priceTag}
                alt="Gold Coin Brick and card"
                className="uspImg"
              />
              Best Prices in the market
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
