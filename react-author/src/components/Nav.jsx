import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <nav className='w-full flex gap-4 bg-[#333] text-white text-[30px] px-[50px]'>
        <Link to="/">Home</Link>
        <Link to="/library">Library</Link>
        <Link to="/new-article">Create</Link>
    </nav>
  )
}

export default Nav