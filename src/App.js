import React from 'react'
import './styles/App.css';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Project from './components/projects/Project';
import Education from './components/education/Education';
import Contacts from './components/contact/Contacts';


const App = () => {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Project />
      <Education />
      <Contacts/>
    </>
  );
};

export default App;
