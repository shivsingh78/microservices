import {randomBytes} from 'crypto'
import {snippets} from '../database/index.js'
import axios from 'axios'
export const createSnippet= async(req,res)=>{
     const id=randomBytes(4).toString('hex')
     const {title,code}=req.body;
     //create snippet
     snippets[id]={
          id,
          title,
          code,
     } 
     //Best placed to publish an event
     await axios.post("http://localhost:8005/events",{
          type:"SnippetCreated",
          data:{
               id,
               title
          }
     }).catch((error)=>{
          console.error("Failed to publish SnippetCreated event:", error.message)
     }) 

     return res.status(201).json({ 
          success:true,
          snippet:snippets[id],
          message:"Snippet created successfully"
     }) 
}

export const getSnippet = (_,res)=>{
     return res.status(200).json(snippets)
}
