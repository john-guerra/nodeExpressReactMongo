import express from "express";
const router = express.Router();

import { myDB } from "../db/MyMongoDB.js";

router.get("/getPropositions", async function (req, res, next) {
  console.log("get data");

  let propositions;

  try {
    propositions = await myDB.getPropositions();
    res.status(200).json({ propositions, msg: "Query successful" });
  } catch (e) {
    console.log("Error in db", e);
    res.status(300).json({
      propositions: [],
      msg: "Error in the query",
      error: true,
      errorObj: JSON.stringify(e),
    });
  }
});

export default router;
