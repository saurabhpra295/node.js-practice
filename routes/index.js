var express = require('express');
var router = express.Router();
const user = require("../models/userSchema")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get("/createuser", (req, res, next) => {
//   res.render('createUser', { title: 'Create User' })
// });

// router.post('/create', function(req, res, next) {
//   const newuser = new user(req.body);
//   newuser.save();
//   res.render('index', user);
// });
// router.get('/create', function(req, res, next) {
//   const newuser = new user(req.body);
//   newuser.save();
//   res.render('index', user);
// });



module.exports = router;
