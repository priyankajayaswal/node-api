var BaseInterface = require('./base.drive.interface')
var DriveGaadi = function DriveGaadi(options) {
    this.data = options.data
    console.log("DriveGaadi")
}

DriveGaadi.prototype = Object.create(BaseInterface)
DriveGaadi.prototype.formatData = function formatData(data){

}
DriveGaadi.prototype.convertToTemplate = function convertToTemplate(data) {

    var formattedDate = this.formatData(data);

}

module.exports = DriveGaadi;