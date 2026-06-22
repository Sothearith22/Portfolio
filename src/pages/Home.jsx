import React from 'react'
import Section from '../components/Section'
import Skills from './Skills'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

const Home = () => {
  return (
    <div>
      <Section/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  )
}

export default Home
