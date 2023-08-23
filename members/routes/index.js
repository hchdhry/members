var express = require('express');
var router = express.Router();
const mssg = require("../controllers/mssg")
const signup = require('../controllers/sign-up'); 


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',user: req.user });
});

router.post('/sign-up',signup.create_user_post);
router.get('/write',mssg.mssg_get);
router.post('/write',mssg.mssg_post);
router.get('/sign-up',signup.create_user_get);


module.exports = router;
