import React, { useState } from "react";
import Authenticate from "./Components/Authenticate";
import SignUpForm from "./Components/SignUpForm";
import "./App.css";

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <Authenticate token={token} setToken={setToken} />
      <SignUpForm token={token} setToken={setToken} />
    </>
  );
}

export default App;