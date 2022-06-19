import axios from 'axios'
import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'

const Total = () => {
const [todo, settodo] = useState([])
const Total=useRef()
var PendingTodo=0


useEffect(() => {
  const  getFetch=async()=>{
 let r=await axios.get("http://localhost:8080/Todos")
      settodo(r.data)
      
}
getFetch()
Total.current=todo.length


}, [Total.current])

for(let i=0;i<todo.length;i++)
{
    if(todo[i].flag===false)
    {
        PendingTodo++
    }
}


  return (
    <div style={{display:"flex",gap:"30px",alignItems:"center",color:"yellow",fontSize:"20px",fontWeight:"600"}}>
         
        <div>Total Todos : {Total.current}</div>
        <div>Completed Todos : {Total.current-PendingTodo}</div>
        <div>Pending Todos : {PendingTodo }</div>
    </div>
  )
}

export default Total