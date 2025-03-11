import React, { useEffect, useState } from 'react';
import './Nav.css';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    let currentSection = '';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            currentSection = entry.target.id;
            setActiveNav(currentSection || 'home');
          }
        });
      },
      { 
        threshold: 0.2,
        rootMargin: '-50% 0px -50% 0px'
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveNav('home');
  };

  return (
    <nav>
      <button
        onClick={scrollToTop}
        className={activeNav === 'home' ? 'active' : ''}
        aria-label="Scroll to top"
      >
        <AiOutlineHome />
      </button>
      <a
        href="#about"
        onClick={() => setActiveNav('about')}
        className={activeNav === 'about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#skill"
        onClick={() => setActiveNav('skill')}
        className={activeNav === 'skill' ? 'active' : ''}
      >
        <BiBook />
      </a>
      <a
        href="#projects"
        onClick={() => setActiveNav('projects')}
        className={activeNav === 'projects' ? 'active' : ''}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav('contact')}
        className={activeNav === 'contact' ? 'active' : ''}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
