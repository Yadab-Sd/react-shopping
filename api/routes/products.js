var express = require('express');
var router = express.Router();
const request = require('request')

/* GET users listing. */
router.get('/', function(req, res, next) {
request("https://api.api2cart.com/v1.1/product.list.json?api_key=2d97c4153f4db6c3640a8aae85568b49&store_key=ed58a22dfecb405a50ea3ea56979360d&start=0&count=4&params=id,u_model,name,price,url,create_at", 
  	function (error, response, body) {
  		res.send(body)
  	})
});

module.exports = router;
