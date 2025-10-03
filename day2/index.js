const express  = require ('express');
const app =express();

app.get("/health",(req,res)=>{
    const kedneyid=req.query.kedneyid;
    const username =req.headers.username;
    const password =req.headers.password;
     

    if(username!='Aditya' || password !='pass' ){
        res.status(400).json({
            message:"Wrong credentials"
        })
        return;
    }

    if(kedneyid != 1 && kedneyid != 2){
        res.status(401).json({
            message:"wrong input "
        })
        return;
    }

res.status(200).json({
    message:"checked and confirmed"
})
});


app.listen(3000);