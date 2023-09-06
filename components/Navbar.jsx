'use client'
import React from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { useSelectedLayoutSegment } from 'next/navigation'
import {FaBars} from "react-icons/fa"
import {GrClose} from "react-icons/gr"
import { useState } from 'react'
import styles from "../styles"

const Navbar = () => {

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  const activeSegment = useSelectedLayoutSegment()

  const links = [
    {label: 'Home', path: '/', targetSegment: null}, 
    {label: 'Features', path: '/Features', targetSegment: 'Features'},
    {label: 'Get Started', path: '/GetStarted', targetSegment: 'GetStarted'},
    {label: 'Blog', path: '/Blog', targetSegment: 'Blog'},
    {label: 'Contact', path: '/Contact', targetSegment: 'Contact'}
  ]



  return (
    <div>
        <header className={`w-full font-medium bg-background h-full  z-50 ${styles.navPadding} relative z-50 `}>
          {/* desktop navigation */}
           <div className='flex items-center justify-between z-50'> 
              <div>
                    <Logo />
                </div>
                <nav className='hidden gap-12 lg:flex'>
                    {links.map ( (l, i) => 
                        <Link style={{
                              color: (activeSegment === l.targetSegment) ? '#dc2adf' : 'none',
                              padding: '0.5rem'
                          }} 
                          key={i}
                          href={l.path}
                          className='text-text  hover:text-primary hover:scale-105 ease-in duration-200 '
                          >
                              {l.label}
                        </Link>
                    )}   
                </nav>
               <div className='text-accent flex cursor-pointer   lg:hidden' onClick={handleNav} >
                    <FaBars/>
                </div>
           </div>

          {/* Mobile NavBar */}

           <div className={nav ? 'fixed top-0 left-0 w-full h-screen bg-black/70 xl:hidden' : ""}>
                 <div className={nav ? 'fixed Z-50 top-0 left-0 h-screen w-[75%] sm:w-[60%] md:w-[60%] bg-background z-50 ease-in duration-500':
                ' fixed top-0 left-[-100%] h-screen  bg-background ease-in duration-500'}>
                   <div className='px-4 py-4'>
                    <div className='flex items-center justify-between  '>
                          <Logo />
                          <div onClick={handleNav}>
                              <button><GrClose  className='p-2 text-4xl shadow-lg  bg-white shadow-4xl shadow-accent rounded-full cursor-pointer' /></button>
                          </div>
                      </div>
                  <nav className='flex flex-col items-start py-12 gap-12 lg:hidden'>
                    {links.map ( (l, i) => 
                        <Link style={{
                              color: (activeSegment === l.targetSegment) ? '#dc2adf' : 'none',
                              padding: '0.5rem'
                          }} 
                          key={i}
                          href={l.path}
                          className='text-text  hover:text-primary hover:scale-105 ease-in duration-200'
                          >
                              {l.label}
                        </Link>
                    )}   
                </nav>
                   </div>
                 </div>
          </div>
        </header>


    </div>
  )
}

export default Navbar