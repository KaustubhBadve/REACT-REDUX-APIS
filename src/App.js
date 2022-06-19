import './App.css';
import Navbar   from './component/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Todolist from './pages/Todolist';
import Todoitem from './pages/Todoitem';
import Edittodo from './pages/EditTodo';
import Login from './pages/Login';
import { RequireAuth } from './HOF/Authcontext';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<RequireAuth><Home/></RequireAuth>}></Route>
        <Route path='/todo' element={<RequireAuth><Todolist/></RequireAuth>}></Route>
        <Route path='/todo/:id' element={<Todoitem/>}></Route>
        <Route path='/todo/:id/edit' element={<Edittodo/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
