const express  = require ('express');
const app =express();

app.get("/health",(req,res)=>{
    const kedneyid=req.query.kedneyid;
    const username =req.headers.username;
    const password =req.headers.password;
     


res.status(200).json({
    message:"checked and confirmed"
})
});


app.listen(3000);