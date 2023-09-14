import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
            incidunt numquam recusandae ipsum modi maxime dolorum harum quis
            corporis odit quam error, libero ex fugiat.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
            incidunt numquam recusandae ipsum modi maxime dolorum harum quis
            corporis odit quam error, libero ex fugiat.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo"></span>
          <span className="© Copyright 2023.All Rights Reserved"></span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="footer img" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
