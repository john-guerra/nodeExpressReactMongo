import React, { useState } from "react";
import PropTypes from "prop-types";

function PropositionCommentForm({ onCreateComment }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  async function onSubmit(evt) {
    evt.preventDefault();

    onCreateComment(name, comment);
  }

  console.log("Render PropositionCommentForm  name=", name);

  return (
    <div className="PropositionCommentForm">
      <h3>Add Comment</h3>
      <form onSubmit={onSubmit} className="">
        <div className="form-group row">
          <label className="col-sm-2 col-form-label" htmlFor="inName">
            Name:
          </label>
          <div className="col-sm-10">
            <input
              id="inName"
              name="name"
              className="form-control"
              value={name}
              onChange={(evt) => setName(evt.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Comment:</label>
          <div className="col-sm-10">
            <textarea
              rows="5"
              columns="40"
              name="comment"
              className="form-control"
              required
              value={comment}
              onChange={(evt) => setComment(evt.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <button className="btn btn-primary" type="submit">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

PropositionCommentForm.propTypes = {
  onCreateComment: PropTypes.func.isRequired,
};

export default PropositionCommentForm;
