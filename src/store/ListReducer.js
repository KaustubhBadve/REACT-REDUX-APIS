import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./action.type";
import axios from "axios"


export const ListReducer = (state = { todos: [] }, { type, payload}) => {
  switch (type) {
    case ADD_TODO: {
        axios.post("http://localhost:8080/Todos",{todoname:payload,flag:false})
    }
   
    case DELETE_TODO:{
            axios.delete(`http://localhost:8080/Todos/${payload}`)
        } 

        case EDIT_TODO:{
         let r= axios.patch(`http://localhost:8080/Todos/${payload.id}`,{todoname:payload.todoname})
          console.log(r)
      } 
    default: {
      return state;
    }
  }
}
