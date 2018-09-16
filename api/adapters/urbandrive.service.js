var BaseInterface = require('./base.drive.service')
var UrbanDrive = function UrbanDrive() {
    console.log("UrbanDrive")
}

UrbanDrive.prototype = Object.create(BaseInterface)
UrbanDrive.prototype.formatData = function formatData(data){

}
UrbanDrive.prototype.convertToTemplate = function convertToTemplate(data) {

    var formattedDate = this.formatData(data);
    
}

module.exports = UrbanDrive;