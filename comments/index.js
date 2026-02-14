import express from 'express'
import cors from 'cors'
import commentRouter from './routes/comment.route.js'

const app = express()
app.use(cors())
app.use(express.json())

app.post("/events",(req,res)=>{
     console.log("Received Events",req.body.type)
     return res.status(200).json({})
})

app.use("/api/v1/snippet",commentRouter)
const PORT=8001
app.listen(PORT,()=>{
     console.log(` Comment server is lisning at port ${PORT}`)
})