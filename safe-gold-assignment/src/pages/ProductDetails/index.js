import React, { useEffect, useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useLocation, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import axios from 'axios';
import { Button, Grid, Rating, Typography, Pagination } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import oneGmBack from '../../assets/1gm_back.jpeg';
import oneGmFront from '../../assets/1gm_front.jpeg';
import oneGmPacketBack from '../../assets/1gm_packet_back.jpeg';
import oneGmPacketFront from '../../assets/1gm_packet_front.jpeg';
import truck from '../../assets/truck.png';
import certificate from '../../assets/certificate.png';
import priceTag from '../../assets/price-tag.png';
import blackLocPointer from '../../assets/black-loc-pointer.svg';
import { Advertisement } from '../../components/Advertisement';
import { FAQs } from '../../components/FAQ';
import './index.scss';
import { SimilarProductSlider } from '../../components/SimilarProductsSlider';

const images = [oneGmBack, oneGmFront, oneGmPacketBack, oneGmPacketFront];

export const ProductDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [productData, setProductData] = useState({});
  const [page, setPage] = useState(1);
  const itemsPerPage = 2;

  const params = new URLSearchParams(location.search);
  const productId = params?.get('productId');

  const fetchProductDetails = async () => {
    try {
      const response = await axios.get(
        `https://safegoldassignment-default-rtdb.firebaseio.com/productsDetails/${productId}.json`
      );
      const data = response.data;
      setProductData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    if (productId) {
      fetchProductDetails();
    }
  }, [productId]);

  const handleNavigate = (path) => {
    navigate(path);
  };

  const settings = {
    customPaging: function (i) {
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
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const paginatedReviews = productData?.reviewDetails?.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

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
          <div className="imageNameWrap">{productData?.name}</div>
          <Rating
            sx={{ margin: '25px 0' }}
            name="read-only"
            value={productData?.reviewCount || 0}
            readOnly
          />

          <div className="priceDetailWrap">
            <div>Minting Charges</div>
            <div className="priceWrap">₹ {productData.mintingCharges}</div>
          </div>
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
          <div className="productDescriptionWrap">
            <div className="descriptionTitleWrap">Description</div>
            <ul>
              <li className="listItemWrap">
                SafeGold coins are set in 24 Karat Yellow Gold
              </li>
              <li className="listItemWrap">Guaranteed weight and purity</li>
              <li className="listItemWrap">
                Specially manufactured in state of the art facilities
              </li>
              <li className="listItemWrap">
                independent assay certification with zero negative tolerance for
                weight and purity
              </li>
              <li className="listItemWrap">
                Sealed in international quality packaging
                <Grid
                  container
                  spacing={0}
                  style={{
                    maxWidth: '600px',
                    margin: '5px 0',
                  }}
                >
                  <Grid item xs={12} sm={3}>
                    <Typography variant="body1">Material</Typography>
                  </Grid>
                  <Grid item xs={12} sm={1}>
                    <Typography variant="body1">:</Typography>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Typography fontWeight="bold" variant="body1">
                      Fine gold
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={3}>
                    <Typography variant="body1">Gold Purity</Typography>
                  </Grid>
                  <Grid item xs={12} sm={1}>
                    <Typography variant="body1">:</Typography>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Typography fontWeight="bold" variant="body1">
                      24 Karat, 99.5% pure gold
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={3}>
                    <Typography variant="body1">Weight</Typography>
                  </Grid>
                  <Grid item xs={12} sm={1}>
                    <Typography variant="body1">:</Typography>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Typography fontWeight="bold" variant="body1">
                      1 gm
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={3}>
                    <Typography variant="body1">Quality</Typography>
                  </Grid>
                  <Grid item xs={12} sm={1}>
                    <Typography variant="body1">:</Typography>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Typography fontWeight="bold" variant="body1">
                      Independently assay certified & zero negative weight
                      tolerance
                    </Typography>
                  </Grid>
                </Grid>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="productDetailAdvertisementWrap">
        <Advertisement />
      </div>

      <div className="reviewFrequentlyWrap">
        <div className="reviewSectionWrap">
          <div className="reviewTitleGroupWrap">
            <div>
              <div className="reviewTitleWrap">Reviews</div>
              <div className="reviewCountWrap">
                {productData?.totalReviews} Reviews
              </div>
            </div>
            <div className="averageReviewWrap">
              {productData?.averageReviews} Out of 5.0
            </div>
          </div>
          <div className="reviewListWrap">
            {paginatedReviews?.map((item, index) => (
              <div key={index} className="reviewWrap">
                <div>
                  <div className="nameGroupWrap">
                    <div className="NameInitialsWrap">SM</div>
                    <div>
                      <div className="nameWrap">{item?.name}</div>
                      <Rating
                        sx={{ margin: '25px 0' }}
                        name="read-only"
                        value={item?.reviewCount || 0}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="commentWrap">{item?.comment}</div>
                </div>
                <div className="dateWrap">{item?.date}</div>
              </div>
            ))}
          </div>
          <Pagination
            count={Math.ceil(
              (productData?.reviewDetails?.length || 0) / itemsPerPage
            )}
            page={page}
            onChange={handlePageChange}
            color="primary"
            variant="outlined"
            shape="rounded"
          />
        </div>
        <div className="frequentlyWrap">
          <FAQs />
        </div>
      </div>
      <div className="similarProductSliderSectionWrap">
        <SimilarProductSlider />
      </div>
    </div>
  );
};
