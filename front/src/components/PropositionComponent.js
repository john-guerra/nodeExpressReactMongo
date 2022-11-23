import React, { useState } from "react";
import PropTypes from "prop-types";

import "./PropositionComponent.css";

import DonationsStack from "./DonationsStack.js";

import PropositionCommentForm from "./PropositionCommentForm.js";

function PropositionComponent({ proposition, reloadData, amountRatio }) {
  const [showCommentForm, setShowCommentForm] = useState(false);

  async function onCreateComment(name, comment) {
    const newCommentObj = {
      name,
      comment,
      proposition_id: proposition._id,
      timestamp: +new Date(),
    };

    console.log("create comment", newCommentObj);

    const res = await fetch("./createComment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCommentObj),
    });

    const resData = await res.json();
    console.log("Comment created", resData);
    await reloadData();
  }

  // console.log("PropositionComponent render", proposition, showCommentForm);
  return (
    <div className="PropositionComponent">
      <span>
        <DonationsStack
          key={`donations_against`}
          donations={proposition.donations.filter(
            (d) => d.position !== "SUPPORTED"
          )}
          amountRatio={amountRatio}
        ></DonationsStack>
      </span>
      <span className="name">{proposition.name}</span>
      <span>
        <DonationsStack
          key={`donations_for`}
          donations={proposition.donations.filter(
            (d) => d.position === "SUPPORTED"
          )}
          amountRatio={amountRatio}
        ></DonationsStack>
      </span>
      <div>
        <button
          onClick={() => setShowCommentForm(!showCommentForm)}
          className="btn btn-outline-primary"
        >
          Add Comment
        </button>
      </div>
      <div>
        {showCommentForm ? (
          <PropositionCommentForm
            onCreateComment={onCreateComment}
          ></PropositionCommentForm>
        ) : (
          ""
        )}
      </div>

      <div>
        {proposition.comments !== undefined
          ? proposition.comments.map((c, i) => (
              <div key={`prop_${proposition._id}_comment_${i}`}>
                {new Date(c.timestamp).toISOString()} {c.name}: {c.comment}
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}

PropositionComponent.propTypes = {
  proposition: PropTypes.object.isRequired,
  reloadData: PropTypes.func.isRequired,
  amountRatio: PropTypes.number.isRequired,
};

export default PropositionComponent;
