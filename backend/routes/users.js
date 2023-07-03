const router=require('express').Router()
const User = require('../models/User')
const bcrypt=require('bcrypt')
const {verify,verifyTokenAndAuthorization, verifyTokenAndAdmin}=require('./verifyToken')

//UPDATE USER
router.put("/user/:id",verifyTokenAndAuthorization,async (req,res)=>{
    try{
        if(req.body.password){
            const salt=await bcrypt.genSalt(10)
            hashedPass=await bcrypt.hashSync(req.body.password,salt)
        }
        const updatedUser=await User.findByIdAndUpdate(req.params.id,
            {$set:{name:req.body.name,email:req.body.email,password:hashedPass}},
            {new:true})
        res.status(200).json(updatedUser)

    }
    catch(err){
        res.status(500).json(err)
    }
    
})


//DELETE USER
router.delete("/user/:id",verifyTokenAndAuthorization,async (req,res)=>{
    try{
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json("user has been deleted!")
    }
    catch(err){
        res.status(500).json(err)
    }
})

//GET USER DATA BY USER
router.get("/user/:id",verifyTokenAndAuthorization,async(req,res)=>{
    try{
        const id=req.params.id
        const user=await User.findById(id)
        const {...others}=user._doc
            res.status(200).json({...others})
    }
    catch(err){
        res.status(500).json(err)
    }
})

//GET USER DATA BY ADMIN
router.get("/user/:id",verifyTokenAndAdmin,async(req,res)=>{
    try{
        const id=req.params.id
        const user=await User.findById(id)
        const {password,...others}=user._doc
        res.status(200).json({...others})
    }
    catch(err){
        res.status(500).json(err)
    }
})

//GET ALL/NEW USERS
router.get("/all",verifyTokenAndAdmin,async(req,res)=>{
    const query=req.query.new
    try{
        const users=query?await User.find().sort({_id:-1}).limit(5) : await User.find()
        res.status(200).json(users)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//GET STATS (ONLY FOR ADMIN)
router.get("/stats/",verifyTokenAndAdmin,async (req,res)=>{
    const date=new Date()
    const lastYear=new Date(date.setFullYear(date.getFullYear()-1))

    try{

        const data=await User.aggregate([
            {$match:{createdAt:{$gte:lastYear}}},
            {
                $project:{
                    month:{$month:"$createdAt"},
                }
            },
            {$group:{
                _id:"$month",
                total:{$sum:1},

            }
        }
        ])
        res.status(200).json(data)

    }
    catch(err){
        res.status(500).json(err)
    }
})

module.exports=router