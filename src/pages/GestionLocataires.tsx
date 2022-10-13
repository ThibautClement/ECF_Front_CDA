import React from 'react'
import RentersList from '../component/lists/RentersList'
import Navbar from '../component/Navbar'
import { useLocation } from 'react-router-dom';

function LocatairesPage() {

  return (
    <>
      <Navbar data={"GESTION LOCATAIRES"}/>
      <RentersList/>
    </> 
  )
  
}

export default LocatairesPage