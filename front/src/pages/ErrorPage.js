import React from "react";
// import PropTypes from "prop-types";

import BasePage from "./BasePage.js";

function ErrorPage() {
  return (
    <BasePage>
      <div>
        <h1>
          Error 404:
          <br />
          <small>John's not funny anymore 💔</small>
        </h1>
      </div>
    </BasePage>
  );
}

ErrorPage.propTypes = {};

export default ErrorPage;
