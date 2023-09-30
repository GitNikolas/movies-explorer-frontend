import React from 'react';
import Header from "./Header/Header";
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

function App() {
  const [currentUser, setCurrentUser] = React.useState({ name: 'User', email:'email1.email.ru'});

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">

      <div className="content">

      <Header/>

      <main className="main"><p>Мейн</p></main>

      </div>

      <footer className="footer"><p>Футер</p></footer>

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
