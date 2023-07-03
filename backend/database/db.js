const mongoose=require('mongoose')
const dotenv=require('dotenv')

dotenv.config()

//database
const connect=async()=>{
    try{
        await mongoose.connect(process.env.MONGO)
        console.log("database is connected successfully!")
    }
    catch(err){
        console.log(err)
    }
}

module.exports=connect