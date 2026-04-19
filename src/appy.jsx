


import { useState } from "react";
import Welcome from "./component/UserProfile/index.jsx";

const Appy = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div
      style={{
        backgroundColor: isLoggedIn ? "#b5cebb" : "#f4c1c6",
        height: "100vh",
        textAlign: "center",
        paddingTop: "50px"
      }}
    >
      {/* Conditional message */}
      {isLoggedIn ? (
        <Welcome greeting="Welcome back" name="User" />
      ) : (
        <h2>Please Login</h2>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setIsLoggedIn(!isLoggedIn)}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          marginTop: "20px"
        }}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Appy;