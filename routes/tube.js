var express = require('express');
var router = express.Router();

var stations = require('../stations.json');
var stationDetails = require('../stationDetails.json');

/* GET users listing. */
router.get('/stations', function(req, res) {
  res.send(stations);
});

router.get('/station/:stationName', function(req, res) {
  var foundStation = 0;
  var stationName = req.params.stationName.replace(/\&amp;/g,'&');
  stationName = stationName.replace(/’/g, '\'');
  // console.log(stationName);
	for (var i = 0; i < stationDetails.Stations.Station.length; i++) {
		if (stationDetails.Stations.Station[i].StationName == stationName) {
			foundStation = 1;
			res.send(stationDetails.Stations.Station[i]);
		}
	}

  if (!foundStation) {
	 res.send({error: "Station not found"});
  }
});


module.exports = router;
