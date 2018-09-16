module.exports = {
    "prefix" : "/rentov",
    "endpoint": "/api",
    driveGaadi : {
        get : {
            example :"https://www.drivegaadi.com/search?pickupLocation=2&pickupDate=14-Sep-2018&pickupTime=21%3A30&dropOffDate=25-Sep-2018&dropOffTime=16%3A00",
            template: "​https://www.drivegaadi.com/search?pickupLocation={{PICK_UP_POINT_ID}}&pickupDate={{FROM_DATE}}&pickupTime={{FROM_TIME}}&dropOffDate={{TO_DATE}}&dropOffTime={{TO_TIME}}"
        }
    },
    driveZy : {
        get : {
            example :"https://drivezy.com/Bengaluru/search?start_time=2018-09-14%2000:00&end_time=2018-09-14%2012:00&address=RT%20Jagannath%20Layout%20Main%20Rd,%20Chandrika%20Layout,%20Basavanapura,%20Krishnarajapura,%20Bengaluru,%20Karnataka%20560049,%20India&latitude=13.0143387&longitude=77.71624680000002&name=Home:%20RT%20Jagannath%20Layout%20Main%20Road&type=19&bike=0",
            template: "https://drivezy.com/Bengaluru/search?start_time={{FROM_DATE}} {{FROM_TIME}}&end_time={{TO_DATE}} {{TO_TIME}}&address={{PICK_UP_POINT_COMPLETE_ADDREE}}&type=19&bike=0",
        }
    },
    pleasantCarRentals : {
        get : {
            example :"http://pleasantcarrentals.com/cars/?selectvehicle=cars&pickupdate=18-09-2018&pickuptime=10&dropoffdate=27-09-2018&dropofftime=11&submit=Book+Now",
            template: "http://pleasantcarrentals.com/cars/?selectvehicle={{VEHICLE_TYPE}}&pickupdate={{FROM_DATE}}&pickuptime={{FROM_TIME}}&dropoffdate={{TO_DATE}}&dropofftime={{TO_TIME}}&submit=Book+Now"
        }
    },
    urbanDrive : {
        get : {
            example :"https://www.urbandrive.co.in/Home/GetTatMinBooking?vehicleType=Car&_=1536846984757",
            template: "​https://www.urbandrive.co.in/Home/GetTatMinBooking?vehicleType=Car&_=1536846984757"
        }
    },
    vroomDrive : {
        get : {
            example :"https://www.vroomdrive.com/customerBooking/carsearch/getall?fromDate=14/09/2018 2010:30&toDate=28/09/2018 2018:30&city=Bangalore&hubName=Bilekahalli&bookingType=Pickup",
            template: "​https://www.vroomdrive.com/customerBooking/carsearch/getall?fromDate={{FROM_DATE}} {{FROM_TIME}}&toDate={{TO_DATE}} {{TO_TIME}}&city={{CITY}}&hubName={{PICK_UP_POINT}}&bookingType=Pickup"
        }
    },
    zoomCar : {
        get : {
            example : "​https://api.zoomcar.com/v4/search?lat=12.9718915&lng=77.6411545&starts=2018-09-20%2008%3A30&ends=2018-09-22%2012%3A30&type=zoom_later&platform=web&version=2&device_id=000&device_name=000&city=bangalore&zap=true",
            template: "https://api.zoomcar.com/v4/search?lat=12.9718915&lng=77.6411545&starts={{FROM_DATE}} {{FROM_TIME}}&ends={{TO_DATE}} {{TO_TIME}}&type=zoom_later&platform=web&version=2&device_id=000&device_name=000&city={{PICK_UP_POINT}}&zap=true",

        }
    }
}