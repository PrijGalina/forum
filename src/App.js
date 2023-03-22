import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/ui/navbar";
import { AppRouter } from "./routes";
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <AppRouter/>
    </BrowserRouter>
  )
}

export default App;
