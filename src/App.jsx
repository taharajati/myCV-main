import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Nav from './components/nav/Nav'
import Skill from './components/skill/Skill'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


import './style.css'
import Experience from './components/experience/Experience'

const App = () => {
  return (
    <>
       <Header/>
       <About/>
       <Nav/>
       <Skill/>
       <Experience/>
       <Contact/>
       <Footer/>
       

   
       
    </>
  )
}

export default App;