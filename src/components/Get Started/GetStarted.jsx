import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <section className="g-warpper">
      <div className="paddings innerWidth flexCenter g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText  ">Get started with Now </span>
          <span className="secondaryText">
            {" "}
            we always happy to help you and provide <br /> the best sevices for
            you
          </span>
          <button className="btn btn-primary ">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
