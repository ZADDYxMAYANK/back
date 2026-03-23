const express = require("express")
const app = express();

app.get("/",(req,res)=>{
    res.send("Hello wprld")
})
app.get("/api",(req,res)=>{
    res.send("new api")
})

app.get("/new1",(req,res)=>{
    res.send("brand new api")
    console.log("Server file loaded")
})

app.get("/hi",(req,res)=>{
    res.send("this is a testing")
})

app.listen(3000,()=>{
    console.log("app is running on port 3000")
})