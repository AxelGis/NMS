var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:stream?', function(req, res, next) {
	if(req.params.stream){
		res.render('stream', { stream: req.params.stream });
	} else {
		res.render('streamlist');
	}
  
});

module.exports = router;
