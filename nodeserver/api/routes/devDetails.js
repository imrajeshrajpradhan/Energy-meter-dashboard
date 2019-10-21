const express =require('express')
const router = express.Router();
var db = require('../../db.js');



router.get('/:deveui', (req, res, next) => {
    // var deviceeui=req.body.deveui;
    console.log(req.params.deveui);
    
    const sql = `SELECT deveui,meterdata,frame_cnt,time FROM demo_loradata where deveui=?`;
    db.query(sql,[req.params.deveui],(err, result)=>{
        if (err) throw err
        res.send(JSON.stringify(result));
        console.log(result);

    })
   
})
module.exports = router