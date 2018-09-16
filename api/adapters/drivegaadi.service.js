var BaseInterface = require('./base.drive.service')
var DriveGaadi = function DriveGaadi() {
    console.log("DriveGaadi")
}

DriveGaadi.prototype = Object.create(BaseInterface)
DriveGaadi.prototype.formatData = function formatData(data){

}
DriveGaadi.prototype.convertToTemplate = function convertToTemplate(data) {

    var formattedDate = this.formatData(data);

}

module.exports = DriveGaadi;