import React from 'react';
import "./App.css";
import Header from './component/header/Header';
import Home from './component/home/Home';
import About from './component/about/About';
import Skills from './component/skills/Skills';
import Qualifications from './component/qualifications/Qualifications'
import Contact from './component/contact/Contact';
import Footer from './component/footer/Footer';
import ScrollUp from './component/scrollup/ScrollUp';
import Projects from './component/projects/Projects';

const App = () => {
  return (
    <>
      <Header />

      <main className='main'>
        <Home />
        <About/>
        <Skills />
        <Qualifications />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />

    </>
  )
}

export default App
