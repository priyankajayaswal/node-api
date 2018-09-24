const express = require('express')
const router = express.Router();
const fetchDataController = require('../controller').getFetchDataController();

router.get('/get-all', function(req,res, next){
    //http://localhost:5000/rentov/api/fetch-data/get-all?location=Bangalore&startDate=01-09-2018&startTime=12:00&endDate=05-10-2018&endTime=12:00
    console.log("req ", req.originalUrl)
    console.log("what the hell", req.query)
    fetchDataController.getData(req,res);
});

module.exports = router;