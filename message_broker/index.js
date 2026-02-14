import axios from 'axios';
import express from 'express'
import cors from 'cors'
const app = express()

const PORT=8005;
app.use(express.json())
app.use(cors())
app.post("/events", async(req,res)=> {  
     const events = req.body;
    await Promise.allSettled([ axios.post("http://localhost:8000/events",events) ,//snippet service
     axios.post("http://localhost:8001/events",events), //comment service
     axios.post("http://localhost:8002/events",events) //query service 
])
     return res.status(200).json({})
})

app.listen(PORT,()=>{
console.log(`Message broker server running at Port ${PORT}`)
})