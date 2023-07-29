import React from 'react'
import './Navbar.css'


const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg fixed-top nav-menu'>
        <a href='#' className='navbar-brand text-light text-uppercase'><span className='h2 font-weight-bold'>Shoppify</span></a>
        <button className='navbar-toggler nav-button' type='button' data-bs-toggle='collapse' 
        data-bs-target='#myNavbar'>
            <div className='bg-light line1'></div>
            <div className='bg-light line2'></div>
            <div className='bg-light line3'></div>
        </button>
        <div className='collapse navbar-collapse justify-content-end text-uppercase font-weight-bold' id='myNavbar'>
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <a href='#' className='nav-link m-2 menu-item'>Home</a>
                </li>
                <li className='nav-item'>
                    <a href='#' className='nav-link m-2 menu-item'>Shop</a>
                </li>
                <li className='nav-item'>
                    <a href='#' className='nav-link m-2 menu-item'>Services</a>
                </li>
                <li className='nav-item'>
                    <a href='#' className='nav-link m-2 menu-item'>About Us</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar