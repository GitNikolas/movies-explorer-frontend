import React from 'react';
import Header from "./Header/Header";
import Footer from './Footer/Footer';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Main from './Main/Main';
import Preloader from '../components/Preloader/Preloader';
import Movies from './Movies/Movies';
import SavedMovies from './SavedMovies/SavedMovies';
import Profile from './Profile/Profile';
import Register from './Register/Register';
import Login from './Login/Login'
import NotFound from './404/NotFound';

function App() {
  const [currentUser, setCurrentUser] = React.useState({ name: 'User', email:'email1.email.ru'});

  const [isAuthorized, setisAuthorized] = React.useState(true);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">

      <Header isAuthorized={isAuthorized}/>

      <div className="content">

        <Routes>

          <Route
          path='/'
          element={
          <Main />
          }
          />

          <Route
          path='/movies'
          element={
          <Movies />
          }
          />

          <Route
          path='/saved-movies'
          element={
          <SavedMovies />
          }
          />

          <Route
          path='/signup'
          element={
          <Register />
          }
          />

          <Route
          path='/signin'
          element={
          <Login />
          }
          />

          <Route
          path='/profile'
          element={
          <Profile />
          }
          />

          <Route
          path='*'
          element={
          <NotFound />
          }
          />

        </Routes>

      </div>

      <Footer />

      </div>

    </CurrentUserContext.Provider>
  );
}

export default App;
