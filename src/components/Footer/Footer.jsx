import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side  */}
        <div className="flexColStart f-left ">
          <div className="image">
            <img src="image/logo2.png" alt="logo" />
          </div>
          <span className="secondaryText">this footer for this wedsite</span>
        </div>

        {/* right side  */}
        <div className="flexColStart f-right">
          <span className="primaryText">Mohamed Osama</span>
          <span className="secondaryText">all info here</span>
          <div className="flexCenter f-list">
            <span>one</span>
            <span>two</span>
            <span>three</span>
            <span>four</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
