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

module.exports = router