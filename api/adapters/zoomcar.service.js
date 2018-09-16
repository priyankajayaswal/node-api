var BaseInterface = require('./base.drive.service')
var ZoomCar = function ZoomCar() {
    console.log("ZoomCar")
}

ZoomCar.prototype = Object.create(BaseInterface)
ZoomCar.prototype.formatData = function formatData(data){

}
ZoomCar.prototype.convertToTemplate = function convertToTemplate(data) {

    var formattedDate = this.formatData(data);
    
}

module.exports = ZoomCar;