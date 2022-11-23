import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

function LinkWithActive({ to, linkText }) {
  const pathname = window.location.pathname;

  return (
    <li className="nav-item">
      <Link
        className={`nav-link ${pathname === to ? "active" : ""}`}
        to="/donations"
      >
        {linkText}
      </Link>
    </li>
  );
}

LinkWithActive.propTypes = {
  to: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
};

export default LinkWithActive;
