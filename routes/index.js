var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/getData", function (req, res, next) {
  console.log("get data");
  res.json([1, 2, 3, 4]);
});

module.exports = router;
