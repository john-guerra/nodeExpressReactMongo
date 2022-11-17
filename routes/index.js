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

router.post("/createComment", async (req, res) => {
  console.log("create Comment", req.body);
  const newCommentObj = req.body;
  console.log("create comment new obj", newCommentObj);

  // create in the database!
  const mongoResponse = await myDB.createComment(
    newCommentObj.proposition_id,
    newCommentObj
  );

  res.status(200).json({ msg: "Comment created", status: "ok", mongoResponse });
});

export default router;
