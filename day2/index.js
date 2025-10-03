const express  = require ('express');
const app =express();


function uservalidation(req,res,next){
    const username = req.headers.username;
    const password= req.headers.password;
        if(username!='Aditya' || password !='pass' ){
        res.status(400).json({
            message:"Wrong credentials"
        })
        return;
    }
    else{
        next()
    }

   
}


function keydneyvalidation(req,res,next){

    const kedneyid=req.query.kedneyid;
     if(kedneyid != 1 && kedneyid != 2){
        res.status(401).json({
            message:"wrong input "
        })
        return;
    }
    else{
        next()
    }
}


app.get("/health",uservalidation,keydneyvalidation,(req,res)=>{

res.status(200).json({
    message:"checked and confirmed"
})
});


app.listen(3000);