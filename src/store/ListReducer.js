import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./action.type";
import axios from "axios"


export const ListReducer = (state = { todos: [] }, { type, payload }) => {
  switch (type) {
    case ADD_TODO: {
        axios.post("http://localhost:3002/Todos",{todoname:payload,flag:false})
    //   return {
    //     ...state,
    //     todos: [
    //       ...state.todos,
    //       {
    //         todoname: payload,
    //       }
    //     ],
    //   };
    }
   
    case DELETE_TODO:{
            axios.delete(`http://localhost:3002/Todos/${payload}`)
        } 

        case EDIT_TODO:{
         let r= axios.patch(`http://localhost:3002/Todos/${payload.id}`,{todoname:payload.todoname})
          console.log(r)
      } 


    default: {
      return state;
    }
  }
};
