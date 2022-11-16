import React from "react";
import PropTypes from "prop-types";

import DonationComponent from "./DonationComponent.js";
import "./DonationsStack.css";

function DonationsStack({ donations }) {
  return (
    <span className="DonationsStack" style={{ display: "inline-block" }}>
      {donations.map((d) => (
        <DonationComponent donation={d}></DonationComponent>
      ))}
    </span>
  );
}

DonationsStack.propTypes = {
  donations: PropTypes.array.isRequired,
};

export default DonationsStack;
