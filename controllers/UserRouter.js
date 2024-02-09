const express=require("express")
const router=express.Router()

const userModel=require("../model/UserModel")
router.post("/signup",async(req,res)=>{
    let data=req.body
    let blog=new userModel(data)
    let result=await blog.save()
    res.json({
        status:"success"
    })
})


module.exports=router