var BaseController = function BaseController() {
    console.log("Base Controller ")
}

BaseController.prototype.getSuccessResponse = function getSuccessResponse(message){return {"status":{"code":200,"error":false},"body":message}}
BaseController.prototype.getErrorResponse = function getErrorResponse(message){return {"status":{"code":400,"error":true},"body":message}}
BaseController.prototype.getCustomResponse = function getCustomResponse(message){return {"status":{"code":500,"error":false},"body":message}}

module.exports = BaseController;