import { ERROR_LOGIN, LOADING_LOGIN, LOGOUT, SUCCESS_LOGIN } from "./Action.type"

var token=localStorage.getItem("token")

let InitialState={
        loading:false,
        error:false,
        isAuth: token ? true : false,
        token:token  
}


export const LoginReducer=(state=InitialState,{type,payload})=>{
    
    switch (type){
        case LOADING_LOGIN:{
            return {...state,
                   loading:true,
            }
        }
        case SUCCESS_LOGIN:{
            localStorage.setItem("token",payload.token)
            console.log("payload",payload.token)
            return {...state,
                   loading:false,
                   isAuth:true,
                   token:payload.token
            }
        }
        case ERROR_LOGIN:{
            return {...state,
                   loading:false,
                   error:true,
                   isAuth:false
            }
        }
        case LOGOUT:{
            localStorage.removeItem("token")
            return {...state,
                   isAuth:false,
                   token:"",
                   error:false
            }
        }
        default:{
            return state
        }
    }
}