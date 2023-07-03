const router=require('express').Router()
const Cart = require('../models/Cart')
const bcrypt=require('bcrypt')
const {verify,verifyTokenAndAuthorization, verifyTokenAndAdmin}=require('./verifyToken')

//CREATE
router.post('/cart/create',verify,async(req,res)=>{
    
        try{
            const newCart=new Cart(req.body)
            const savedCart=await newCart.save()
            res.status(201).json(savedCart)
        }
        catch(err){
            res.status(500).json(err)
        }
    
})

//UPDATE CART
router.put("/cart/edit/:id",verifyTokenAndAuthorization,async (req,res)=>{
    try{
        
        const updatedCart=await Cart.findByIdAndUpdate(req.params.id,
            {$set:req.body},
            {new:true})
        res.status(200).json(updatedCart)

    }
    catch(err){
        res.status(500).json(err)
    }
    
})


//DELETE CART
router.delete("/cart/:id",verifyTokenAndAuthorization,async (req,res)=>{
    try{
            await Product.findByIdAndDelete(req.params.id)
            res.status(200).json("Cart has been deleted!")
    }
    catch(err){
        res.status(500).json(err)
    }
})

//GET CART (FOR USER ONLY)
router.get("/cart/:userId",async(req,res)=>{
    try{
        const userId=req.params.userId
        const cart=await Cart.findOne({userId:userId})
        res.status(200).json(cart)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//GET ALL CARTS (FOR ADMIN ONLY)
router.get("/all",verifyTokenAndAdmin,async (req,res)=>{
    try{
        const carts=await Cart.find()
        res.status(200).json(carts)
    }
    catch(err){
        res.status(500).json(err)
    }
})




module.exports=router