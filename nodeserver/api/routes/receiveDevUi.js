const express = require('express')
const router = express.Router();
var mysql = require('mysql');
const converter = require('hex2dec');
var con = require('../../db.js');

// var con = mysql.createConnection({
//     host: "127.0.0.1",
//     user: "rajesh",
//     password: "admin@123",
//     database: "lora-db"
// });
// con.connect(function (err) {
//     if (err) throw err;
//     console.log('connected....')
// })


router.get('/', (req, res, next) => {
    con.query("SELECT `deveui`,`meterdata`,`frame_cnt`,`time` FROM demo_loradata where time IN (SELECT time FROM demo_loradata order by time) group by deveui ", function (err, results, fields) {
        if (err) throw err
        res.send(JSON.stringify(results));
        console.log(results);

    })
   
})


router.post('/', (req, res, next) => {
    let jsondata = JSON.stringify(req.body);
    // console.log(jsondata);
    var deveui = req.body.devEUI;
    // console.log(deveui);
    //convert meterdata
    var meterdata = req.body.data;
    var buf = new Buffer(meterdata, 'base64');
    var str = new Buffer(buf).toString('hex');
    var sub = str.substring(0, 2);
    var mdata = converter.hexToDec(sub);
    console.log(mdata);
    //frame_cnt
    var frame_cnt = req.body.fCnt;
       //time
    var r_time = req.body.time;
    var time = r_time.replace('T', ' ');
    var re_time = time.substring(0, 19);
    console.log(re_time);
    var values = [deveui, jsondata, mdata, frame_cnt, re_time];
    let sql = "INSERT INTO `demo_loradata` ( `deveui`, `json_packet`, `meterdata`, `frame_cnt`, `time`) VALUES (?);";
    con.query(sql, [values],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({ error: err })
            } else {
                res.status(201).json({ error: 'Record Created' })
            }
        });

})


module.exports = router