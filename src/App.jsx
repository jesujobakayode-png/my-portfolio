
import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'

function App() {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme((current) =>
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
      </main>
    </div>
  )
}

export default App
