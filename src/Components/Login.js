import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'

const Login = ({setLoggedIn}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const history = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    localStorage.setItem('username', username)
    localStorage.setItem('password', password)
    if (username === localStorage.getItem('username') && password === localStorage.getItem('password')) {
        localStorage.setItem('loggedIn', 'true');
        setLoggedIn(true);
      }
    history('/');
  }

  return (
    <section>
      <form className="LoginPage_LoginForm__3Amb5" onSubmit={handleLogin}>
        <h1 className="LoginPage_Heading__19ol_">Login</h1>
        <input className="LoginPage_InputField__21cm8" type="text" placeholder="Enter Username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input className="LoginPage_InputField__21cm8" type="password" placeholder="Enter Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="Button_Button__1hxBU" onClick={handleLogin}>Login</button>
      </form>
    </section>
  )
}

export default Login