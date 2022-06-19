import React from 'react'
import { useRef } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom'
import { addtodo } from '../store/Todo/action'
import style from './pages.module.css'


const Home = () => {
    const ref=useRef()
    
    const {isAuth}=useSelector((state)=>state.Login)
    
    const navigate=useNavigate()

    if(isAuth==false)
    {
     navigate("/login")
    }

const dispatch=useDispatch()
const todo=useSelector((state)=>state.todos)

    const handleAdd=()=>{
        let value=ref.current.value
        dispatch(addtodo(value))
        ref.current.value=""
        }

  return (
    <div>
        <h1 style={{fontSize:"80px"}}>TODO</h1>
        <div>
            <input style={{width:"500px",marginBottom:"50px"}} type="text" ref={ref} placeholder='Add todos...'/>
        </div>
        <button style={{width:"120px",height:"60px",fontSize:"30px"}} onClick={handleAdd}>ADD</button>
        <br /><br /><br />
       
    </div>
  )
}

export default Home