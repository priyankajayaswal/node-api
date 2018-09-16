var required = function(){ throw new Error("Implement!"); };
var BaseInterface = {
    formatData: required,
    convertToTemplate: required,
    url: required
};

module.exports = BaseInterface;