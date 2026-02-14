import {comments} from '../database/index.js'
import axios from 'axios'
import {randomBytes} from 'crypto'
export const createComment=async(req,res)=>{
   
 const commentId=randomBytes(4).toString("hex")
 const {text}=req.body;
 const snippetId=req.params.id;


 const comment = comments[snippetId] || []
 comment.push({commentId,text})
 comments[snippetId]=comment 

 //Best place to publish an event
 await axios.post("http://localhost:8005/events",{
    type:"CommentCreated",
    data:{
        id:commentId,
        content:text,
        snippetId
    }
 }).catch((error)=>{
console.error("Failed to publish event", error.message)
 })
 return res.status(201).json({
     success:true,
     message: "Comment added",
     comment: {commentId,text}
 })

}

export const getCommentBySnippetId=(req,res)=>{
     const snippetId = req.params.id;
     return res.status(200).json(comments[snippetId] || [])
}