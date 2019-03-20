var express = require('express');
// var mapboxgl = require('mapbox-gl')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
//   res.sendFile(path.join(__dirname+'/index.html'));
});