import React, { useEffect, useState } from 'react';
import './Nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { AiOutlineMessage } from 'react-icons/ai';
import { IoMdCodeWorking } from "react-icons/io";

const Nav = () => {
  const [activenav, setActiveNav] = useState('#');

  useEffect(() => {
    const sections = document.querySelectorAll('section'); // بخش‌های صفحه که می‌خواهی تشخیص داده بشه

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNav(`#${entry.target.id}`); // تغییر دادن activeNav وقتی بخشی در نمایه صفحه ظاهر میشه
          }
        });
      },
      { threshold: 0.5 } // حداقل 50% از بخش باید در صفحه باشد تا فعال شود
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activenav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activenav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href='#skill' onClick={() => setActiveNav('#skill')} className={activenav === '#skill' ? 'active' : ''}><BiBook /></a>
      <a href='#Experience' onClick={() => setActiveNav('#Experience')} className={activenav === '#Experience' ? 'active' : ''}><IoMdCodeWorking /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activenav === '#contact' ? 'active' : ''}><AiOutlineMessage /></a>
    </nav>
  );
};

export default Nav;
