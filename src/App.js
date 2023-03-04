
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './Components/Navbar';
import CreateTeam from './pages/CreateTeam';

import { useState } from 'react';
import Login from './Components/Login';

function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('loggedIn')==="false");
  const [search, setsearch] = useState('');
  const [list,setList] = useState('');
  console.log(list)
  console.log(search)
  console.log(loggedIn)

  

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    setLoggedIn(false);
   
  };

  return (
    <>
    
   
<BrowserRouter>

<Navbar setsearch={setsearch} setList={setList} loggedIn={loggedIn} handleLogout={handleLogout}/>

<Routes>
  <Route path="/" element={<Home setsearch={setsearch} setList={setList} list={list}/>} />
  <Route path="/blog/:id" element={<About setsearch={setsearch} setList={setList} list={list} />} />
  <Route path="/createteam" element={<CreateTeam setsearch={setsearch} setList={setList}  list={list}/>} />
  <Route path="/login" element={<Login setLoggedIn={setLoggedIn}/>} />
</Routes>
</BrowserRouter>
</>
  );
}
export default App;
