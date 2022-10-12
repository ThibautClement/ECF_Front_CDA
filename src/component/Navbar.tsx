import React from 'react'
import '../assets/style/Navbar.css'
import logo from '../assets/img/localib.png'

function Navbar() {
  return (
    <section className='navbar'>
        <img src={logo} className='logo' alt="logo" />
        <div className='titleBox'>
          <div className='title'>ACCUEIL</div>
        </div>
    </section>
  )
}

export default Navbar