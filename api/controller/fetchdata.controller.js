const util = require("util")

const BaseController = require('./base.controller')
const FetchDataService = require('../service').getFetchDataService();

var FetchDataController = function FetchDataController() {
    console.log(" fetch data Controller");
}

util.inherits(FetchDataController, BaseController);

FetchDataController.prototype.getData = function getData(req,res) {

    var that = this;
    FetchDataService.getData(req.query)
    .then(data => {
        console.log("Data is "+ data);
        res.send(that.getSuccessResponse(data))
    }).catch((err)=>{
        console.log("Error received is "+ err);
    })
}

module.exports = FetchDataController;