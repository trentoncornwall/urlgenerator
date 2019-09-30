var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
	res.render("index");
});

router.post("/create", (req, res) => {
	let data = req.body;
	console.log(data);
	let query = `http:www.opentable.${data.region}/restaurant/profile/${data.rid}/reserve?restref=${data.rid}&datetime=${data.date}T${data.time}&covers=${data.party}&searchdatetime=${data.date}T${data.time}&partysize=${data.party}`;
	if (data.source) {
		query += `&ref=${data.source}`;
	}
	console.log(query);
	res.send(query);
});

module.exports = router;
