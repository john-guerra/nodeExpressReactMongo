import React, { useState, useEffect } from "react";

import PropositionComponent from "./PropositionComponent.js";

function PropositionList() {
  const [propositions, setPropositions] = useState([]);

  async function reloadData() {
    // TODO validate for errors
    const res = await fetch("./getPropositions");
    const data = await res.json();
    console.log("got data", data);
    setPropositions(data.propositions);
  }

  // we use this for running it once
  //  componentDidMount
  useEffect(
    () => {
      reloadData();
    },
    [] // array of parameters
  );

  console.log("render PropositionsList", propositions);
  return (
    <div className="PropositionList">
      <h2>Propositions</h2>
      {propositions.slice(0, 20).map((p, i) => (
        <PropositionComponent
          proposition={p}
          key={`Proposition_${i}`}
        ></PropositionComponent>
      ))}
    </div>
  );
}

export default PropositionList;
