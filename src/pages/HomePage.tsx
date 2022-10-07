import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/style/HomePage.css'

function HomePage() {
  return (
    <>
      <section className='gridBoxHome'>
        <Link to="/" className='cadreBox'>
          <div className='boxLeft'>
            <div className='boxTitle'>
              <h2 className='titles'>Gestion des véhicules</h2>
            </div>
            <img className='boxImg' src="" alt="" />
          </div>
        </Link>
        <section className='cadreBox'>
          <div className='boxRight'>
            <div className='boxTitle'>
              <h2>Gestion des locataires</h2>
            </div>
            <img className='boxImg' src="" alt="" />
          </div>
        </section>
        <section className='cadreBox'>
          <div className='boxLeft'>
            <div className='boxTitle'>
              <h2>Location des véhicules</h2>
            </div>
            <img className='boxImg' src="" alt="" />
          </div>
        </section>
        <section className='cadreBox'>
          <div className='boxRight'>
            <div className='boxTitle'>
              <h2>Gestion des locations</h2>
            </div>
            <img className='boxImg' src="" alt="" />
          </div>
        </section>
      </section>
    </>
  )
}

export default HomePage