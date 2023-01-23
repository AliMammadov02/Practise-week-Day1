const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const mongoose = require("mongoose")


dotenv.config()
const { Schema } = mongoose;

const userSchema = new Schema({
    imageUrl: { type: String, required: true },
    userName: { type: String, required: true },
    jobName: { type: String, required: true },
    about: { type: String, required: true },
})

const Users = mongoose.model("users", userSchema)

const app = express()

app.use(cors())
app.use(bodyParser.json())

//get All users

app.get("/users", (req, res) => {
    Users.find({}, (err, docs) => {
        if(!err){
            res.send(docs)
        }else{
            res.status(404).json({message:err})
        }
    })
})

//get by id

app.get("/users/:id",(req,res)=>{
    const {id}=req.params
    Users.findById(id,(err,doc)=>{
        if(!err){
            if(doc){

            }else{
                res.status(404).json({message:err})
            }
        }else{
            res.status(500).json({message:'Server cokdu'})
        }
    })
})

//ADD user

app.post("/users",(req,res)=>{
    const user = new Users({
        imageUrl:req.body.imageUrl,
        userName:req.body.userName,
        jobName:req.body.jobName,
        about:req.body.about
    })

    user.save()
    res.send({message:"User created"})
})

//DELETE
app.delete("/users/:id" ,(req,res)=>{
    const {id}=req.params
    Users.findByIdAndDelete(id,(err)=>{
        if(!err){
            res.send("deleted data")
        }else{
            res.status(404).json({message:err})
        }
    })
})





const PORT=process.env.PORT
const url =process.env.CONNECTION_URL.replace("<password>",process.env.PASSWORD)
mongoose.set('strictQuery', true);
mongoose.connect(url,(err)=>{
    if(!err){
        console.log("DB connected");
        app.listen(PORT,()=>{
            console.log("Server start")
        })
    }

    
})




