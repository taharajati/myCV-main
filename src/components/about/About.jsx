/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './About.css'
import  ME  from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

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
        <p>
        I am currently pursuing a degree in Computer Engineering at Islamic Azad University in Karaj, where I am gaining a solid foundation in software development principles, computer systems, and problem-solving techniques. As a Front-End Developer, I specialize in JavaScript, HTML, CSS, and React, and I am passionate about creating seamless, interactive, and responsive user interfaces that provide exceptional user experiences.

With a strong attention to detail and a deep understanding of modern web technologies, I focus on delivering high-quality, performance-optimized websites and applications. I thrive in collaborative, fast-paced environments where teamwork and clear communication are essential for success. I am skilled in problem-solving, approaching challenges with a creative and analytical mindset, and working effectively with cross-functional teams to ensure that project goals are met.

In addition to my technical skills, I am committed to ensuring customer satisfaction by continuously seeking feedback, addressing issues promptly, and making improvements based on user needs. My goal is to bridge the gap between users and technology, crafting web solutions that are not only functional but also user-friendly and visually appealing.
           </p>

           <a href='#contact' className='btn btn-primary'>Let&apos;s Talk</a>
           </div>

      </div>
    </section>
  )
}

export default About