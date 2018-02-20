var express = require("express");
var app = express();
var router = express.Router();
var fs = require('file-system');
var bodyParser = require('body-parser');

router.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
});

var jsonParser = bodyParser.json()


var urlencodedParser = bodyParser.urlencoded({ extended: false })


router.get("/read", function(req, res) {
  fs.readFile('./Hivmedicines.json', 'utf8', function (err, order_data) {
      if (err) throw err;
      var obj = JSON.parse(order_data);
      res.json(obj);
    });  
});

router.get("/readm", function(req, res) {
    fs.readFile('./malaria_medicines.json', 'utf8', function (err, order_data1) {
        if (err) throw err;
        var obj1 = JSON.parse(order_data1);
        res.json(obj1);
      });  
  });

  router.get("/readexcel", function(req, res) {
    fs.readFile('./Exceldata.json', 'utf8', function (err, order_data2) {
        if (err) throw err;
        var obj2 = JSON.parse(order_data2);
        res.json(obj2);
      });  
  });
app.use("/", router);

app.listen(8000, function() {
    console.log("Live at Port 8000");
});
