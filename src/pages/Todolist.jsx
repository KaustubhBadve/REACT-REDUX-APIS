import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../store/action";




// function BasicUsage() {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   return (
//     <>
//       <Button onClick={onOpen}>EDIT TODO</Button>
//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalContent
//           width="350px"
//           display="flex"
//           gap="10px"
//           flexDirection="row"
//           margin="auto"
//           height="30px"
//           marginLeft="900px"
//         >
//           <ModalCloseButton width="50px" />
//           <input type="text" placeholder="Edit your Todo Here..." />
//           <Button colorScheme="blue" mr={3} width="60px" onClick={onClose}>
//             Update
//           </Button>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// }

const Todolist = () => {
 
 const [update, setupdate] = useState("")
  const [list, setlist] = useState([]);
  const dispatch = useDispatch();
  


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

  const handleEdit=(val)=>{
    // val.flag=true
    // console.log(val.flag)
    dispatch(editTodo(val))
  }


  return (
    <div>
      <h1>TODO LIST</h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

        {list.map((todo) => {
          return (
            <ul key={todo.id}>

              <input type="checkbox" />

              <Link to={`/todo/${todo.id}`}>{todo.todoname}</Link>

              <button onClick={() => handleDelete(todo.id)}>Delete</button>
              
               {/* <div><button onClick={()=>handleEdit(todo)}>Update</button> </div> */}
               <input onChange={(e)=>setupdate(e.target.value)}  type="text" placeholder='Edit your Todo here...'/>
               <button onClick={()=>handleEdit(todo)}>Update</button>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Todolist;










 {/* <BasicUsage/>
              <>
                <Button onClick={onOpen}>EDIT TODO</Button>
                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalContent width="350px" display="flex" gap="10px" flexDirection="row" margin="auto" height="30px" marginLeft="900px">
                    <ModalCloseButton width="50px" />
                    <input onChange={(e)=>setupdate(e.target.value)} type="text" placeholder="Edit your Todo Here..." />
                    <Button colorScheme="blue" mr={3} width="60px" onClick={handleupdate}> Update </Button>
                  </ModalContent>
                </Modal>
                
              </> */}
