import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import PropositionComponent from "./PropositionComponent.js";

function PropositionsList() {
  const [propositions, setPropositions] = useState([]);

  async function reloadData() {
    console.log("reloadData");
    let data;
    try {
      const res = await fetch("/getPropositions");
      data = await res.json();
    } catch (e) {
      console.log("Error downloading data!", e);
      const divError = document.createElement("div");
      divError.innerHTML = `"Error downloading data!" ${JSON.stringify(e)}`;
      const divMain = document.querySelector("main");
      divMain.insertBefore(divError, divMain.firstChild);

      return false;
    }

    // If I make it this far, then we didn't have an error
    console.log("got data changing state", data);

    setPropositions(data.propositions);
  }

  useEffect(
    () => {
      reloadData();

      return () => {
        console.log("Cleaining up the effect");
      };
    },
    [] // call it only once
  );

  console.log("render PropositionsList", propositions);
  return (
    <div className="PropositionsList">
      <h2>Propositions</h2>
      <button onClick={reloadData}>Reload Data</button>
      {propositions.map((p, i) => (
        <PropositionComponent
          key={`prop_${i}`}
          proposition={p}
          reloadData={reloadData}
        ></PropositionComponent>
      ))}
    </div>
  );
}

PropositionsList.propTypes = {};

export default PropositionsList;
