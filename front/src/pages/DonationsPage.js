import React from "react";
import PropTypes from "prop-types";

import BasePage from "./BasePage.js";
import DonationsList from "../components/DonationsList.js";

function DonationsPage() {
  return (
    <BasePage>
      <h1>Donations</h1>
      <DonationsList></DonationsList>
    </BasePage>
  );
}

DonationsPage.propTypes = {};

export default DonationsPage;
