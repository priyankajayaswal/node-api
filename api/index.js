const express = require('express');
const router = express.Router();
const fetchDataRoute = require('./routes/fetchdata.route');

router.get("/health-check", (req,res)=> {
    res.send("OK")
});
router.use('/fetch-data', fetchDataRoute);

module.exports = router;