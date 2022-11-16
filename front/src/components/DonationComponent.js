import React from "react";
import PropTypes from "prop-types";

function DonationComponent({ donation }) {
  console.log("Donation", donation);
  return (
    <span
      className="DonationComponent"
      style={{
        border: "solid 1px",
        maxWidth: "10px",
        display: "inline-block",
        overflow: "hidden",
        height: "20px",
      }}
    >
      {donation["Contributor Name"]}
    </span>
  );
}

DonationComponent.propTypes = { donation: PropTypes.object.isRequired };

export default DonationComponent;
