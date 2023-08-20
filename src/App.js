import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/ui/navbar";
import { Footer } from "./components/ui/footer";
import {PageContainer } from './components/ui/page-container';
import { AuthContext } from "./context";
import { AppRouter } from "./routes";
import './styles/App.css';
import { Main } from "./components/ui/main";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
    setLoading(false);
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading
    }}>
      <BrowserRouter>
        <Main>
          <Navbar/>
          <PageContainer>
            <AppRouter/>
          </PageContainer>
          <Footer/>        
        </Main>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App;
