import React from 'react'
import img from '../images/logo.png';
import '../Components/Navbar.css'
import Search from './Search'

import { Link } from 'react-router-dom';
const Navbar = ({ setsearch, search, setList, handleLogout, loggedIn }) => {


  return (
    <div className='navbar'>
      <div className='logo'>
        <Link to="/"> <img src={img} alt='not loaded' /></Link>
      </div>
      {loggedIn===true && (
        <div className='rightbar'>
          <Search setsearch={setsearch} search={search} setList={setList} />
          <Link to="/createteam">
            <button className='createteam'>createteam</button>
          </Link>
          <button className='logout' onClick={handleLogout}>logout</button>
        </div>
      )}
         {loggedIn===false && (
          <div className='rightbar'>
              <Search setsearch={setsearch} search={search} setList={setList} />
            <Link to="/login">
            <button className='createteam'>Log in</button>
          </Link>
          </div>
      )}
      
    </div>
  )
}

export default Navbar
