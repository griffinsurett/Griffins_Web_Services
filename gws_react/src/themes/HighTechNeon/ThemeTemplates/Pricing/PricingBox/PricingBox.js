// PricingBox.js
import React from "react";
import Box from "../../../themeComponents/Box/Box";
import Button from "../../../themeComponents/Buttons/Button";
import PropTypes from "prop-types";
import "./pricing-box.css";
import Logo from "../../../themeComponents/Logos/2dLogo/2dLogo";

const PricingBox = ({ plan, href }) => {
  return (
    <Box href={href} className={`pricing-box flex column justify-center item-align-center ${plan.isFeatured ? "featured-plan" : ""}`}>
      <h3 className="pricing-title top-space">{plan.title}</h3>
      <p className="pricing-description p-small">{plan.description}</p>
      <div className="pricing-price">
        <span className="price-amount">{plan.price}</span>
        <span className="payment-type">{plan.paymentType}</span>
      </div>
      <ul className="pricing-features">
        {plan.bulletPoints.map((point, idx) => (
          <li key={idx} className="feature-item flex">
            <Logo width="20px" height="20px" className="list-logo" /> {/* Small logo as bullet */}
            {point}
          </li>
        ))}
      </ul>
      <div className="pricing-button-container top-space bottom-space">
      <Button
        text={plan.buttonText}
        buttonLink={plan.buttonLink}
        className="pricing-button p-small"
      />
      </div>
    </Box>
  );
};

PricingBox.propTypes = {
  plan: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    paymentType: PropTypes.string.isRequired,
    bulletPoints: PropTypes.array.isRequired,
    buttonText: PropTypes.string.isRequired,
    buttonLink: PropTypes.string.isRequired,
    isFeatured: PropTypes.bool,
  }).isRequired,
};

export default PricingBox;
