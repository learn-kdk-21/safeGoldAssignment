import React from "react";
import safeGoldLogo from "../../assets/safegold-logo.svg";
import vistra from "../../assets/vistra.svg";
import footer2 from "../../assets/footer-2.svg";
import "./index.scss";
import blueFooter1Phone from "../../assets/blue-footer-1-phone.svg";
import blueFooter2Mail from "../../assets/blue-footer-2-mail.svg";
import blueFooter3Location from "../../assets/blue-footer-3-location.svg";
import twitterBlue from "../../assets/twitter-blue.svg";
import linkedInBlue from "../../assets/linkedin-blue.svg";
import instagramBlue from "../../assets/instagram-blue.svg";
import facebookBlue from "../../assets/facebook-blue.svg";

export const Footer = () => {
  return (
    <>
      <div className="footer-outer">
        <div className="footer-inner">
          <div className="col col1">
            <div className="logoContainer">
              <img src={safeGoldLogo} />
            </div>
            <p>
              SafeGold is an organised and transparent method of buying and
              accumulating 24K physical gold in compliance with all applicable
              laws and regulations.
            </p>
            <div className="otherLogoContainer">
              <img src={vistra} className="vistra" />
              <img src={footer2} className="footer2" />
            </div>
            <div class="copyright-text">
              ©
              <span class="year">
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
          <div class="col col4">
            <div class="address-item">
              <div class="image-container">
                <img
                  data-src="https://d2swkjwe31rb4i.cloudfront.net/images/components/footer/blue-footer-1.svg"
                  alt=""
                  class=" ls-is-cached lazyloaded"
                  src="https://d2swkjwe31rb4i.cloudfront.net/images/components/footer/blue-footer-1.svg"
                />
              </div>
              <div class="content-container">888 1000 800</div>
            </div>
            <div class="address-item">
              <div class="image-container">
                <img
                  data-src="https://d2swkjwe31rb4i.cloudfront.net/images/components/footer/blue-footer-2.svg"
                  alt=""
                  class=" ls-is-cached lazyloaded"
                  src="https://d2swkjwe31rb4i.cloudfront.net/images/components/footer/blue-footer-2.svg"
                />
              </div>
              <div class="content-container">care@safegold.in</div>
            </div>
            <div class="address-item">
              <div class="image-container">
                <img
                  data-src="https://d2swkjwe31rb4i.cloudfront.net/images/components/footer/blue-footer-3.svg"
                  alt=""
                  class=" ls-is-cached lazyloaded"
                  src="https://d2swkjwe31rb4i.cloudfront.net/images/components/footer/blue-footer-3.svg "
                />
              </div>
              <div class="content-container">
                Birla Centurion, Century Mills, P B Marg, Worli, Mumbai - 400030
              </div>
            </div>

            <div class="social-media-links">
              <a href="https://www.facebook.com/SafeGoldIndia/" target="_blank">
                <div class="icon-container">
                  <img
                    src="https://d2swkjwe31rb4i.cloudfront.net/images/components/footer/facebook-blue.svg"
                    alt=""
                  />
                </div>
              </a>

              <a
                href="https://www.linkedin.com/company/safegold-india/"
                target="_blank"
              >
                <div class="icon-container">
                  <img
                    data-src="https://d2swkjwe31rb4i.cloudfront.net/images/components/footer/linkedin-blue.svg"
                    alt=""
                    class=" ls-is-cached lazyloaded"
                    src="https://d2swkjwe31rb4i.cloudfront.net/images/components/footer/linkedin-blue.svg"
                  />
                </div>
              </a>

              <a href="https://www.instagram.com/safegoldhq/" target="_blank">
                <div class="icon-container">
                  <img
                    data-src="https://d2swkjwe31rb4i.cloudfront.net/images/components/footer/instagram-blue.svg"
                    alt=""
                    class=" ls-is-cached lazyloaded"
                    src="https://d2swkjwe31rb4i.cloudfront.net/images/components/footer/instagram-blue.svg"
                  />
                </div>
              </a>

              <a href="https://twitter.com/safegold_india" target="_blank">
                <div class="icon-container">
                  <img
                    data-src="https://d2swkjwe31rb4i.cloudfront.net/images/components/footer/twitter-blue.svg"
                    alt=""
                    class=" ls-is-cached lazyloaded"
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
