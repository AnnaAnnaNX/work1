var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var db = req.db;
  var collection = db.get('employee');
  console.log(collection);
  collection.find({},{},function(e,docs){
    console.log('name='+docs.name);
    res.render('employee', {
        "data" : docs
    });
  });
});

module.exports = router;
