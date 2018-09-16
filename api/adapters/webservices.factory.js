var DriveGaadi = require('./drivegaadi.service');
var DriveZy = require('./drivezy.service');
var PleasantCarRentals = require('./pleasantcarrentals.service');
var UrbanDrive = require('./urbandrive.service');
var VroomDrive = require('./vroomdrive.service');
var ZoomCar = require('./zoomcar.service');

var WebServiceFactory = function WebServiceFactory(options) {
    this.options = options;
}

WebServiceFactory.prototype.getWebService = function getWebService() {
    switch(this.options.serviceEnum){
        case 'DRIVEGAADI': return new DriveGaadi(this.options); break;
        case 'DRIVEZY': return new DriveZy(this.options); break;
        case 'PLEASANTCARRENTALS': return new PleasantCarRentals(this.options); break;
        case 'URBANDRIVE': return new UrbanDrive(this.options); break;
        case 'VROOMDRIVE': return new VroomDrive(this.options); break;
        case 'ZOOMCAR': return new ZoomCar(this.options); break;

    }
}

module.exports = WebServiceFactory;