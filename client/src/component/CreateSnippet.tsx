import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CreateComment from './createComment'

function CreateSnippet() {
  const [title,setTitle]=useState("")
  const [code,setCode]=useState("")
  const [snippet,setSnippet]=useState([])
  const createSnippet= async(e)=>{
    e.preventDefault()
    try {
      const result = await axios.post("http://localhost:8000/api/v1/snippet",{title,code})
      console.log(result)
      alert(result.data.message)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
const fetchSnippet = async()=>{
  const result = await axios.get("http://localhost:8000/api/v1/snippet")
  setSnippet(result.data)
}
fetchSnippet()
  },[])
  return (
    <div className=' mt-10'>
     <form onSubmit={createSnippet} action="" className='flex flex-col items-center justify-center gap-2 ml-2'>
          <input 
          type="text" 
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          placeholder='Title'
          className='border rounded-xl px-2 py-1 w-fit'
           />
          <textarea 
           value={code}
          onChange={(e)=>setCode(e.target.value)}
          name="" 
          id="" 
          placeholder='write a code snippets' className='border rounded-2xl px-2 py-1 w-3xl'/>
          <button className="bg-black text-white py-2 px-4 rounded cursor-pointer">Add</button>
     </form>
     
      {
        Object.values(snippet).map((sni)=>(
          <div  key={sni.id} className='p-3 border rounded '>
            <h1 className=' font-semibold'>{sni.title} </h1>
          <h3 >{sni.code} </h3>
           <CreateComment snippetId={sni.id}/>
          </div>
        ))
      }
     </div>
    
  )
}

export default CreateSnippet