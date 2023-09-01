import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../../src/assets/me.png'
import HeaderSocials from '../header/HeaderSocials'


const Header = () => {
  return (
    <header>
        <div className="container header__container">
          <h5>Hello</h5>
          <h1>Taha Rajati</h1>
          <h5 className='text-light'>Front-end Developer</h5>
          <CTA/>

          <HeaderSocials/>


          <div className="me">
            <img src={ME} alt='' />
          </div>
          <a href='#contact' className='scroll__down'>Scroll Down</a> 
        </div>
    </header>
  )
}

export default Header