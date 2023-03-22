import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/ui/navbar";
import { AuthContext } from "./context";
import { AppRouter } from "./routes";
import './styles/App.css';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
      <BrowserRouter>
        <Navbar/>
        <AppRouter/>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App;
