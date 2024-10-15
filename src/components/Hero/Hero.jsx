import React from "react";
import "../Hero/Hero.css";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <div>
      <section className="hero-wrapper">
        <div className="flexCenter paddings  innerWidth hero-container">
          {/* left section  */}
          <div className=" hero-left ">
            <div className="hero-title p-1">
              <div className="orange-circle"></div>
              <h1>
                Discover <br />
                Most suitable <br />
                Proparty
              </h1>
            </div>
            <div className="flexColStart hero-des p-2">
              <span className="secondaryText">
                Find a variety of that suit you very easiltYFind a variety of
              </span>
              <span className="secondaryText">
                Forget difficulties in finding residence for you
              </span>
            </div>
            <div className="flexCenter search-bar mt-2">
              <span>
                <i class="fa-solid fa-location-dot"></i>
              </span>
              <input type="text" />
              <button className="btn btn-primary">Search</button>
            </div>
            <div className="flexCenter mt-4 stats">
              <div className="flexColCenter stat ">
                <span>
                  <CountUp start={88000} end={90000} duration={4}></CountUp>
                  <span className="icon">+</span>
                  <br />
                </span>
                <span className="secondaryText"> Premuim Proudcts</span>
              </div>
              <div className="flexColCenter stat ">
                <span>
                  <CountUp start={1850} end={2000} duration={4}></CountUp>
                  <span className="icon">+</span>
                  <br />
                </span>
                <span className="secondaryText"> Happy Customer</span>
              </div>
              <div className="flexColCenter stat">
                <span>
                  <CountUp end={28} duration={4}></CountUp>
                  <span className="icon">+</span>
                  <br />
                </span>
                <span className="secondaryText"> award winning</span>
              </div>
            </div>
          </div>
          {/* right section */}
          <div className="flexCenter hero-right">
            <div className="image-container">
              <img src="image/hero-image.png" alt="hero" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
