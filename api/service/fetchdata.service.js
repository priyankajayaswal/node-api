const api = require('../utils/api.service')
var FetchDataService = function FetchDataService() {
    console.log("FetchDataService ")
}

FetchDataService.prototype.getData = function getData(options) {
    var message = "okay "
    //https://www.drivegaadi.com/search?pickupLocation=2&pickupDate=14-Sep-2018&pickupTime=21%3A30&dropOffDate=25-Sep-2018&dropOffTime=16%3A00",


    console.log( api.example())

    return new Promise((resolve, reject) =>{
        resolve(message);
    })
}

module.exports = FetchDataService;