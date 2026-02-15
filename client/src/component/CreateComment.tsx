import axios from 'axios'
import React, { useEffect, useState } from 'react'

function CreateComment({snippet}) {
     const [text,setText]=useState("")
     const [comments,setComments]=useState([])
     const addComment = async (e) => {
          e.preventDefault()
          try {
               const result = await axios.post(`http://localhost:8001/api/v1/snippet/${snippet.id}/comment`,{text})
               console.log(result.data)
               setComments([...comments,result.data.comment])
               setText("")
               
          } catch (error) {
               console.log(error)
               
          }
     }

     
   
  return (
   <div className=" border text-balck ml-5">
     {
          snippet.comments.map((comment,index)=>(
               <li  key={index}>{comment.content}</li>
          ))
     }
     <form action="" className='flex items-center justify-center mt-20 gap-10' onSubmit={addComment} >
     <input 
     type="text"
     placeholder='Add comment'
     className='border rounded'
     onChange={(e)=>setText(e.target.value)}
     value={text}
     

      />
      <button className='bg-black text-white px-4 '>
          Add
      </button>
   </form>
   </div>
  )
}

export default CreateComment