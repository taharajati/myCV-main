/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './About.css'
import  ME  from '../../assets/me-about.jpg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>


      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">

            <img src= {ME} alt="About Image"/>

          </div>
       </div>

        <div className='about__content'>
        <p>Computer engineering student at Islamic azad university karaj.
          Front End Developer working with javaScript, HTML/CSS,React to deliver exceptional custumer experiences.
          Adept at contributing to a highly collaborative work enviroment , finding solutions,and determining customer satisfaction.
           </p>

           <a href='#contact' className='btn btns-primary'>Let's Talk</a>
        </div>

      </div>


    </section>
  )
}

export default About