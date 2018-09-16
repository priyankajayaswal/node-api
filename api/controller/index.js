const FetchDataController = require('./fetchdata.controller')

module.exports = {
    getFetchDataController : function getFetchDataController() {
        return new FetchDataController;
    } 
}