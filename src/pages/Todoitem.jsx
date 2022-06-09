import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import style from './pages.module.css'


const Todoitem = () => {
    const {id}=useParams()
    const [item, setitem] = useState()  

useEffect(() => {
    const fetch=async()=>{
        let r=await axios.get(`http://localhost:3002/Todos/${id}`)
       console.log(r.data.todoname)
        setitem(r.data.todoname)
     }
     fetch()
}, [])


  return (
    <div>Todoitem ID : {id} 

    <h1>{item}</h1>
   
    <Link to={`/todo/${id}/edit`}><button>Update</button></Link> 
  
    </div>
  )
}

export default Todoitem