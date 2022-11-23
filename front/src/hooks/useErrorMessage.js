import React, { useState } from "react";

export function useErrorMessage() {
  const [msg, setMessage] = useState("");

  const ErrorMsgComponent = () =>
    msg ? (
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        {msg}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    ) : (
      ""
    );

  return [ErrorMsgComponent, setMessage];
}

export default useErrorMessage;
