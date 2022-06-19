import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import style from '../pages/pages.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../store/Login/Action'
import Total from './Total'
const Navbar = () => {
  const {isAuth}=useSelector((state)=>state.Login)
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const HandleLogout=()=>{
       dispatch(logout())
       navigate("/login")
  }
  return (
    <div style={{display:"flex", gap:"150px",marginLeft:"50px",fontSize:"33px",alignItems:"center",justifyContent:"space-between",marginRight:"100px"}}>
      <div  style={{display:"flex", gap:"150px",marginLeft:"50px",marginTop:"50px",fontSize:"33px"}}>
        <Link to='/' style={{color:'yellow',fontSize:"43px",fontWeight:"600"}}>Home</Link>
        <Link to='/todo' style={{color:'yellow',fontSize:"43px",fontWeight:"600"}}>TodoList</Link>
        <Link to="/login" style={{color:'yellow',fontSize:"43px",fontWeight:"600"}}>Login</Link>
        <button style={{color:'yellowgreen',fontSize:"30px",fontWeight:"600",backgroundColor:"brown",marginLeft:"100px"}} onClick={HandleLogout}>{isAuth ? "Logout":"Login"}</button>
          </div>
        
        <Total/>
    </div>
  )
} 

export default Navbar