import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useRef} from 'react'
import {loginpage} from '../store/Login/Action.js'
import { useNavigate } from 'react-router-dom'
  
const Login = () => {
  const dispatch=useDispatch()

  const {isAuth,loading,error,data}=useSelector((state)=>state.Login)

  const Navigate=useNavigate()

const reflogin = useRef()

const refpass = useRef()

useEffect(() => {
  if(isAuth)
  {
     Navigate("/")
  }
 }, [isAuth])




  if(loading){
    return <div>Loading...</div>
  }
  else if(error){
    return <div>Something Went Wrong</div>
  }





  const Handlelogin=()=>{
   let valueEmail=reflogin.current.value
  let valuepass=refpass.current.value
dispatch(loginpage({email:valueEmail,password:valuepass}))
  }

  return (
    <div>
        <h1>Login</h1>
        <input type="text" placeholder='Email' ref={reflogin} />
        <input type="text" placeholder='Password' ref={refpass} />
      
       <button onClick={Handlelogin}>Login</button>
    </div>
  )
}

export default Login