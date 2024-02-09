const express = require("express")
const router = express.Router()
const bcrypt = require("bcryptjs")

hashPasswordGenerator = async (pass) => {
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(pass, salt)
}

const userModel = require("../model/UserModel")
router.post("/signup", async (req, res) => {

    let { data } = { "data": req.body }
    let password = data.password
    hashPasswordGenerator(password).then(
        (hashedPassword) => {
            console.log(hashedPassword)
            data.password = hashedPassword
            console.log(data)
            let blog = new userModel(data)
            let result = blog.save()
            res.json({
                status: "success"
            })
        }
    )




})


module.exports = router