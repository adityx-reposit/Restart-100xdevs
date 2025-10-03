const express = require('express');

const app = express();

let count=0;

function counter (req,res,next){

    count ++
 res.json({
    requestcount:count
 })
    next()
}

app.get("/request",counter,(req,res)=>{
     res.json("request send ")
})


app.listen(3000)