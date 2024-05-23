import React from "react";
import "./App.css";
import { BrowserRouter, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AppRouters } from "./routes/AppRouters";
import Header from './components/Header/Header'; 

const App = () => {
  return (
    <BrowserRouter>
      <MainContent />
      <ToastContainer limit={3} />
    </BrowserRouter>
  );
};

const MainContent = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/loginpage";

  return (
    <>
      {!isLoginPage && <Header />}
      <AppRouters />
    </>
  );
};

export default App;
