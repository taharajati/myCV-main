import React from 'react';
import './Experience.css'; // Create a separate CSS file for Experience
import { AiOutlineCheckCircle } from 'react-icons/ai';

// Sample image import, you can replace with your actual image paths
import ExampleImage from '../../assets/1.jpg';
import ExampleImage01 from '../../assets/2.jpg';
import ExampleImage02 from '../../assets/3.png';
import ExampleImage03 from '../../assets/4.png';

const Experience = () => {
  return (
    <section id='Experience'>
      <h5>My Journey</h5>
      <h2>Professional Experiences</h2>

      <div className="container experience__container">
        <div className="experience__item">
          <img src={ExampleImage} alt="Project Screenshot" className="experience__image" />
            <h3>Developed a Fully Responsive E-commerce Website Using React</h3>
          <div className="experience__content">
            
          </div>
        </div>
        <div className="experience__item">
          <img src={ExampleImage01} alt="Project Screenshot" className="experience__image" />
            <h3>Developed a Corona Diagnosis Website Based on X-ray Using React and Python</h3>
          <div className="experience__content">
            
          </div>
        </div>
        <div className="experience__item">
          <img src={ExampleImage02} alt="Project Screenshot" className="experience__image" />
            <h3>Developed a React-Based Audit Website for Insurance Branches</h3>
          <div className="experience__content">
            
          </div>
        </div>
        <div className="experience__item">
          <img src={ExampleImage03} alt="Project Screenshot" className="experience__image" />
            <h3>Developed a Stock Market Website Using React</h3>
          <div className="experience__content">
            
          </div>
          </div>

   
      </div>
    </section>
  );
}

export default Experience;
