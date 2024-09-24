import React from 'react';
import './Experience.css'; // Create a separate CSS file for Experience
import { AiOutlineCheckCircle } from 'react-icons/ai';

// Sample image import, you can replace with your actual image paths
import ExampleImage from '../../assets/1.jpg';
import ExampleImage01 from '../../assets/2.jpg';
import ExampleImage02 from '../../assets/3.png';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>My Journey</h5>
      <h2>Professional Experiences</h2>

      <div className="container experience__container">
        <div className="experience__item">
          <img src={ExampleImage} alt="Project Screenshot" className="experience__image" />
            <h3>Designing and building a fully responsive E-commerce using React</h3>
          <div className="experience__content">
            
          </div>
        </div>
        <div className="experience__item">
          <img src={ExampleImage01} alt="Project Screenshot" className="experience__image" />
            <h3>Corona diagnosis website based on X-ray with react and python</h3>
          <div className="experience__content">
            
          </div>
        </div>
        <div className="experience__item">
          <img src={ExampleImage02} alt="Project Screenshot" className="experience__image" />
            <h3>reactjs طراحی و ساخت وبسایت حسابرسی شعب بیمه به کمک</h3>
          <div className="experience__content">
            
          </div>
        </div>

   
      </div>
    </section>
  );
}

export default Experience;
