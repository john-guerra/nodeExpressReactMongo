import React from "react";
// import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import LinkWithActive from "../components/LinkWithActive.js";

function NavBar() {
  const pathname = window.location.pathname;

  console.log("render navbar", pathname);
  return (
    <div className="NavBar">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            CA Ballot Donations
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <LinkWithActive to="/" linkText="Propositions" />
              <LinkWithActive to="/donations" linkText="Donations" />
              <LinkWithActive to="/about" linkText="About" />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

NavBar.propTypes = {};

export default NavBar;
