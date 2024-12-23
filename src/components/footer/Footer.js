import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <h1 className="footer-title">DHH</h1>

        <ul className="footer-list">
          <li>
            <a href="#about" className="footer-link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer-link">
              Project
            </a>
          </li>
          <li>
            <a href="#service" className="footer-link">
              Service
            </a>
          </li>
        </ul>

        <div className="footer-social">
          <a
            href="https://www.facebook.com/"
            className="home-social-icon"
            target="_blank"
          >
            <i className="bx bxl-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/"
            className="home-social-icon"
            target="_blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://twitter.com/"
            className="home-social-icon"
            target="_blank"
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </div>
        <span className="footer-copy">&#169; Crypticalcoder. All rights reserved</span>
      </div>
    </footer>
  );
}
