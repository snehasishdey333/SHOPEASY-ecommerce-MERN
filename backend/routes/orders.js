const router=require('express').Router()
const Order = require('../models/Order')
const bcrypt=require('bcrypt')
const {verify,verifyTokenAndAuthorization, verifyTokenAndAdmin}=require('./verifyToken')

//CREATE
router.post('/order/create',verify,async(req,res)=>{
    
  // console.log(req)
        try{
            const newOrder=new Order(req.body)
            const savedOrder=await newOrder.save()
            res.status(201).json(savedOrder)
        }
        catch(err){
            res.status(500).json(err)
        }
    
})

//UPDATE ORDER (FOR ADMIN ONLY)
router.put("/order/edit/:id",verifyTokenAndAdmin,async (req,res)=>{
    try{
        
        const updatedOrder=await Order.findByIdAndUpdate(req.params.id,
            {$set:req.body},
            {new:true})
        res.status(200).json(updatedOrder)

    }
    catch(err){
        res.status(500).json(err)
    }
    
})


//DELETE ORDER
router.delete("/order/:id",verifyTokenAndAuthorization,async (req,res)=>{
    try{
            await Order.findByIdAndDelete(req.params.id)
            res.status(200).json("Order has been cancelled!")
    }
    catch(err){
        res.status(500).json(err)
    }
})

//GET ORDERS (FOR USER ONLY)
router.get("/:userId",verifyTokenAndAuthorization,async(req,res)=>{
    try{
      console.log("hi")
        const userId=req.params.userId
        const orders=await Order.find({userId:userId})
        res.status(200).json(orders)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//GET ALL USER ORDERS (FOR ADMIN ONLY)
router.get("/all",verifyTokenAndAdmin,async (req,res)=>{
    try{
        const allOrders=await Order.find()
        res.status(200).json(allOrders)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//GET MONTHLY INCOME
router.get("/income",verifyTokenAndAdmin,async (req,res)=>{
    
   
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {
    const income = await Order.aggregate([
      { $match: { createdAt: { $gte: previousMonth } } },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    res.status(200).json(income);
  } catch (err) {
    res.status(500).json(err);
  }
})




module.exports=router
