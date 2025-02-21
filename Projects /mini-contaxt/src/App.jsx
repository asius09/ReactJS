import { useState } from "react";
import UserContextProvider from "./context/userContextProvider";
import { Profile, Login } from "./components";

function App() {
  return (
    <UserContextProvider>
      <h1>Context User</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
