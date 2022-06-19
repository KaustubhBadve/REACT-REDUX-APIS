import { ADD_TODO,DELETE_TODO,EDIT_TODO } from "./action.type"

export const addtodo=(payload)=>({type:ADD_TODO ,payload})

export const deleteTodo=(id)=>({type:DELETE_TODO ,payload:id})

export const editTodo=(id,value)=>({type:EDIT_TODO ,payload:{id,value}})