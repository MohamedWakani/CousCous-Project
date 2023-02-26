
import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {

  return (
    <div>

    <div className='navbar'>
      <Link to='/'><h3 className='logo'><img src="../image/alo.png" alt="" /></h3></Link>

      <ul className='nav-list'>
        <li>
          <Link to='/' className='link'>Home</Link>
        </li>
        <li>
          <Link to='/about' className='link'>About</Link>
        </li>
        <li>
          <Link to='/menu' className='link'>Make CousCous</Link>
        </li>
        <li>
        <Link to='/menu2' className='link'>Menu</Link>
        </li>
        <li>
          <Link to='/contact' className='link'>Contact</Link>
        </li>

      </ul>
    </div>
    </div>
  )
}
