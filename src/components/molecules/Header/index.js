import React from 'react'
import "./header.scss"
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const logout = useNavigate();
  return (
    <header>
      <nav className='navbar'>
        <div className="logo-app">MERN - BLOG</div>
        <div className='menu-item' onClick={() => logout('/login')}>Logout</div>
      </nav>
    </header>
  )
}

export default Header