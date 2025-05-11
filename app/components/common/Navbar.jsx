'use client'
import React, {useEffect, useState} from 'react';
import {twMerge} from "tailwind-merge";
import Link from "next/link";

const navLinks = [
  {
    url: '#who-its-for',
    label: 'Kimlar uchun'
  },
  {
    url: '#cta',
    label: 'Orzuyingiz'
  },
  {
    url: '#categories',
    label: 'Kategoriya'
  },
  {
    url: '#products',
    label: 'Mahsulotlar'
  },
  {
    url: '#contact',
    label: 'Bog\'lanish'
  }
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleHamburgerMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  useEffect(() => {
    if (isMenuOpen && window.innerWidth <= 1023) {
      console.log('hidden')
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }

    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <nav className='flex items-center justify-between px-5 py-7 fixed w-full bg-white z-50'>
      <div className='w-10 h-10 rounded-md bg-[#9F9191]'></div>
      {isMenuOpen ? (
        <CloseIcon onClick={handleHamburgerMenuClick} className='lg:hidden' />
      ) : (
        <HamburgerIcon onClick={handleHamburgerMenuClick} className='lg:hidden'/>
      )}
      <div
        className={twMerge(
          'w-full bg-white h-[100vh] lg:flex lg:items-center lg:w-auto lg:space-x-4 absolute lg:relative top-0 left-0 lg:top-0 lg:left-0 p-4 lg:p-0 lg:bg-transparent transition-all duration-500 ease-in-out transform flex flex-col items-center justify-start lg:flex-row lg:h-fit',
          isMenuOpen ? 'translate-y-24 opacity-100 lg:opacity-100 lg:translate-y-0' : '-translate-y-full opacity-0 lg:opacity-100 lg:translate-y-0',
          'md:translate-x-0'
        )}
      >
        <div className='flex flex-col items-center justify-center gap-10 h-9/12 md:flex-row'>
          {navLinks.map((link, index) => (
            <Link href={link.url} scroll={true} key={index}>{link.label}</Link>
          ))}
        </div>
        <a href="tel:(33) 513-6053" className='text-primary'>(33) 513-6053</a>
      </div>
    </nav>
  );
}

const HamburgerIcon = (props) => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0_91_1754)">
        <path d="M5.33331 10.6667H26.6666" stroke="#0C0B0B" strokeWidth="1.75" strokeLinecap="round"
              strokeLinejoin="round"/>
        <path d="M5.33331 21.3333H26.6666" stroke="#0C0B0B" strokeWidth="1.75" strokeLinecap="round"
              strokeLinejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0_91_1754">
          <rect width="32" height="32" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  )
}

const CloseIcon = (props) => {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_91_2313)">
        <path
          d="M8 23L23.0849 7.91506"
          stroke="#0C0B0B"
          strokeWidth={1.75}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 8L23.0849 23.0849"
          stroke="#0C0B0B"
          strokeWidth={1.75}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_91_2313">
          <rect width={32} height={32} fill="white"/>
        </clipPath>
      </defs>
    </svg>
  )
}
export default Navbar;