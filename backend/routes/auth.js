const User = require('../models/User')
const router=require('express').Router()
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

//REGISTER
router.post('/register',async(req,res)=>{
    try{
        const {name,email,password}=req.body
        try{
            const salt=await bcrypt.genSalt(10)
            const hashedPass=await bcrypt.hashSync(password,salt)
            const newUser=new User({name,email,password:hashedPass})
            const savedUser=await newUser.save()
            res.status(201).json(savedUser)
        }
        catch(err){
            res.status(500).json(err)
        }
    }
    catch(err){
        console.log(err)
    }
})

//LOG IN
router.post("/login",async (req,res)=>{
    
    try{
        const user=await User.findOne({email:req.body.email})
        !user && res.status(401).json("no user found!")
        const validated=await bcrypt.compare(req.body.password,user.password)
        if(!validated){
            res.status(404).json("no user found!")
           }
           else{
            const accessToken=jwt.sign(
                {id:user._id,isAdmin:user.isAdmin},
                process.env.token,
                {expiresIn:"5d"})

            const {password,...others}=user._doc
            res.status(200).json({...others,accessToken})
         
           }
    }
    catch(err){
        res.status(500).json(err)
        // return next(err)
    }
})


module.exports=router