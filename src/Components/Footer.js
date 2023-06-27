import React from 'react'
import Layout from '@/Components/Layout'
import Link from "next/link"


const Footer = () => {
  return (
      <footer className='w-full border-t-2 border-solid border-dark
      font-medium text-lg dark:text-light dark:border-light sm:text-base
      '>
          <div className='py-8 flex items-center justify-between lg:flex-col lg:py-6 px-6'>
              <span>{new Date().getFullYear()}&copy; All Rights Reserved.</span>
              <div className='flex items-center lg:py-2'>
                  Builld with <span className='text-primary dark:text-primaryDark text-2xl px-1'>&#9825;</span>
                  by&nbsp;<Link href="/">SaiPrabhat</Link> 
              </div>
            
              <Link href="/" >Say Hello</Link> 
              
             
          </div>
   </footer>
  )
}

export default Footer