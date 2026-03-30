import Counter from "./component/UserProfile"
import './App.css'
import { useState } from "react"

const App = () =>{
    const [isloggedIn,setIsloggedIn]=useState(true)
    const rendering= () =>{
        if(isloggedIn === false){
            return <button>Logout</button>
        }
        return <button>Login</button>
    }
    return (
        <div className="container">
              <h1>Heloo</h1>
              {rendering()}
        </div>
      
    )
}
export default App