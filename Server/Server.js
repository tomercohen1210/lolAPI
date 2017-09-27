var path = require("path");
var router = require(path.join(__dirname,"HTTP/Http.js"))(80, "public");

/*
router.app.get('/getdata', function (req, res) {

    var dec=req.query.dec;
    var org=req.query.org;


    res.send(info[org][dec]);


});

router.app.post('/writeDetail', function (req, res) {



});
*/

