const express = require('express');
const app = express();
const http = require("https");
const config = require('./api/config/config')
const port = 5000;


app.get("/help",function(req,res,next){
    res.send({"ok":"final"})
});
app.use(config.prefix+config.endpoint, require('./api/index.js'))
app.listen(port, ()=>console.log("Seems working "));