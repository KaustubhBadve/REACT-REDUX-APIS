import React from 'react'
import { Link } from 'react-router-dom'
import style from '../pages/pages.module.css'
import Total from './Total'
const Navbar = () => {

  return (
    <div style={{display:"flex", gap:"150px",marginLeft:"50px",fontSize:"33px",alignItems:"center",justifyContent:"space-between",marginRight:"100px"}}>
      <div  style={{display:"flex", gap:"150px",marginLeft:"50px",marginTop:"50px",fontSize:"33px"}}>
        <Link to='/' style={{color:'yellow',fontSize:"43px",fontWeight:"600"}}>Home</Link>
        <Link to='/todo' style={{color:'yellow',fontSize:"43px",fontWeight:"600"}}>TodoList</Link>
          </div>
        
        <Total/>
    </div>
  )
} 

export default Navbar