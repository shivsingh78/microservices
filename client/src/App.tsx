import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import CreateSnippet from './component/CreateSnippet'
import CreateComment from './component/createComment'

function App() {
  return (
    <>
    <div >
      <Navbar/>
      <CreateSnippet/>
     
    </div>
     
    </>
  )
}

export default App
