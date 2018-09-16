var BaseInterface = require('./base.drive.interface')
var PleasantCarRentals = function PleasantCarRentals(options) {
    this.data = options.data
    console.log("PleasantCarRentals")
}

PleasantCarRentals.prototype = Object.create(BaseInterface)
PleasantCarRentals.prototype.formatData = function formatData(data){

}
PleasantCarRentals.prototype.convertToTemplate = function convertToTemplate(data) {

    var formattedDate = this.formatData(data);
    
}

module.exports = PleasantCarRentals;