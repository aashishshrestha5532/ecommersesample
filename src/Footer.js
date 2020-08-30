import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__top">
          <ul className="footer__topRow">
            <li className="footer__topRowOption">
              <div className="footer__topRowImageWrapper">
                <div className="footer__topRowImageCircle">
                  <img
                    className="footer__topRowImage"
                    alt=""
                    src="https://www.gyapu.com/public/media/D9C0AC8ED606F26-percentage.png"
                  />
                </div>
              </div>
              <label>0 % commison</label>
            </li>
            <li className="footer__topRowOption">
              <div className="footer__topRowImageWrapper">
                <div className="footer__topRowImageCircle">
                  <img
                    className="footer__topRowImage"
                    alt=""
                    src="https://www.gyapu.com/public/files/07BF1839CC3E951-gyapu_delivery.png"
                  />
                </div>
              </div>
              <label>Free Delivery</label>
            </li>
            <li className="footer__topRowOption">
              <div className="footer__topRowImageWrapper">
                <div className="footer__topRowImageCircle">
                  <img
                    className="footer__topRowImage"
                    alt=""
                    src="https://www.gyapu.com/public/media/559D4A417BEAAE5-insurance.png"
                  />
                </div>
              </div>
              <label>Insurance Covered</label>
            </li>
            <li className="footer__topRowOption">
              <div className="footer__topRowImageWrapper">
                <div className="footer__topRowImageCircle">
                  <img
                    className="footer__topRowImage"
                    alt=""
                    src="https://www.gyapu.com/public/media/62ECF370C480EFF-deals.png"
                  />
                </div>
              </div>
              <label>Daily Deals</label>
            </li>
            <li className="footer__topRowOption">
              <div className="footer__topRowImageWrapper">
                <div className="footer__topRowImageCircle">
                  <img
                    className="footer__topRowImage"
                    alt=""
                    src="https://www.gyapu.com/public/media/E0A0AD4C30A4C66-shareAndEarn.png"
                  />
                </div>
              </div>
              <label>Share and Earn</label>
            </li>{" "}
            <li className="footer__topRowOption">
              <div className="footer__topRowImageWrapper">
                <div className="footer__topRowImageCircle">
                  <img
                    className="footer__topRowImage"
                    alt=""
                    src="https://www.gyapu.com/public/media/E524D32D61E6955-cashback.png"
                  />
                </div>
              </div>
              <label>Cashback</label>
            </li>
          </ul>
        </div>
        <div className="footer__bottom">
          <div className="footer__bottomRow">
            <div className="footer__bottomCol">
              <ul>
                <label
                  htmlFor="footerBottomTitle"
                  className="footer__bottomCol__title"
                >
                  Sell
                </label>
                <li>Start Selling</li>
                <li>Learn to Sell</li>
                <li>Independent Seller</li>
                <li>Learn more</li>
              </ul>
            </div>
        
            <div className="footer__bottomCol">
              <ul>
                <label
                  htmlFor="footerBottomTitle"
                  className="footer__bottomCol__title"
                >
                  Shop Here
                </label>
                <li>Womens Fashion</li>
                <li>Mens Fashion</li>
                <li>Home & Living</li>
              </ul>
            </div>
            <div className="footer__bottomCol">
              <ul>
                <label
                  htmlFor="footerBottomTitle"
                  className="footer__bottomCol__title"
                >
                  Benefits
                </label>
                <li>Cash Back</li>
                <li>Daily Deals</li>
                <li>Product Policy</li>
                <li>0% commision</li>
                <li>FAQ's(Customers and Vendors)</li>
              </ul>
            </div>
            <div className="footer__bottomCol">
              <ul>
                <label
                  htmlFor="footerBottomTitle"
                  className="footer__bottomCol__title"
                >
                  About Gyapu
                </label>
                <li>Company Info</li>
                <li>Address</li>
                <li>News and Media</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
