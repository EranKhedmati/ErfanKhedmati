import { useState, useEffect } from 'react';

// icons
import iconMenu from '../images/icon-menu.svg';
import iconClose from "../images/icon-close.svg"

function Header() {
    const [menu, setMenu] = useState(false);

    // when widnow bigger than lg size
    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth > 1024) {
                setMenu(false);
            }
        })
    }, [])

    // toggle menu
    function handleMenu() {
        setMenu(!menu)
    }

    function handleCloseMenu() {
        setMenu(false)
    }



    return (
        <header className="w-full p-4 border border-b-1 border-gray-300 flex justify-between items-center">
            {/* Brand */}
            <a href="./" className="sm:text-2xl font-bold tracking-widest text-dark">ERFAN KHEDMATI</a>
            {/* Menu */}
            <img src={iconMenu} onClick={handleMenu} className='w-8 sm:w-12 lg:hidden' />
            {/* navbar(Small screens) */}

            {menu ? (<div onClick={handleMenu} className="fixed w-full h-full bg-dark/50 top-0 left-0 flex justify-end z-10">
                {/* Stop propagation for ul for handle close menu */}
                <ul onClick={e => e.stopPropagation()} className="flex flex-col gap-5 bg-white top-0 right-0 h-full w-2/3 max-w-80 pt-20 p-5">
                    <li className='absolute top-5 right-5 cursor-pointer'>
                        <button onClick={handleCloseMenu}>
                            <img src={iconClose} />
                        </button>
                    </li>
                    <li>
                        <a href="./">Home</a>
                    </li>
                    <li>
                        <a href="./about">About Me</a>
                    </li>
                    <li>
                        <a href="./resume">Resume</a>
                    </li>
                    <li>
                        <a href="./portfolio">Portfolio</a>
                    </li>
                    <li>
                        <a href="./blog">Blog</a>
                    </li>
                    <li>
                        <a href="./contact">Contact</a>
                    </li>
                </ul>
            </div>) : (
                <div className='hidden lg:block'>
                    <ul className="flex gap-5 ">
                        <li>
                            <a href="./">Home</a>
                        </li>
                        <li>
                            <a href="./about">About Me</a>
                        </li>
                        <li>
                            <a href="./resume">Resume</a>
                        </li>
                        <li>
                            <a href="./portfolio">Portfolio</a>
                        </li>
                        <li>
                            <a href="./blog">Blog</a>
                        </li>
                        <li>
                            <a href="./contact">Contact</a>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    )
}

export default Header;