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
        let r=await axios.get(`http://localhost:8080/Todos/${id}`)
       console.log(r.data.todoname)
        setitem(r.data.todoname)
     }
     fetch()
}, [])


  return (
    <div>
      <h1 style={{fontSize:"40px",color:"white"}}>Todo Item</h1>
      <h1>Todoitem ID : {id}</h1> 

    <h1>{item}</h1>
   
    <Link to={`/todo/${id}/edit`}><button>Update</button></Link> 
  
    </div>
  )
}

export default Todoitem