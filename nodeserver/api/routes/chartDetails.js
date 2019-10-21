const express =require('express')
const router = express.Router();
var db = require('../../db.js');



router.get('/:deveui', (req, res, next) => {
    // var deviceeui=req.body.deveui;
    console.log(req.params.deveui);
    
    const sql = "SELECT meterdata,date_format(`time`,'%Y-%m-%d') AS date FROM `demo_loradata` where deveui=? ORDER BY `time` DESC";
    db.query(sql,[req.params.deveui],(err, result)=>{
        if (err) throw err
        res.send(JSON.stringify(result));
        console.log(result);

    })
   
})
module.exports = router