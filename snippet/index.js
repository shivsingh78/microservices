import express from "express"
import cors from "cors"
import snippetRouter from './routes/snippet.route.js'
const app = express()
const PORT=3000;

app.use(cors({
     origin:"http://localhost:5173"
}))
app.use(express.json())

app.use("/api/v1/snippet",snippetRouter)

app.get("/",(req,res)=>{
     res.json({message:"Snippet service is ready"})
})

app.listen(PORT,()=>{
     console.log(`Snippet service listening at port ${PORT}`)
})