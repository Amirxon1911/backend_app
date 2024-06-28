const express = require("express")

const app = express()
app.use(express.json())
PORT = 5050


app.get('/', (req, res) => {    
    res.status(200).json({massage:"salom"})
    res.get("Hello GET")
})

app.post('/', (req, res) => {
    const {name, surname}=req.body
    const massage=`fullname: ${name} ${surname}`
    console.log(massage);
    res.send("Hello POST")
})

app.delete("/:id",(req,res)=>{
    const {id}=req.params
    console.log(id);
    res.send("Hello DELETE")
})

app.put("/:id",(req,res)=>{
    const {id}=req.params
    const body=req.body
    console.log({id,body});
    res.send("Hello PUT")
})
app.listen(PORT, () => console.log(`Listening on PORT: http://localhost:${PORT}`))