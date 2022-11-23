import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import PropositionComponent from "./PropositionComponent.js";

import { useErrorMessage } from "../hooks/useErrorMessage.js";

function PropositionsList() {
  const [propositions, setPropositions] = useState([]);
  const amountRatioOutputRef = useRef();
  const amountRatioInputRef = useRef();
  const [amountRatio, setAmountRatio] = useState(100000);

  const [ErrorMsgComponent, setMessage] = useErrorMessage();

  async function reloadData() {
    console.log("reloadData");
    let data;
    try {
      const res = await fetch("/getPropositions");
      data = await res.json();
    } catch (e) {
      const errorMsg = `Error downloading data!\n ${e.message}`;
      console.log(errorMsg);
      setMessage(errorMsg);
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

  function onChangeRatio(evt) {
    console.log("ratio", evt.target, evt.target.value);
    setAmountRatio(+evt.target.value);
  }

  function onChangeRatioRef(evt) {
    console.log("ratio ref", evt.target, evt.target.value);
    amountRatioOutputRef.current.innerHTML = +evt.target.value;
  }

  console.log("render PropositionsList", propositions);
  return (
    <div className="PropositionsList">
      <h2>Propositions</h2>

      <ErrorMsgComponent></ErrorMsgComponent>

      <button onClick={reloadData}>Reload Data</button>

      <div>
        <label>
          Amount Ratio controlled Component:{" "}
          <input
            type="range"
            min={1}
            max={10000000}
            value={amountRatio}
            onChange={onChangeRatio}
          />
          <output>{amountRatio}</output>
        </label>
      </div>

      <div>
        <label>
          Amount Ratio with Ref:{" "}
          <input
            type="range"
            min={1}
            max={100000}
            defaultValue={1000}
            onChange={onChangeRatioRef}
            ref={amountRatioInputRef}
          />
          <output ref={amountRatioOutputRef}>1000</output>
        </label>
      </div>

      <button
        className="btn btn-secondary"
        onClick={() => {
          console.log(`Current value ${amountRatioInputRef.current.value}`);
        }}
      >
        check value
      </button>
      {propositions.map((p, i) => (
        <PropositionComponent
          key={`prop_${i}`}
          proposition={p}
          reloadData={reloadData}
          amountRatio={amountRatio}
        ></PropositionComponent>
      ))}
    </div>
  );
}

PropositionsList.propTypes = {};

export default PropositionsList;
