var db = require('../../db.js');
const express = require('express')
const router = express.Router();

router.post('/login',(req,res,next)=>{
    const sql = `SELECT * FROM users where username = ?`;
    db.query(sql,[req.body.username],(err, result)=>{
        console.log(result[0].password);
        
        if (err) {res.status(500).json({error:err})}
        if(result.length>0){
            if(result[0].password == req.body.password)
                res.status(200).json(result);
            else
                res.status(401).json({error:"Invalid Password"})
        }else
            res.status(401).json({error:"Invalid User ID"});
    })
})

router.post('/signup',(req,res,next)=>{
    const sql = `INSERT INTO users (name,username,password) VALUES (?,?,?)`;
    db.query(sql,[req.body.name,req.body.username,req.body.password],(err,result)=>{
        if(err){
            if(err.errno == 1062)
                res.status(409).json({error:"User id already exists"})
            else 
                res.status(500).json({error:err})
        }else{
            res.status(201).json({status:"Record created successfully"})
        }
    })
})

module.exports = router