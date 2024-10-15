import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
const Contact = () => {
  return (
    <section className="contact-wrapper">
      <div className="paddings innerWidth flexCenter contact-container">
        <div className="contact-left m-5  flexColStart">
          <span className="orangeText">Contact US </span>
          <span className="primaryText">Easy To Contact With Us </span>
          <span className="secondaryText">
            {" "}
            we always happy to help you and provide the best sevices for you
            <br></br>
            we beleive agood choice to you
          </span>
          <div className="flexColStart  contactModes">
            {/* frist row  */}
            <div className="flexStart row">
              {/* frist mode  */}
              <div className="flexColStart mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">999-999-999</span>
                  </div>
                </div>
                <button className="flexCenter btn btn-primary">
                  Call Now{" "}
                </button>
              </div>
              {/* second mode  */}
              <div className="flexColStart mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">999-999-999</span>
                  </div>
                </div>
                <button className="flexCenter btn btn-primary">
                  Call Now{" "}
                </button>
              </div>
            </div>
            {/* second row  */}
            <div className="flexStart row">
              {/* frist mode  */}
              <div className="flexColStart mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">999-999-999</span>
                  </div>
                </div>
                <button className="flexCenter btn btn-primary">
                  Video Call Now{" "}
                </button>
              </div>
              {/* second mode  */}
              <div className="flexColStart mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">999-999-999</span>
                  </div>
                </div>
                <button className="flexCenter btn btn-primary">
                  Message Now{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-right flexCenter">
          <div className="image-container ">
            <img src="image/contact.jpg" alt="contact" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
