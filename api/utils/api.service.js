const https = require('https');

const makeApiCall = function makeApiCall(url, header, method, body={}) {
    let options = {
        url: "https://www.drivegaadi.com/search?pickupLocation=2&pickupDate=14-Sep-2018&pickupTime=21%3A30&dropOffDate=25-Sep-2018&dropOffTime=16%3A00",
        method : "GET"
    }

    if (method == "POST") {
        options.body = body
    }
    let responseObj = {count:0, message:""};
    return new Promise((resolve, reject) => {
        const req = https.request(options, function(response) {
            console.log("response statusCode " +response.statusCode)
            console.log("response headers " +response.headers)

            response.on("data" , function(res) {
                console.log("Data found  = "+response)
                responseObj.message = response
            });
            
        })

        req.on("end" , function(err) {
            responseObj.count = 1;
            responseObj.message = err
        });

        req.end()
        console.log("responseObjresponseObj"+ JSON.stringify(responseObj))
        if (responseObj.count)
        return reject(responseObj.message)
        else 
        return resolve(responseObj.message)

    })
    .then(data => console.log("DATA " + data))
    .catch(err=> console.log("err "+ err))
}

const example = function() {
    let options = {
        url: "https://www.drivegaadi.com/search?pickupLocation=2&pickupDate=14-Sep-2018&pickupTime=21%3A30&dropOffDate=25-Sep-2018&dropOffTime=16%3A00",
        method : "GET"
    }
    const req = https.request(options, (res) => {
        console.log('statusCode:', res.statusCode);
        console.log('headers:', res.headers);
      
        res.on('data', (d) => {
          process.stdout.write(d);
        });
      });
      
      req.on('error', (e) => {
        console.error(e);
      });
      req.end();
}


module.exports = {
    makeApiCall,
    example
};