import express from "express"
import cors from "cors"
import snippetRouter from './routes/snippet.route.js'
const app = express()
const PORT=8000;
app.use(cors())
app.use(express.json())

app.post("/events",(req,res)=>{
     console.log("Received Events",req.body.type)
     return res.status(200).json({})
})



app.use("/api/v1/snippet",snippetRouter)

app.get("/",(req,res)=>{
     res.json({message:"Snippet service is ready"})
})

app.listen(PORT,()=>{
     console.log(`Snippet service listening at port ${PORT}`)
})