import React from 'react'
import './Contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsTelegram} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vtztxia', 'template_v8dyuvs', form.current, 'xYuxdTgMVrEY6NuR_')
    

    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch  </h5>
      <h2>Contact Me</h2>
      
      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon'/>
             <h4>Email</h4>
             <h5>taharjt.developer@gmail.com
             </h5>
             <a href='mailto:taharjt.developer@gmail.com'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsTelegram className='contact__option-icon' />
             <h4>Messenger</h4>
             <h5>Telegram
             </h5>
             <a href=' https://t.me/Taha_rjt'>Send a message</a>
          </article>
          
          
        </div>
        {/*END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input className='inputt' type="text" name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7 " placeholder='Your Message' required ></textarea>
          <button type='sumbit' className='btn btn-primary'>Send Messege</button>

        </form>
  
      </div>
    </section>
  )
}

export default Contact