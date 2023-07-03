const router=require('express').Router()
const Product = require('../models/Product')
const bcrypt=require('bcrypt')
const {verify,verifyTokenAndAuthorization, verifyTokenAndAdmin}=require('./verifyToken')

//CREATE
router.post('/product/create',verifyTokenAndAdmin,async(req,res)=>{
    
        try{
            
            const newProduct=new Product(req.body)
            const savedProduct=await newProduct.save()
            res.status(201).json(savedProduct)
        }
        catch(err){
            res.status(500).json(err)
        }
    
})

//UPDATE PRODUCT
router.put("/product/edit/:id",verifyTokenAndAdmin,async (req,res)=>{
    try{
        
        const updatedProduct=await Product.findByIdAndUpdate(req.params.id,
            {$set:req.body},
            {new:true})
        res.status(200).json(updatedProduct)

    }
    catch(err){
        res.status(500).json(err)
    }
    
})


//DELETE PRODUCT
router.delete("/product/:id",verifyTokenAndAdmin,async (req,res)=>{
    try{
            await Product.findByIdAndDelete(req.params.id)
            res.status(200).json("Product has been deleted!")
    }
    catch(err){
        res.status(500).json(err)
    }
})

//GET PRODUCT (FOR EVERYBODY)
router.get("/product/:id",async(req,res)=>{
    try{
        const id=req.params.id
        const product=await Product.findById(id)
        res.status(200).json(product)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//GET ALL PRODUCTS (FOR EVERYBODY)
// router.get("/all",async(req,res)=>{
//     try{
//         const products=await Product.find()
//         res.status(200).json(products)
//     }
//     catch(err){
//         res.status(500).json(err)
//     }
// })


//GET ALL PRODUCTS WITH QUERIES (FOR EVERYBODY)
router.get("/all",async(req,res)=>{
    const qNew=req.query.new
    const qCategory=req.query.category
    try{
        let products;

        if(qNew){
            products=await Product.find().sort({createdAt:-1}).limit(1)
        }
        else if(qCategory){
            products=await Product.find({categories:{$in:[qCategory]}})
        }
        else{
            products=await Product.find()
        }
        res.status(200).json(products)
        
    }
    catch(err){
        res.status(500).json(err)
    }
})



module.exports=router