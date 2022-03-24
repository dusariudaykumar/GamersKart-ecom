import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div>
      <footer className="footer flex">
        <div className="footer-left">
          <h4>Quick Links</h4>
          <ul className="footer-nav-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">My Cart</a>
            </li>
            <li>
              <a href="#">My Wish List</a>
            </li>
          </ul>
        </div>
        <div className="footer-right">
          <h4>Connect with me</h4>
          <ul className="social-media-links">
            <li>
              <a href="https://twitter.com/UdayKumarDusari" target="_blank">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/dusariudaykumar" target="_blank">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/dusari-uday-kumar-bb2543207/"
                target="_blank">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/udaykumar_dusari/"
                target="_blank">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export { Footer };
