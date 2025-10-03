const express = require('express');

const app = express();


app.use(express.json());
app.get("/" , (req , res)=>{
    const kidney = req.body.kidney;
    const kideylength =kidney.length;


    if(!kidney){
        res.json(`enter your kidney`);
        return;
    }
    else{

        res.send(`<h1>Your kidney is ${kidney} and your kidney length is ${kideylength}</h1>`);
    }

}); 

app.use(function(err,req , res , next){
res.json({
    message:"something hell up with the server , please try again later"
})
});

app.listen(3000);