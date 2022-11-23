import React from "react";
import PropTypes from "prop-types";

import "./DonationComponent.css";

function DonationComponent({ donation, amountRatio }) {
  // console.log("Donation", donation);
  return (
    <span
      className="DonationComponent"
      style={{ maxWidth: `${donation.Amount / amountRatio}px` }}
    >
      {donation["Contributor Name"]}
    </span>
  );
}

DonationComponent.propTypes = {
  donation: PropTypes.object.isRequired,
  amountRatio: PropTypes.number.isRequired,
};

export default DonationComponent;
