import React from "react";
import { ProductCard } from "../../components/ProductCard";
import { Advertisement } from "../../components/Advertisement";
// import bannerImage from "../../assets/bannerImage.png";
import truck from "../../assets/truck.png";
import certificate from "../../assets/certificate.png";
import priceTag from "../../assets/price-tag.png";
import coinsTabImg from "../../assets/coins-tab-img.png";
import blackLocPointer from "../../assets/black-loc-pointer.svg";
import "./index.scss";
import { FAQs } from "../../components/FAQ";
import { Footer } from "../../components/Footer";

let productListData = [
  {
    title: "1 gm SafeGold Coin (99.99%)",
    fullPrice: 4535,
    discountedPrice: 4235,
    imgAddress: require("../../assets/1gm_back.jpeg"),
  },
  {
    title: "5 gm SafeGold Bar (99.99%)",
    fullPrice: 4535,
    discountedPrice: 4235,
    imgAddress: require("../../assets/5gm_bar_9999_front.jpeg"),
  },
  {
    title: "5 gm SafeGold coin (99.99%)",
    fullPrice: 4535,
    discountedPrice: 4235,
    imgAddress: require("../../assets/5gm_coin_999_front.jpeg"),
  },
  {
    title: "10 gm SafeGold coin (99.99%)",
    fullPrice: 4535,
    discountedPrice: 4535,
    imgAddress: require("../../assets/10gm_bar_9999_front.jpeg"),
  },
  {
    title: "20 gm SafeGold coin (99.99%)",
    fullPrice: 4535,
    discountedPrice: 4235,
    imgAddress: require("../../assets/20gm_bar_9999_front.jpeg"),
  },
  {
    title: "1 gm SafeGold Coin (99.99%)",
    fullPrice: 4535,
    discountedPrice: 4235,
    imgAddress: require("../../assets/1gm_back.jpeg"),
  },
  {
    title: "5 gm SafeGold Bar (99.99%)",
    fullPrice: 4535,
    discountedPrice: 4235,
    imgAddress: require("../../assets/5gm_bar_9999_front.jpeg"),
  },
  {
    title: "5 gm SafeGold coin (99.99%)",
    fullPrice: 4535,
    discountedPrice: 4535,
    imgAddress: require("../../assets/5gm_coin_999_front.jpeg"),
  },
  {
    title: "10 gm SafeGold coin (99.99%)",
    fullPrice: 4535,
    discountedPrice: 4235,
    imgAddress: require("../../assets/10gm_bar_9999_front.jpeg"),
  },
  {
    title: "20 gm SafeGold coin (99.99%)",
    fullPrice: 4535,
    discountedPrice: 4535,
    imgAddress: require("../../assets/20gm_bar_9999_front.jpeg"),
  },
];
export const ProductList = () => {
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
          <h4 className="allProductsHeading">All Products</h4>
          <div className="pincodeDiv">
            <div className="inputForm">
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
        <ProductCard productListData={productListData} />
        <Advertisement />
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
