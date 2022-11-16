import React from "react";

import DonationsStack from "./DonationsStack.js";

function PropositionComponent({ proposition }) {
  console.log("proposition", proposition);
  return (
    <div style={{ display: "inline-block" }}>
      <DonationsStack donations={proposition.donations}></DonationsStack>
      <span style={{ display: "inline-block" }}>
        Proposition {proposition.name}
      </span>
      <span style={{ display: "inline-block" }}>For</span>
    </div>
  );
}

export default PropositionComponent;
