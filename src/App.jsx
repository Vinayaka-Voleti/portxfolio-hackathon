import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Ahout from './components/About'
import Skill from './Skill'


const App = () => {
  return (
    <div>
      <Header/>
      <main>
        <Hero/>
        <Ahout/>
        <Skill/>
      </main>
    </div>
  )
}

export default App