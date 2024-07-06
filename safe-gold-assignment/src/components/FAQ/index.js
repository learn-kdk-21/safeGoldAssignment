import React, { useState } from "react";
import "./index.scss";

import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const questionArr = [
  {
    questionTitle:
      "Is it possible to store my withdrawn gold coins in safe custody and have them delivered later?",
    answer: `Once you have chosen to get your coin delivered to you, you cannot return it to SafeGold’s secure custody. 
    In case you wish to purchase gold and keep it in our world-class storage vaults, you can choose to purchase gold digitally, 
    by signing up and buying the gold you need here.
    When you purchase digital gold, you own the weight of gold you purchased, and we store the equivalent amount for you in our lockers. 
    Whenever you're ready to get the coin delivered, you can do so by paying a small minting and delivery charge and we’ll deliver it for you.
    However, if you place a delivery request right now, you will have to accept the delivery made to you and we won’t be able to hold it for you for a later date.`,
  },
  {
    questionTitle: "Can I change my delivery address?",
    answer: `Yes, you can opt to have your gold delivered at an address other than that mentioned at the time of placing the order, by contacting us on care@safegold.in. 
    However, this may be subject to verification of address change for security.`,
  },
  {
    questionTitle: "Where is delivery of Gold available?",
    answer: `SafeGold delivers across India, through partnerships with secure logistics providers. 
    You can use the Check Availability option at the top to see if your Pin code is serviceable, and prior to making any purchase, you will be informed whether your pin code is serviceable or not as well.`,
  },
  {
    questionTitle: "Are there any charges for delivery of gold?",
    answer: `There is no additional delivery charge over and above the cost of the product! 
    We deliver your gold to you in the form of 99.99% pure coins that are tested in an NABL accredited laboratory, in tamper-evident packaging, using secure logistics providers. 
    The total price covers the cost of minting, packaging, insurance, assay certification to ensure the best quality of our gold products.`,
  },
  {
    questionTitle: "How does SafeGold ensure secured delivery of gold?",
    answer: `The delivery of your gold coins and bars is fully insured. 
    We've partnered with the best delivery partners in the country to ensure your gold is in safe hands right from the locker to your home. 
    To ensure the quality of the gold coin and bars delivered to you - we have our products independently assessed and assay certified to ensure zero negative weight tolerance and promised purity.`,
  },
];

export const FAQs = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const handleClick = (index) => {
    if (selectedIndex == index) {
      setSelectedIndex(-1);
      return;
    }
    setSelectedIndex(index);
    return;
  };

  return (
    <div className="FAQWrapper">
      <div className="FAQtitleWrap">
        <h5 className="FAQTitle">Frequently Asked Questions</h5>
      </div>
      <div className="questionWrapper">
        {questionArr.map((item, index) => {
          return (
            <>
              <div className="questionHead" key={index}>
                <div
                  className="FAQquestionTitle"
                  onClick={() => handleClick(index)}
                >
                  {item.questionTitle}
                </div>
                {selectedIndex == index ? (
                  <div className="answerFAQ">
                    <p>{item.answer}</p>
                    <hr className="horizontalLine" />
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
