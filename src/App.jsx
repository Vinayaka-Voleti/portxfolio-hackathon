import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Ahout from './components/About'
import Skill from './components/Skill'
import Work from './components/Work'


const App = () => {
  return (
    <div>
      <Header/>
      <main>
        <Hero/>
        <Ahout/>
        <Skill/>
        <Work/>
      </main>
    </div>
  )
}

export default App