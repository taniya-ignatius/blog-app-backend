const mongoose=require("mongoose")
const postSchema= new mongoose.Schema(
    {
        userid:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"blogs"
        },
        post:{
            type:String,
            required:true
        },
        postedDate:{
            type:Date,
            default:Date.now
        }
    }
)
module.exports=mongoose.model("blogposts",postSchema)