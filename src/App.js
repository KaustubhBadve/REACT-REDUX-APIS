import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Todolist from './pages/Todolist';
import Todoitem from './pages/Todoitem';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/todo' element={<Todolist/>}></Route>
        <Route path='/todo/:id' element={<Todoitem/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
