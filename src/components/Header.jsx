import React from 'react'
import hamburger from '../Assets/Hamburger.svg'

const Header = () => {
  return (
    <div className='sticky'>
        <nav className="flex justify-between">
            <div className="flex items-center">
                <h1 className="text-xl font-Prata">Johnathan Specter</h1>
            </div>
            <div className="hidden md:flex items-center">
                <ul className="flex flex-row gap-10 font-Inter text-lg text-gray-400">
                    <li className='cursor-pointer'>
                        Articles
                    </li>
                    <li className='cursor-pointer'>
                        Chats
                    </li>
                    <li className='cursor-pointer'>
                        Awards
                    </li>
                    <li className='cursor-pointer'>
                        About
                    </li>
                </ul>
            </div>
            <div className="hidden md:block">
                <button className="bg-yellow-300 font-Prata text-sm text-black px-5 py-3 font-semibold">Get in touch</button>
            </div>
            <div className="block md:hidden">
                <img src={hamburger} alt="menu" />
            </div>
        </nav>
    </div>
  )
}

export default Header