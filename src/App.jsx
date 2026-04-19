import {useState} from 'react'
import Welcome from './component/UserProfile'

const App=()=>{
const [isloggedin ]=useState(false)


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
export default App;


