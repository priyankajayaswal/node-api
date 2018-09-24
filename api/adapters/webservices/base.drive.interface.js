var required = function(){ throw new Error("Implement!"); };
var assignOptions = function assignOptions(options) {
    this.location = options.location,
    this.startDate = options.startDate,
    this.startTime = options.startTime,
    this.endDate = options.endDate,
    this.endTime = options.endTime
    
}
var BaseInterface = {
    formatData: required,
    convertToTemplate: required,
    assignOptions: assignOptions
};

module.exports = BaseInterface;