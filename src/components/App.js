import React from 'react';
import Header from "./Header/Header";
import Footer from './Footer/Footer';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Main from './Main/Main';

function App() {
  const [currentUser, setCurrentUser] = React.useState({ name: 'User', email:'email1.email.ru'});

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">

      <div className="content">

      <Header/>

      <Main/>

      </div>

      <Footer />

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
