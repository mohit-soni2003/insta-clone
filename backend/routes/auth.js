const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const USER = mongoose.model("USER");
const bcrypt = require('bcrypt');


router.get("/",(req,res)=>{
    res.send("hello ")
})

router.post("/signup",(req,res)=>{
    const {name , userName , email , password} = req.body;
    let hashpass

    if(!name , !userName , !userName , !password){
       return res.status(422).json ({error : "Please Add All the Filelds"})
    }
    
    USER.findOne({$or : [{email:email}, {userName : userName}]})
    .then((savedUser)=>{
        if(savedUser){
           return res.status(422).json ({error : "User exists with same username or email"})
        }
        
            bcrypt.hash(password, 10).then((hashedPassword)=>{
                const user = new USER({
                    name,
                    email,
                    userName,
                    password : hashedPassword
                })
                user.save()
                .then(()=>{
                    res.json({message : "Saved Succesfully"})
                })
                .catch(err =>
                    console.log(err)
                )

            })
            
      
    }) 


   
})


router.post("/signin",(req,res)=>{
    const {email , password} = req.body;

    if(!email , !password){
        return res.status(422).json({error : "Please Add Email and Password"})
    }
    
    USER.findOne({email:email})
    .then((savedUser)=>{
        if(!savedUser){
            return res.status(422).json({error : "Invalid Email"})
        }
        bcrypt.compare(password,savedUser.password)
        .then((match)=>{
            if(match){
                return res.status(422).json({message : "Signin Successful"})
            }
            else{
                return res.status(422).json({error : "Invalid Password"})
            }
        })
        .catch(err=>console.log(err))
    })

})
module.exports = router