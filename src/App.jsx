
import { useEffect, useState } from 'react'

import Navbar from './components/Navbar'
import Footer from './sections/Footer'

import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Contact from './sections/Contact'

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('oa-theme') || 'dark'
  })

  useEffect(() => {
    localStorage.setItem('oa-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(current =>
      current === 'dark' ? 'light' : 'dark'
    )
  }

  return (
    <div className={`app ${theme}`}>
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
