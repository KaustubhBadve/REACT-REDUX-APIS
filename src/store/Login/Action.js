import { ERROR_LOGIN, LOADING_LOGIN, LOGOUT, SUCCESS_LOGIN } from "./Action.type"
import axios from "axios"


export const loginpage=(payload)=>(dispatch)=>{

 dispatch({type:LOADING_LOGIN})

 axios.post("https://reqres.in/api/login",payload).then((r)=>{
    console.log("a",r.data)
    dispatch({type:SUCCESS_LOGIN,payload:r.data})
 }).catch(()=>{
    dispatch({type:ERROR_LOGIN})
 })
}

export const logout=()=>(dispatch)=>{
dispatch({type:LOGOUT})
}
