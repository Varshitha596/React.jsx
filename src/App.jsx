import { useState } from "react";
import Welcome  from "./component/UserProfile";

const App =() =>{
  const [login, funcloginIn]=useState(true);

return (
  <div className={`container ${login ? "login" : "logout"}`}>
    {login ? (<Welcome />)}
  </div>
)
}
export default App;