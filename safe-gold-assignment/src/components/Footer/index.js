import React from 'react';
import safeGoldLogo from '../../assets/safegold-logo.svg';
import vistra from '../../assets/vistra.svg';
import footer2 from '../../assets/footer-2.svg';
import './index.scss';

export const Footer = () => {
  return (
    <>
      <div className="footer-outer">
        <div className="footer-inner">
          <div className="col col1">
            <div className="logoContainer">
              <img src={safeGoldLogo} alt="safeGold" />
            </div>
            <p>
              SafeGold is an organised and transparent method of buying and
              accumulating 24K physical gold in compliance with all applicable
              laws and regulations.
            </p>
            <div className="otherLogoContainer">
              <img src={vistra} className="vistra" alt="vistra" />
              <img src={footer2} className="footer2" alt="footer2" />
            </div>
            <div className="copyright-text">
              ©
              <span className="year">
                <script type="text/javascript">
                  year = new Date().getFullYear() document.write(year)
                </script>
                2024
                <noscript>2019</noscript>
              </span>
              SafeGold.com
            </div>
          </div>
          <div className="col col2">
            <a href="/about-us" target="_blank">
              About Us
            </a>
            <a href="/faq" target="_blank">
              FAQ
            </a>
            <a href="/terms-of-use" target="_blank">
              Terms Of Use
            </a>
          </div>
          <div className="col col3">
            <a href="/privacy-policy" target="_blank">
              Privacy Policy
            </a>
            <a href="/refund-policy" target="_blank">
              Refund &amp; Cancellation Policy
            </a>
            <a href="/grievance" target="_blank">
              Grievance
            </a>
          </div>
          <div className="col col4">
            <div className="address-item">
              <div className="image-container">
                <img
                  data-src="https://d2swkjwe31rb4i.cloudfront.net/images/components/footer/blue-footer-1.svg"
                  alt=""
                  className=" ls-is-cached lazyloaded"
                  src="https://d2swkjwe31rb4i.cloudfront.net/images/components/footer/blue-footer-1.svg"
                />
              </div>
              <div className="content-container">888 1000 800</div>
            </div>
            <div className="address-item">
              <div className="image-container">
                <img
                  data-src="https://d2swkjwe31rb4i.cloudfront.net/images/components/footer/blue-footer-2.svg"
                  alt=""
                  className=" ls-is-cached lazyloaded"
                  src="https://d2swkjwe31rb4i.cloudfront.net/images/components/footer/blue-footer-2.svg"
                />
              </div>
              <div className="content-container">care@safegold.in</div>
            </div>
            <div className="address-item">
              <div className="image-container">
                <img
                  data-src="https://d2swkjwe31rb4i.cloudfront.net/images/components/footer/blue-footer-3.svg"
                  alt=""
                  className=" ls-is-cached lazyloaded"
                  src="https://d2swkjwe31rb4i.cloudfront.net/images/components/footer/blue-footer-3.svg "
                />
              </div>
              <div className="content-container">
                Birla Centurion, Century Mills, P B Marg, Worli, Mumbai - 400030
              </div>
            </div>

            <div className="social-media-links">
              <a
                href="https://www.facebook.com/SafeGoldIndia/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="icon-container">
                  <img
                    src="https://d2swkjwe31rb4i.cloudfront.net/images/components/footer/facebook-blue.svg"
                    alt=""
                  />
                </div>
              </a>

              <a
                href="https://www.linkedin.com/company/safegold-india/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="icon-container">
                  <img
                    data-src="https://d2swkjwe31rb4i.cloudfront.net/images/components/footer/linkedin-blue.svg"
                    alt=""
                    className=" ls-is-cached lazyloaded"
                    src="https://d2swkjwe31rb4i.cloudfront.net/images/components/footer/linkedin-blue.svg"
                  />
                </div>
              </a>

              <a
                href="https://www.instagram.com/safegoldhq/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="icon-container">
                  <img
                    data-src="https://d2swkjwe31rb4i.cloudfront.net/images/components/footer/instagram-blue.svg"
                    alt=""
                    className=" ls-is-cached lazyloaded"
                    src="https://d2swkjwe31rb4i.cloudfront.net/images/components/footer/instagram-blue.svg"
                  />
                </div>
              </a>

              <a
                href="https://twitter.com/safegold_india"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="icon-container">
                  <img
                    data-src="https://d2swkjwe31rb4i.cloudfront.net/images/components/footer/twitter-blue.svg"
                    alt=""
                    className=" ls-is-cached lazyloaded"
                    src="https://d2swkjwe31rb4i.cloudfront.net/images/components/footer/twitter-blue.svg"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
