const { response } = require('express')
const jwt=require('jsonwebtoken')

const verify=(req,res,next)=>{
    const authHeader=req.headers.token
    if(authHeader){
        const token=authHeader.split(" ")[1]
        jwt.verify(token,process.env.token,(err,user)=>{
            if(err){
                return res.status(401).json("token is not valid")
            }
            req.user=user
            
            next()

        })

    }
    else{
        res.status(401).json('you are not authenticated')
    }
}

//FOR USER
const verifyTokenAndAuthorization=(req,res,next)=>{
     verify(req,res,()=>{
        // console.log(req)
        if(req.user.id===req.params.id || req.user.isAdmin || req.user.id===req.params.userId){
            // console.log("nice")
            next()
        }
        else{
            res.status(403).json("you are not allowed to do that!")
        }

     })
}


//FOR ADMIN
const verifyTokenAndAdmin=(req,res,next)=>{
    verify(req,res,()=>{
       if(req.user.isAdmin){
        //    console.log("nice")
           next()
       }
       else{
           res.status(403).json("you are not allowed to do that!")
       }

    })
}



module.exports={verify,verifyTokenAndAuthorization,verifyTokenAndAdmin}
