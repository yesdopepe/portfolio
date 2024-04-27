import React from 'react'

const Navbar = () => {
  return (
    <nav className='absolute top-4 max-w-fit px-8 h-10 backdrop-blur flex justify-around items-center rounded-3xl transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75'>
        <ul className='flex flex-row  gap-10'>
            <li><a href="/">hello</a></li>
            <li><a href="/skills">skills</a></li>
            <li><a href="/projects">projects</a></li>
            <li><a href="/contact">contact</a></li>
            <li><a href="blog">blog</a></li>
        </ul>
    </nav>
  )
}

export default Navbar