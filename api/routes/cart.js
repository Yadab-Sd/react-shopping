var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  request("", 
  	function (error, response, body) {
  		if(!error) {
  			res.send("yesssssssssssss")
  		}
  	})
});

module.exports = router;
