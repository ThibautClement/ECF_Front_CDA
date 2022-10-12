import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GestionVehicule from './pages/GestionVehicule';
import GestionLocation from './pages/GestionLocation';
import LocationVehicule from './pages/LocationVehicule';
import LocatairesPage from './pages/GestionLocataires';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/gestvehicule' element={<GestionVehicule/>} />
        <Route path='/gestlocations' element={<GestionLocation/>} />
        <Route path='/locavehicule' element={<LocationVehicule/>} />
        <Route path='/gestlocataires' element={<LocatairesPage/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
