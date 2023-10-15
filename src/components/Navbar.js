import React from 'react'
import { Link } from 'react-router-dom'
import {  FaShoppingCart } from "react-icons/fa"
import { CiSearch } from "react-icons/ci"
import "./navbar.css"

function Navbar() {

    

  return (
   <div className="">
    <nav className="navbar navbar-expand-md">
          <div className="container">
            <Link className="navbar-brand" to="/">
                <img src="./../../logo.png" alt="logo" />
                <strong>Foo</strong>
            </Link>

            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav m-auto mt-2 mt-lg-0">

                    <li className="nav-item">
                       <Link className='nav-link fw-bold' to="">Menu</Link>
                    </li>

                    <li className="nav-item">
                       <Link className='nav-link fw-bold' to="">Contact</Link>
                    </li>

                    <li className="nav-item">
                       <Link className='nav-link fw-bold' to="">Shop</Link>
                    </li>

                    <li className="nav-item">
                       <Link className='nav-link fw-bold' to="/signup">Signup</Link>
                    </li>

                    <li className="nav-item">
                       <Link className='nav-link fw-bold' to="/login">Login</Link>
                    </li>
                  
                </ul>
                <form className="d-flex my-2 my-lg-0 position-relative ">
                    <div className='ps-4 position-absolute start-0 top-50 translate-middle '><CiSearch/></div>
                    <input className="ps-3" type="text" placeholder="Search" />
                    <button  className="btn my-2 my-sm-0 badge  " type="submit">
                     <FaShoppingCart color='#333' size="28"/>
                     <sup className='bg-danger text-white px-1  rounded-circle '>2</sup>
                    </button>
                </form>
            </div>
      </div>
    </nav>
    
   </div>
  )
}

export default Navbar