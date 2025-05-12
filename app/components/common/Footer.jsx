import React from 'react';

function Footer() {
  return (
    <footer className='bg-[#F9F5F5] p-3 py-[48px] lg:px-40 lg:p-10 flex flex-col items-center justify-center gap-5 2xl:flex-row-reverse 2xl:justify-between text-center' id='footer'>
      <div className='flex items-center justify-center gap-5'>
        <YoutubeIcon className='bg-[#F2E9E9] w-8 h-8 p-1 rounded-lg' />
        <InstagramIcon className='bg-[#F2E9E9] w-8 h-8 p-1 rounded-lg' />
        <TelegramIcon className='bg-[#F2E9E9] w-8 h-8 p-1 rounded-lg' />
      </div>
      <p className='text-secondary'>&copy; 2023 Stationery, Inc. All rights reserved.</p>
    </footer>
  );
}

const YoutubeIcon = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#clip0_91_2088)">
      <path
        d="M2 8C2 6.93913 2.42143 5.92172 3.17157 5.17157C3.92172 4.42143 4.93913 4 6 4H18C19.0609 4 20.0783 4.42143 20.8284 5.17157C21.5786 5.92172 22 6.93913 22 8V16C22 17.0609 21.5786 18.0783 20.8284 18.8284C20.0783 19.5786 19.0609 20 18 20H6C4.93913 20 3.92172 19.5786 3.17157 18.8284C2.42143 18.0783 2 17.0609 2 16V8Z"
        stroke="#7A7070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 9L15 12L10 15V9Z" stroke="#7A7070" strokeWidth="1.5" strokeLinecap="round"
            strokeLinejoin="round"/>
    </g>
    <defs>
      <clipPath id="clip0_91_2088">
        <rect width="24" height="24" fill="white"/>
      </clipPath>
    </defs>
  </svg>
)

const InstagramIcon = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#clip0_91_2077)">
      <path
        d="M4 8C4 6.93913 4.42143 5.92172 5.17157 5.17157C5.92172 4.42143 6.93913 4 8 4H16C17.0609 4 18.0783 4.42143 18.8284 5.17157C19.5786 5.92172 20 6.93913 20 8V16C20 17.0609 19.5786 18.0783 18.8284 18.8284C18.0783 19.5786 17.0609 20 16 20H8C6.93913 20 5.92172 19.5786 5.17157 18.8284C4.42143 18.0783 4 17.0609 4 16V8Z"
        stroke="#7A7070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path
        d="M9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12Z"
        stroke="#7A7070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.5 7.5V7.51" stroke="#7A7070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <defs>
      <clipPath id="clip0_91_2077">
        <rect width="24" height="24" fill="white"/>
      </clipPath>
    </defs>
  </svg>
)

const TelegramIcon = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#clip0_91_2083)">
      <path d="M15 10L11 14L17 20L21 4L3 11L7 13L9 19L12 15" stroke="#7A7070" strokeWidth="1.5" strokeLinecap="round"
            strokeLinejoin="round"/>
    </g>
    <defs>
      <clipPath id="clip0_91_2083">
        <rect width="24" height="24" fill="white"/>
      </clipPath>
    </defs>
  </svg>
)

export default Footer;