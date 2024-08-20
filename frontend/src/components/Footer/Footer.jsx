import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.food_dev} alt="logo" className="logo" />
          <p>
            The best online food delivery platform, tested and proved to be the
            most reliable of all time. Just one click away.{" "}
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <a
              href="https://www.linkedin.com/in/wycliffe-omondi-933601266/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.linkedin_icon} alt="LinkedIn" />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Products Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>CONTACT US</h2>
          <ul>
            <li>Address: 123, XYZ Street, ABC City, 12345</li>
            <li>Email:dairyproductseshop@gmail.com</li>
            <li>Phone: 1234567890</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        &copy; 2024 FoodDelv E-Shop. All Rights Reserved
      </p>
    </div>
  );
};
export default Footer;
