var BaseInterface = require('./base.drive.interface')
var ZoomCar = function ZoomCar(options) {
    this.data = options.data
    console.log("ZoomCar")
}

ZoomCar.prototype = Object.create(BaseInterface)
ZoomCar.prototype.formatData = function formatData(data){

}
ZoomCar.prototype.convertToTemplate = function convertToTemplate(data) {

    var formattedDate = this.formatData(data);
    
}

module.exports = ZoomCar;