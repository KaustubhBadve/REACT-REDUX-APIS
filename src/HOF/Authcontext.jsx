import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"

export const RequireAuth=({children})=>{
   const isAuth= useSelector((state)=>state.Login.isAuth)

   const {pathname}=useLocation()

//    const from={
//     pathname:location.pathname
//    }

   if(isAuth)
   {
    return children
   }
   else{
    <Navigate to="/login" state={pathname} replace />
   }
}