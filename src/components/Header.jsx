import React, { useState } from 'react'
import Navbar from './Navbar'
const Header = () => {
    const [navOpen, setNavOpen] = useState(false);
  return (
    <div>
        <header className='fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0'>
            <div className='max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6  '>
                <h1>
                    <a href="/" className='logo'>
                        <img src="./src/assets/react.svg" width={40} height={40} alt="Vamsi" />
                    </a>
                </h1>
                <div className='relative md:justify-self-center'>
                    <button className='menu-btn md:hidden' onClick={()=> setNavOpen((prev)=> !prev)}>
                        <span className='material-symbols-rounded'>{navOpen? 'close':'menu'}</span>
                    </button>

                    <Navbar navOpen={navOpen}/>
                </div>
                <a href="#contact" className='btn btn-secondary max-md:hidden md:justify-self-end'>Contact Me</a>
            </div>
        </header>
    </div>
  )
}

export default Header