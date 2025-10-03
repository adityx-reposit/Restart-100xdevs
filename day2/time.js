const express = require('express');
var responseTime = require('response-time');
const app = express();




app.use(responseTime());

app.get("/time" , (req , res)=>{
    res.json({
        time : responseTime(req)
    })
});



app.listen(3000 );