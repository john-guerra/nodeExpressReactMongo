import React from "react";
// import PropTypes from "prop-types";

import BasePage from "./BasePage.js";

import PropositionsList from "../components/PropositionsList.js";

function IndexPage() {
  return (
    <BasePage>
      <div className="IndexPage">
        <h1>It's aliveeeee 🌭</h1>

        <PropositionsList></PropositionsList>
      </div>
    </BasePage>
  );
}

IndexPage.propTypes = {};

export default IndexPage;
