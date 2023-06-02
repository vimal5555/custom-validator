import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Login from './views/Login/Login';
function App() {
  return (
    <React.Fragment>

        <Routes >
        <Route exact path='/login' element={<Login />} />


            </Routes>

            </React.Fragment>
  );
}

export default App;
