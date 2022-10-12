import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/style/HomePage.css'
import Navbar from '../component/Navbar'

function HomePage() {
  return (
    <>
      <Navbar/>
      <section className='gridBoxHome'>
        <section className='cadreBox'>
          <Link to="/gestvehicule" className='boxLeft'>
            <div className='boxTitle'>
              <h2 className='titles'>Gestion des véhicules</h2>
            </div>
            <img className='boxImg' src="" alt="" />
          </Link>
        </section>
        <section className='cadreBox'>
          <Link to="/gestlocataires" className='boxRight'>
            <div className='boxTitle'>
              <h2 className='titles'>Gestion des locataires</h2>
            </div>
            <img className='boxImg' src="" alt=""/>
          </Link>
        </section>
        <section className='cadreBox'>
          <Link to="/locavehicule" className='boxLeft'>
            <div className='boxTitle'>
              <h2 className='titles'>Location des véhicules</h2>
            </div>
            <img className='boxImg' src="" alt=""/>
          </Link>
        </section>
        <section className='cadreBox'>
          <Link to="/gestlocations" className='boxRight'>
            <div className='boxTitle'>
              <h2 className='titles'>Gestion des locations</h2>
            </div>
            <img className='boxImg' src="" alt="" />
          </Link>
        </section>
      </section>
    </>
  )
}

export default HomePage