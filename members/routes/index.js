var express = require('express');
var router = express.Router();

const signup = require('../controllers/sign-up'); 


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/sign-up',signup.create_user_post);

router.get('/write', function(req, res, next) {
  res.render('write', { title: 'message' });
});


router.get('/sign-up', function(req, res, next) {
  res.render('sign-up', { title: 'form' });
});


module.exports = router;
