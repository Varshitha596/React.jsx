import {useState} from 'react'
import Welcome from './components/Welcome'
import './App.css'
const App=()=>{
const [isloggedin , isloggedOut]=useState(true)
const renderAuth=()=>{
  if(isloggedin===true){
    return <button>Login</button>
  }
 
    return <button>Logout</button>
  }

return (
  <div className="container">
    <h1>Hello</h1>
    {renderAuth()}
  </div>
)
}