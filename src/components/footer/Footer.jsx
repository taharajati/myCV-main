/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'> TCARE  </a>
       <ul className='permalinks'>
        <li><a href='#' >Home</a> </li>
        <li><a href='#about' >About</a> </li>
        <li><a href='#skill' >Skills</a> </li>
        <li><a href='#contact' >Contact</a> </li>
       </ul>


       <div className="footer__socials">
       <a href='https://www.linkedin.com/in/taha-rajati-24464b280' target='_blank' rel="noreferrer"><BsLinkedin/></a>
        <a href='https://www.instagram.com/taha_rjt/?hl=en' target='_blank' rel="noreferrer"><BsInstagram/></a>
        <a href='https://github.com/taharajati' target='_blank' rel="noreferrer"><BsGithub/></a>
       </div>

       <div className="footer__copyright">
        <small>TCARE . All rights resereved.</small>
       </div>
    </footer>
  )
}

export default Footer