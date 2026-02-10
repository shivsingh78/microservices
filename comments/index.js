import express from 'express'
import cors from 'cors'
import commentRouter from './routes/comment.route.js'

const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/v1/snippet",commentRouter)
const PORT=8000
app.listen(PORT,()=>{
     console.log(`server is lisning at port ${PORT}`)
})