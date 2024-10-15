import React, { useState } from "react";
import "../Header/Header.css";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  const toggleMenuHandler = () => {
    setShowMenu((prev) => !prev);
  };
  return (
    <>
      <section>
        <div className="h-wrapper">
          <div className="h-container flexCenter paddings innerWidth">
            <img width={100} src="image/logo.png" alt="logo" />
            <div className={`h-menu flexCenter `}>
              <a href="#residencies">Residencies</a>
              <a href="#value">Our Value </a>
              <a href="#contact">Contact us</a>
              <a href="#getstarted">Get started</a>
              <button className="btn btn-primary ">
                <a href="hero">Contact</a>
              </button>
            </div>
            <div className="menu-icon" onClick={toggleMenuHandler}>
              <BiMenuAltRight size={30} />
            </div>
            {showMenu && (
              <div className={`h-menuMobile flexCenter `}>
                <a href="#residencies">Residencies</a>
                <a href="#value">Our Value </a>
                <a href="#contact">Contact us</a>
                <a href="#getstarted">Get started</a>
                <button className="btn btn-primary ">
                  <a href="hero">Contact</a>
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
