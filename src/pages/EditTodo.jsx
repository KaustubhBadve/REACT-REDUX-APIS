import React, { useState } from 'react'
import axios from "axios"
import { useNavigate, useParams } from 'react-router-dom'
import style from './pages.module.css'  

const Edittodo = () => {
  const [item, setitem] = useState("")
  const {id}=useParams()
  const navigate=useNavigate()


    const handleEdit=async()=>{
        console.log(item)
        await axios.patch(`http://localhost:8080/Todos/${id}`,{todoname:item})
        navigate('/todo')
      }
     

  return (
   
    <div>
        <h1>Update your TODO Here</h1>
         <input onChange={(e)=>setitem(e.target.value)} type="text" placeholder='Edit your Todo here...'/>
         <button onClick={handleEdit}>Update</button>
    </div>
  )
}

export default Edittodo

