import React from 'react'
import { useRef } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { addtodo } from '../store/action'



const Home = () => {
    const ref=useRef()
    
const dispatch=useDispatch()
const todo=useSelector((state)=>state.todos)

    const handleAdd=()=>{
        let value=ref.current.value
        dispatch(addtodo(value))
        }

  return (
    <div>
        <h1>TODO</h1>
        <div>
            <input type="text" ref={ref} placeholder='Add todos...'/>
        </div>
        <button onClick={handleAdd}>ADD</button>
        <br /><br /><br />
       
    </div>
  )
}

export default Home