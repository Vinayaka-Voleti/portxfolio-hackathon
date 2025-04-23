import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Ahout from './components/About'
import Skill from './components/Skill'
import Work from './components/Work'
import Contact from './components/Contact'


const App = () => {
  return (
    <div>
      <Header/>
      <main>
        <Hero/>
        <Ahout/>
        <Skill/>
        <Work/>
        <Contact/>
      </main>
    </div>
  )
}

export default App
