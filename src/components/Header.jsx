import React, { useState } from 'react';
import Navbar from './Navbar';

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
            <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6">
                <h1>
                    <a href="/" className="logo">
                        <img src="./src/assets/react.svg" width={40} height={40} alt="Vamsi" />
                    </a>
                </h1>

                {/* Menu Button - only visible on small screens */}
                <div className="relative md:hidden">
                    <button
                        className="menu-btn"
                        onClick={() => setNavOpen((prev) => !prev)}
                    >
                        <span className="material-symbols-rounded">
                            {navOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                </div>

                {/* Navbar component should handle its visibility internally or based on navOpen */}
                <Navbar navOpen={navOpen} />

                {/* Contact button only visible on md and up */}
                <a
                    href="#contact"
                    className="btn btn-secondary hidden md:block"
                >
                    Contact Me
                </a>
            </div>
        </header>
    );
};

export default Header;
