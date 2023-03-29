import React from 'react'

const NavBar = () => {
  return (
  <nav className='navbar'>
    <div className='brand'>Waterfall</div>
    <ul className='ul-container'>
      <li><a href="">Register</a></li>
      <li><a href="">Login</a></li>
      <li><a href="">Admin</a></li>
    </ul>
  </nav>
  )
}

export default NavBar
