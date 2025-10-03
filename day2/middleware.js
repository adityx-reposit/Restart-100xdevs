export default function middleware(req,res,next){
   
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
}