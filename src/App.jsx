import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ParticleBackground from './components/ParticleBackground'
import Stats from './components/Stats'
import ScrollToTop from './components/ScrollToTop'
import ThemeToggle from './components/ThemeToggle'

const App = () => {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !darkMode
    setDarkMode(newTheme)
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
  }

  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <div className='fixed top-0 -z-10 h-full w-full'>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      
      <div className='mx-auto px-8 relative z-10'>
        <Navbar darkMode={darkMode} />
        <section id="home">
          <Hero darkMode={darkMode} />
        </section>
        <Stats darkMode={darkMode} />
        <section id="about">
          <About darkMode={darkMode} />
        </section>
        <section id="skills">
          <Technologies darkMode={darkMode} />
        </section>
        <section id="projects">
          <Projects darkMode={darkMode} />
        </section>
        <section id="contact">
          <Contact darkMode={darkMode} />
        </section>
      </div>
      
      <ScrollToTop darkMode={darkMode} />
    </div>
  )
}

export default App
