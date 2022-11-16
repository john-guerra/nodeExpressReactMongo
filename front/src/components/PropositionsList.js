import React, { useState, useEffect } from "react";

import PropositionComponent from "./PropositionComponent.js";

import { group } from "d3-array";

function PropositionList() {
  const [propositions, setPropositions] = useState([]);

  async function reloadData() {
    // TODO validate for errors
    const res = await fetch("./getDonations");
    const data = await res.json();

    console.log("got data", data);
    const pMap = group(
      data.donations.filter((d) => d["Ballot Measure(s)"]),
      (d) => {
        const [position, proposition] = d["Ballot Measure(s)"].split(": ");
        d.position = position;
        return proposition;
      }
    );

    setPropositions(
      Array.from(pMap.entries()).map(([name, donations]) => ({
        name,
        donations,
      }))
    );
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
