import React from 'react'
import './Header.css'
import Navbar from './Navbar'


const Header = () => {
  return (
    <div>
        <Navbar />
        <header className='container-fluid header'>
            <div className='text-light text-center banner'>
                <h1 className='display-4 top-header'>Welcome To Shop</h1>
                <p className='lead top-discription'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br /> Lorem Ipsum has been the industry's standard dummy text</p>
            </div>
        </header>
    </div>
  )
}

export default Header