const express = require("express")

const app = express()

app.get('/',(req,res)=>{
    res.send({"message":"home"})
})

app.listen(8080,()=>{
    console.log("server is running")
})

// go to database folder & run connection.js