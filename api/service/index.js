const FetchDataService = require('./fetchdata.service');

module.exports = {
    getFetchDataService : function getFetchDataService() {
        return new FetchDataService;
    }
}