import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import ME from '../../assets/me_brush_effect6.png'
const Header = () => {
  return (
    <header>

      <div className="container header__container">

        <h5>Hello I'm</h5>
        <h1>Shukrullah Askari</h1>
        <h5 className='text-light'>Full Stack MERN Developer, Software Engineer and Instructor</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="Shukrullah Askari" />
        </div>

        <div className="scroll__down">
          <a href="#contacts">Scroll Down</a>
        </div>
      </div>

    </header>
  )
}

export default Header