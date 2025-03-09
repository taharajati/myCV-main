import React from 'react'
import './Skill.css'
import {AiOutlineCheckCircle} from 'react-icons/ai'

const Skill = () => {
  const skills = [
    { name: 'HTML', level: 'Experienced' },
    { name: 'CSS', level: 'Experienced' },
    { name: 'JavaScript', level: 'Experienced' },
    { name: 'React', level: 'Experienced' },
    { name: 'Tailwind', level: 'Experienced' },
    { name: 'TypeScript', level: 'Intermediate' },
    { name: 'Next.js', level: 'Intermediate' },
    { name: 'Git', level: 'Experienced' },
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'Express', level: 'Intermediate' },
    { name: 'MongoDB', level: 'Intermediate' },
    { name: 'MySQL', level: 'Intermediate' },
    { name: 'PostgreSQL', level: 'Intermediate' },
    { name: 'Docker', level: 'Intermediate' },
    { name: 'sqlite', level: 'Intermediate' },
    { name: 'python', level: 'Intermediate' },
  ];

  return (
    <section id='skill'>
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
             
          <div className="experience__content">
            {skills.map((skill, index) => (
              <article key={index} className='experience_details'>
                <AiOutlineCheckCircle className="experience__icon" />
                <h4>{skill.name}</h4>
                <small className='text-white'>{skill.level}</small>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skill