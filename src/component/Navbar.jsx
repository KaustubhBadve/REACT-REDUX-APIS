import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:"flex", gap:"50px",marginLeft:"50px"}}>
        <Link to='/'>Home</Link>
        <Link to='/todo'>TodoList</Link>
    </div>
  )
}

export default Navbar