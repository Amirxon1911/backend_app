const express=require("express")

const app=express()
PORT=5050

app.listen(PORT,()=>console.log(`Listening on PORT:${PORT}`))