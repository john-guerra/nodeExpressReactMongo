import express from "express";
const router = express.Router();

import { myDB } from "../db/MyMongoDB.js";

/* GET home page. */
router.get("/getDonations", async function (req, res, next) {
  console.log("get data");

  let donations;

  try {
    donations = await myDB.getDonations();
    res.status(200).json({ donations, msg: "Query successful" });
  } catch (e) {
    console.log("Error in db", e);
    res.status(300).json({
      donations: [],
      msg: "Error in the query",
      error: true,
      errorObj: JSON.stringify(e),
    });
  }
});

export default router;
