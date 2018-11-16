const reqPromise = require("request-promise")

var makeApiCall = function makeApiResponse(options){
    return reqPromise(options)
    .then(result => {
        return Promise.resolve(parseJson(parseJson));
    }).catch(err => {
        return Promise.reject({error: JSON.stringify(err)});
    })

}

var isJson = function isJson(obj) {
    try {
        let objParse = JSON.parse(obj)
        return true
    } catch(e) {
        return false
    }
}
var parseJson = function parseJson(response) {
    let res ;
    if (response.body != undefined) {
        res = isJson(response.body) ? JSON.parse(response.body) : response.body;
    } else {
        res = isJson(response) ? JSON.parse(response) : response;
    }
    return res
}

module.exports = {
    makeApiCall   
}