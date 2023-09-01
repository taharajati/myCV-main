import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a  href='https://www.linkedin.com/in/taha-rajati-24464b280' target='_blank' rel="noreferrer"><BsLinkedin/></a>
        <a href='https://www.instagram.com/taha_rjt/?hl=en' target='_blank' rel="noreferrer"><BsInstagram/></a>
        <a href='https://github.com/taharajati' target='_blank' rel="noreferrer"><BsGithub/></a>

    </div>
  )
}

export default HeaderSocials