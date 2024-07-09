import React, { useEffect, useState } from 'react';
import { ProductCard } from '../../components/ProductCard';
import truck from '../../assets/truck.png';
import certificate from '../../assets/certificate.png';
import priceTag from '../../assets/price-tag.png';
import coinsTabImg from '../../assets/coins-tab-img.png';
import blackLocPointer from '../../assets/black-loc-pointer.svg';
import './index.scss';
import { FAQs } from '../../components/FAQ';
import { Footer } from '../../components/Footer';
import axios from 'axios';

export const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://safegoldassignment-default-rtdb.firebaseio.com/products.json'
        );
        const data = response.data;

        // Convert the object to an array
        const productArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));

        setProducts(productArray);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="productListWrap">
      <div className="bannerWrapper">
        <div>
          <h1 className="bannerHeader">
            Get 24K Gold delivered to your doorstep
          </h1>
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
        <div>
          <img
            src={coinsTabImg}
            alt="Gold Coin Brick and card"
            width="600"
            height="400"
          />
        </div>
      </div>
      <div className="">
        <div className="pincodeWrapper">
          <h4 className="allProductsHeading">All Products</h4>
          <div className="pincodeDiv">
            <div className="inputForm">
              <img
                src={blackLocPointer}
                alt="Location pointer"
                className="locPointer"
              />
              <input
                type="tel"
                placeholder="Enter Pincode"
                numbers-only
                maxLength="6"
                minLength="6"
                className="pinCodeInput"
              />
              <span className="checkAvailabilityButton">
                Check Availability
              </span>
            </div>
          </div>
        </div>
        <ProductCard productListData={products} />
      </div>

      <div className="">
        <FAQs />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
