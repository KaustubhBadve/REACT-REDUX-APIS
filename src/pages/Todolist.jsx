import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../store/Todo/action";
import style from './pages.module.css'
import { useRef } from "react";

const Todolist = () => {
 let value=useRef()
//  const [flag, setflag] = useState("")
  const [list, setlist] = useState([]);
  const dispatch = useDispatch();
  
const HandleOnChange=async(e,id)=>{
  if(e.target.checked===false)
  {
    value.current=false
  }
  else{
    value.current=true  
  }
  await axios.patch(`http://localhost:8080/Todos/${id}`,{flag:value.current})
}

  useEffect(() => {
    async function pop() {
      let r = await axios.get("http://localhost:8080/Todos");
      setlist(r.data);
    }
    pop();
  }, [list]);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <div>
      <h1 style={{fontSize:"80px"}}>TODO LIST</h1>

      <div  style={{ display: "flex", flexDirection: "column" }}>

        {list.map((todo) => {
          return (
            <div >
            <ul style={{}} className={todo.flag ? style.AA : style.BB} key={todo.id}>

              <input style={{height:"19px"}} type="checkbox" onChange={(e)=>HandleOnChange(e,todo.id)} />

              <Link to={`/todo/${todo.id}`}>{todo.todoname}</Link>

              <button onClick={() => handleDelete(todo.id)}>Delete</button>
               
            </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todolist;










