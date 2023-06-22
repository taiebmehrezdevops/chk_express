const express=require("express")
const app=express()
const date=require("./Middelware/Date")
var path= __dirname + '/Public/';

app.use(date)

app.get("/index",(req,res)=>{
    res.sendFile(__dirname+"/Public/index.html")
})
app.get("/Home",(req,res)=>{
    res.sendFile(__dirname+"/Public/Home.html")
})
app.get("/Services",(req,res)=>{
    res.sendFile(__dirname+"/Public/Services.html")
})
app.get("/Contact",(req,res)=>{
    res.sendFile(__dirname+"/Public/Contact.html")
})


app.get("*",(req,res)=>{
    res.send("not found !")
 })
const port=5000

app.listen(port,(err)=>{
    err?console.log(err):console.log(`server is running on port ${port}`)
})
