var express = require("express");
var router = express.Router();
const axios = require("axios");

/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index");
});

router.post("/create", (req, res) => {
	// creates restref url
	var data = req.body;
	console.log(data);
	console.log(
		`going to send a get to axios https://www.opentable.com/widget/reservation/api/restaurant?rid=${data.rid}`
	);
	axios(
			`www.opentable.com/widget/reservation/api/restaurant?rid=${data.rid}`
		)
		.then(response => {
			console.log(`getting response from axios`, response);
			var query = `http://www.opentable.${data.region}/restaurant/profile/${data.rid}/reserve?restref=${data.rid}&datetime=${data.date}T${data.time}&covers=${data.party}&searchdatetime=${data.date}T${data.time}&partysize=${data.party}`;
			if (data.source) {
				query += `&ref=${data.source}`;
			}
			var restref = `https://www.opentable.${data.region}/r${response.data.nlUrl}?restref=${data.rid}`;
			res.json({
				query: query,
				restref: restref
			});
		})
		.catch(error => {
			console.log(error);
		});
});

module.exports = router;