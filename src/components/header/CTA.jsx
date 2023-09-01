import React from 'react'
import CV from '../../assets/CV.pdf'
import { useState } from 'react'

const CTA = () => {
  const [activenav, setActiveNav] = useState('#');
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
      
        <a href='#contact' onClick={() => setActiveNav('#contact')} className={`btn btn-primary ${activenav === '#contact' ? 'active' : ''}`}>Let's Talk</a>

    </div>
  )
}

export default CTA