import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'



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

    <div>{item}</div>
    
    </div>
  )
}

export default Todoitem