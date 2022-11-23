import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { useErrorMessage } from "../hooks/useErrorMessage.js";

// in the backend
function DonationsList() {
  const [ErrorMsgComponent, setMessage] = useErrorMessage();
  const [donations, setDonations] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const PAGE_SIZE = 20;

  useEffect(
    () => {
      async function reloadData() {
        let data;
        try {
          const res = await fetch(
            `/getDonations?query=${
              query || " "
            }&page=${page}&page_size=${PAGE_SIZE}`
          );
          data = await res.json();
        } catch (err) {
          return setMessage(`Error downloading the donations ${err.message}`);
        }

        console.log("got donations", data);
        setDonations(data.donations);
      }

      reloadData();

      return () => {}; // cleanup function
    },
    [query, page] // call it only once
  );

  console.log("render DonationsList", donations, "query=", query);
  return (
    <div className="DonationsList">
      <ErrorMsgComponent />

      <div>Current page:{page}</div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => setPage(Math.max(page - 1, 0))}
            >
              Previous
            </button>
          </li>
          <li className="page-item">
            <a className="page-link">1</a>
          </li>
          <li className="page-item">
            <a className="page-link">2</a>
          </li>
          <li className="page-item">
            <a className="page-link">3</a>
          </li>
          <li className="page-item">
            <button
              className="page-link"
              onClick={() =>
                setPage(Math.min(page + 1), donations.length / PAGE_SIZE)
              }
            >
              Next
            </button>
          </li>
        </ul>
      </nav>

      <label className="form-label">
        Search{" "}
        <input
          className="form-control"
          type="text"
          value={query}
          onChange={(evt) => {
            setQuery(evt.target.value);
          }}
        />
      </label>

      {donations.map((d, i) => {
        return (
          <div key={`donation_${i}`}>
            {d["Contributor Name"]}: {d.Amount}
          </div>
        );
      })}
    </div>
  );
}

DonationsList.propTypes = {};

export default DonationsList;
