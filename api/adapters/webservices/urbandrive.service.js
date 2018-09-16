var BaseInterface = require('./base.drive.interface')
var UrbanDrive = function UrbanDrive(options) {
    this.data = options.data
    console.log("UrbanDrive")
}

UrbanDrive.prototype = Object.create(BaseInterface)
UrbanDrive.prototype.formatData = function formatData(data){

}
UrbanDrive.prototype.convertToTemplate = function convertToTemplate(data) {

    var formattedDate = this.formatData(data);
    
}

module.exports = UrbanDrive;