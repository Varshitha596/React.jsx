import { useState } from "react";
import Welcome  from "./component/UserProfile";

const App =() =>{
  const [login, funcloginIn]=useState(true);

  const renderfunc=()=>{
    if(login===true){
      return (
        <button onClick={()=>funcloginIn(false)}>logg out</button>
      );
    }
   return(
    <button onClick={()=>funcloginIn(true)}>loggin</button>);
  }


return(
  <div>
   <Welcome roll="Hello" name="User" />
      {renderfunc()}
      </div>
);
};


export default App