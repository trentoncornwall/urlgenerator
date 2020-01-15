var express = require("express");
var router = express.Router();
const axios = require("axios");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index");
});

router.post("/create", (req, res) => {
  // creates restref url
  var data = req.body;
  console.log(data);

  var query = `http://www.opentable.${data.region}/restaurant/profile/${data.rid}/reserve?restref=${data.rid}&datetime=${data.date}T${data.time}&covers=${data.party}&searchdatetime=${data.date}T${data.time}&partysize=${data.party}`;
  if (data.source) {
    query += `&ot_source=${data.source}`;
  }
  if (data.campaign) {
    query += `&ot_campaign=${data.campaign}`;
  }

  res.json({
    query: query
  });
});
module.exports = router;
