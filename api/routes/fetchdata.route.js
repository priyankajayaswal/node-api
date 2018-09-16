const express = require('express')
const router = express.Router();
const fetchDataController = require('../controller').getFetchDataController();

router.get('/get-all', function(req,res, next){
    console.log("what the hell")
    fetchDataController.getData(req,res);
});

module.exports = router;