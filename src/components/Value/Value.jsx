import React, { useState } from "react";
import data from "../../utils/accordion";
import { MdOutlineArrowDropDown } from "react-icons/md";
import {
  Accordion,
  AccordionItem,
  AccordionItemState,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import "../Value/Value.css";
// import deta from "./../../utils/accordion";

const Value = () => {
  const [className, setClassName] = useState(null);
  return (
    <>
      <div className="v-wrapper" id="value">
        <div className="paddings innerWidth flexCenter v-container">
          <div className="left-section flexCenter">
            <div className="image-container">
              <img src="image/value.png" alt="value" />
            </div>
          </div>
          <div className="right-section flexCenter ">
            <div className="v-title flexColStart py-3 ">
              <h1 className="orangeText">Our Value</h1>
              <span className="primaryText">Value we give to you </span>
              <span className="secondaryText ">
                we always happy to help you and provide the best sevices for you{" "}
              </span>
              <span className="secondaryText">
                we beleive agood choice to live can make ypur life better{" "}
              </span>
            </div>

            <Accordion
              className="accordion"
              allowMultipleExpanded={false}
              preExpanded={[0]}
            >
              {data.map((count, i) => {
                return (
                  <AccordionItem
                    className={`accordionItem ${className}`}
                    key={i}
                    uuid={i}
                  >
                    <AccordionItemHeading>
                      <AccordionItemButton className="flexCenter accordionButton">
                        <AccordionItemState>
                          {({ expanded }) =>
                            expanded
                              ? setClassName("expanded")
                              : setClassName("collapsed")
                          }
                        </AccordionItemState>
                        <div className="flexCenter icon">{count.icon}</div>
                        <span className="primaryText">{count.heading}</span>
                        <div className="flexCenter icon ">
                          <MdOutlineArrowDropDown size={20} />
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="secondaryText">{count.detail}</div>
                    </AccordionItemPanel>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default Value;
