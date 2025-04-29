import { useState } from 'react'
import './App.css'
import Authenticate from './components/Authenticate'
import SignUpForm from './components/SignUpForm'
import Welcome from './components/Welcome'

function App() {
  const [token, setToken] = useState (null);
  const [user, setUser] = useState("")

  return (
    <>
    <div> 
      <Welcome user = {user}/>
      <SignUpForm token={token} setToken={setToken} user ={user} setUser ={setUser}/>
      <Authenticate token={token} setToken={setToken} user ={user}/>
    </div>
    </>
  )
}

export default App
