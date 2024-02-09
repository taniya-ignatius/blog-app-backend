const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")

const postModel=require("../model/PostModel")
const router=express.Router()

router.post("/post",async(req,res)=>{
    let data=req.body
    let post=new postModel(data)
    let result=await post.save()
    res.json({
        status:"success"
    })
})
module.exports=router