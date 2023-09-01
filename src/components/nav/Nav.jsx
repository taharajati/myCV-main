/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {AiOutlineMessage} from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const [activenav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href='#'  onClick={()=> setActiveNav('#')} className={activenav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={()=> setActiveNav('#about')} className={activenav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href='#skill' onClick={()=> setActiveNav('#skill')} className={activenav === '#skill' ? 'active' : ''}><BiBook/></a>
      <a href='#contact' onClick={()=> setActiveNav('#contact')} className={activenav === '#contact' ? 'active' : ''}><AiOutlineMessage/></a>
    </nav>
  )
}

export default Nav