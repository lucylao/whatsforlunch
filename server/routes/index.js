var express = require('express');
var router = express.Router();
const db = require('../db/queries');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*login*/

/*login/favorites*/



module.exports = router;
