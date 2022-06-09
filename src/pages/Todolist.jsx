import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../store/action";
import style from './pages.module.css'

const Todolist = () => {
 
 const [flag, setflag] = useState("")
  const [list, setlist] = useState([]);
  const dispatch = useDispatch();
  
const HandleOnChange=(e)=>{
console.log(e.target.checked )
}

  useEffect(() => {
    async function pop() {
      let r = await axios.get("http://localhost:3002/Todos");
      setlist(r.data);
    }
    pop();
  }, [list]);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

// console.log(flag)

  return (
    <div>
      <h1>TODO LIST</h1>

      <div style={{ display: "flex", flexDirection: "column" }}>

        {list.map((todo) => {
          return (
            <ul key={todo.id}>

              <input style={{height:"19px"}} type="checkbox" onChange={HandleOnChange} />

              <Link to={`/todo/${todo.id}`}>{todo.todoname}</Link>

              <button onClick={() => handleDelete(todo.id)}>Delete</button>
              
               
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Todolist;










