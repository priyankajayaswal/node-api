var FetchDataService = function FetchDataService() {
    console.log("FetchDataService ")
}

FetchDataService.prototype.getData = function getData() {
    var message = "okay "
    return new Promise((resolve, reject) =>{
        resolve(message);
    })
}

module.exports = FetchDataService;