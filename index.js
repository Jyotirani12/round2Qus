const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const app=express();
app.use(express.json());
app.use(express.urlencoded())
app.use(cors());
// const url="mongodb+srv://test:test123@cluster0.cxbxf.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect("mongodb://localhost:27017/logindb",{
    useNewUrlParser:true,
    useUnifiedTopology:true

},()=>{
    console.log("database connected")
})
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
  
})
const User=new mongoose.model("User",userSchema)
const client=new mongoose.model("client",userSchema)
app.get("/",(req,res)=>{
    res.send("hello")
})
app.post('/login',(req,res)=>{
    const {email,password}=req.body;
    res.send("user has enteres this",{email})
    User.findOne({email:email},(err,user)=>{
        if(user){
            // alert("user is registered")
            if(password===user.password){
                res.send({message:"Login Successful",user})
            }         
        else{
            res.send({message:"Password does not match"})
        }
    }
    else{
        res.send({message:"User is not registered"})
    }
 })

  
})
    
    

app.post('/register',(req,res)=>{
    const {name,email,password}=req.body;
    User.findOne({email:email},(err,user)=>{
        if(user){
            res.send({message:"User already Registered"})

        }
        else{
            const user=new User({
                name,
                email,
                password
            })
            console.log("new user registered")
            user.save(err=>{
                if(err){
                    console.log("error")
                }
                else{
                    console.log("You are successfully Registered")
                }
            })

        }
    })
    
})

app.listen(8000,()=>{
    console.log("node first app")
})