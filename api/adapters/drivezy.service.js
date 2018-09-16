var BaseInterface = require('./base.drive.service')
var DriveZy = function DriveZy() {
    console.log("DriveZy")
}

DriveZy.prototype = Object.create(BaseInterface)
DriveZy.prototype.formatData = function formatData(data){

}
DriveZy.prototype.convertToTemplate = function convertToTemplate(data) {

    var formattedDate = this.formatData(data);
    
}

module.exports  = DriveZy;