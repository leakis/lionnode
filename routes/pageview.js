/**
 * Created by lea on 2016-02-25.
 */
var express = require('express');
var router = express.Router();

var test={
    title:"hello page viwe",
    message:"cool",
    item:{
        it1:"aaa",
        it2:"eea2"
    }
}
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('pageview',test);
});

module.exports = router;
