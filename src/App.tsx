import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
