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

router.get("/viewall",async(req,res)=>{
    let result=await postModel.find()
    .populate("userid", "name age mobile address pin -_id")
    .exec()
    res.json(result)
})

router.post("/viewmypost",async(req,res)=>{
    let input=req.body
    let data=await postModel.find(input)
    res.json(data)
})
router.post("/delete",async(req,res)=>{
    let input=req.body
    let response=await postModel.deleteOne(input)
    res.json({
        status:"success"
    })
})
module.exports=router