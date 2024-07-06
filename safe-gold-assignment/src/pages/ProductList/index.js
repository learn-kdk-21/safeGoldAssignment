import React from "react";
import { ProductCard } from "../../components/ProductCard";
import { Advertisement } from "../../components/Advertisement";
// import bannerImage from "../../assets/bannerImage.png";
import truck from "../../assets/truck.png";
import certificate from "../../assets/certificate.png";
import priceTag from "../../assets/price-tag.png";
import coinsTabImg from "../../assets/coins-tab-img.png";
import blackLocPointer from "../../assets/black-loc-pointer.svg";
export const ProductList = () => {
  return (
    <>
      <div className="bannerWrapper">
        <div>
          <h1 className="bannerHeader">
            Get 24K Gold delivered to your doorstep
          </h1>
          <div className="uspDetailsWrapper">
            <div className="uspDetailsDiv">
              <img
                src={certificate}
                alt="Gold Coin Brick and card image"
                className="uspImg"
              />
              24K Pure Gold Quality Guaranteed
            </div>
            <div className="uspDetailsDiv">
              <img
                src={truck}
                alt="Gold Coin Brick and card image"
                className="uspImg"
              />
              100% Secure with Delivery Insurance
            </div>
            <div className="uspDetailsDiv">
              <img
                src={priceTag}
                alt="Gold Coin Brick and card image"
                className="uspImg"
              />
              Best Prices in the market
            </div>
          </div>
        </div>
        <div>
          <img
            src={coinsTabImg}
            alt="Gold Coin Brick and card image"
            width="600"
            height="400"
          />
        </div>
      </div>
      <div className="">
        <div className="pincodeWrapper">
          <h4 class="allProductsHeading">All Products</h4>
          <div className="pincodeDiv">
            <div>
              <img
                src={blackLocPointer}
                alt="Location pointer image"
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
        <ProductCard />
        <Advertisement />
      </div>

      <div className="">FAQ</div>
    </>
  );
};
