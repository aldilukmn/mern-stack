import React from 'react'
import "./header.scss"

const Header = () => {
  return (
    <header>
      <nav className='navbar'>
        <div className="logo-app">MERN - BLOG</div>
        <div className='menu-item'>Logout</div>
      </nav>
    </header>
  )
}

export default Header