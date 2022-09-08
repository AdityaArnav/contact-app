import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className='navbar bg-secondary'>
        <div className='container'>
            <Link to={'/'} className='navbar-brand mx-auto'><i className='fa fa-mobile text-dark me-2'></i>Contact <span className='text-light ms-2'>Manager</span></Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar
