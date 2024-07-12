const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors")
const mongoose = require("mongoose")


require("./models/model")
require("./models/post")

const router = require("./routes/auth")

 
mongoose.connect("mongodb+srv://2mohitsoni:Mohit1234@cluster0.wjfspkb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
mongoose.connection.on("connected",()=>{
    console.log("Succesfullky Connected To Database......")
})
mongoose.connection.on("error",()=>{
    console.log("Not Connected To Database......")
})


app.use(express.json()  )
app.use(cors())
app.use(router)

app.use(require("./routes/auth"))
app.use(require("./routes/createPost"))



 
app.listen(port,()=>{
    console.log("server is running")
})