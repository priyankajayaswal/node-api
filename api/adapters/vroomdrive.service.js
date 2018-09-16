var BaseInterface = require('./base.drive.service')
var VroomDrive = function VroomDrive() {
    console.log("VroomDrive")
}

VroomDrive.prototype = Object.create(BaseInterface)
VroomDrive.prototype.formatData = function formatData(data){

}
VroomDrive.prototype.convertToTemplate = function convertToTemplate(data) {

    var formattedDate = this.formatData(data);
    
}

module.exports = VroomDrive;