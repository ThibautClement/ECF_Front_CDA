import React, { useState } from 'react'
import '../assets/style/Navbar.css'
import logo from '../assets/img/localib.png'

function Navbar(props : any) {

  console.log(props);
  

  return (
    <section>
        <div className='navbar'>
          <img src={logo} className='logo' alt="logo" />
          <div className='titleBox'>
            <div className='title'>{props.data}</div>
          </div>
        </div>
    </section>
  )
}

export default Navbar