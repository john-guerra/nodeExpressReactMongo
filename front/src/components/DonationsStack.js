import React from "react";
import PropTypes from "prop-types";

import DonationComponent from "./DonationComponent.js";
import "./DonationsStack.css";

function DonationsStack({ donations, amountRatio }) {
  return (
    <span className="DonationsStack" style={{ display: "inline-block" }}>
      {donations.map((d, i) => (
        <DonationComponent
          key={`donation_${i}`}
          donation={d}
          amountRatio={amountRatio}
        ></DonationComponent>
      ))}
    </span>
  );
}

DonationsStack.propTypes = {
  donations: PropTypes.array.isRequired,
  amountRatio: PropTypes.number.isRequired,
};

export default DonationsStack;
