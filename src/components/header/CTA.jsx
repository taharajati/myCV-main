import React from 'react'
import Jobinja from '../../assets/Jobinja.pdf'
import { useState } from 'react'

const CTA = () => {
  const [activenav, setActiveNav] = useState('#');
  return (
    <div className='cta'>
        <a href={Jobinja} download className='btn'>Download CV</a>
      
        <a href='#contact' onClick={() => setActiveNav('#contact')} className={`btn btn-primary ${activenav === '#contact' ? 'active' : ''}`}>Let's Talk</a>

    </div>
  )
}

export default CTA