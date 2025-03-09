import React, { useRef, useState } from 'react';
import './Contact.css';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelegram } from 'react-icons/bs';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    emailjs.sendForm(
      'service_cfso63b',
      'template_b324gcq',
      form.current,
      'sqWL27msYvR6PUJS7'
    )
      .then((result) => {
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully!'
        });
        e.target.reset();
      })
      .catch((error) => {
        console.error('Error:', error);
        setSubmitStatus({
          type: 'error',
          message: 'Something went wrong. Please try again.'
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      
      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>silent.taha.rjt@gmail.com</h5>
            <a href='mailto:silent.taha.rjt@gmail.com' target="_blank" rel="noopener noreferrer">
              Send a message
            </a>
          </article>
          
          <article className='contact__option'>
            <BsTelegram className='contact__option-icon' />
            <h4>Telegram</h4>
            <h5>@Taha_rjt</h5>
            <a href='https://t.me/Taha_rjt' target="_blank" rel="noopener noreferrer">
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input 
            type="text" 
            name='user_name' 
            placeholder='Your Full Name' 
            required 
            disabled={isSubmitting}
          />
          <input 
            type='email' 
            name='user_email' 
            placeholder='Your Email' 
            required 
            disabled={isSubmitting}
          />
          <textarea 
            name="message" 
            rows="7" 
            placeholder='Your Message' 
            required 
            disabled={isSubmitting}
          ></textarea>
          
          <button 
            type='submit' 
            className={`btn btn-primary ${isSubmitting ? 'submitting' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {submitStatus.message && (
            <div className={`submit-status ${submitStatus.type}`}>
              {submitStatus.message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;