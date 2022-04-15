import React from 'react'
import logo from '../images/logo.png'

const Header = () => {
  return (
    <>
    <header className="page-header">
      <div className="container flex justify-content-between">
        <div className="header-logo">
          <a href="#"><img src={logo} alt="Logo" /></a>
        </div>
        <nav className="nav-menu">
          <ul className="menu-list flex justify-content-around">
            <li className="menu-item"><a href="">Home</a></li>
            <li className="menu-item"><a href="">Shop</a></li>
            <li className="menu-item"><a href="">Collection</a></li>
            <li className="menu-item"><a href="">Pages</a></li>
            <li className="menu-item"><a href="">Blog</a></li>
            <li className="menu-item"><a href="">Contact Us</a></li>
          </ul>
        </nav>
        <ul className="social-list flex justify-content-around">
          <li className="social-item">
            <a href=""><i className="fa fa-search" aria-hidden="true"></i></a>
          </li>
          <li className="social-item">
            <a href=""><i className="fa fa-user" aria-hidden="true"></i></a>
          </li>
          <li className="social-item">
            <a href=""><i className="fa fa-address-book" aria-hidden="true"></i></a>
          </li>
          <li className="social-item">
            <a href=""><i className="fa fa-heart" aria-hidden="true"></i></a>
          </li>
          <li className="social-item">
            <a href=""><i className="fa fa-shopping-bag" aria-hidden="true"></i><sup>0</sup></a
            >
          </li>
          <a className="is-hidden nav-bar" href=""
            ><i className="fa fa-bars" aria-hidden="true"></i
          ></a>
        </ul>
      </div>
    </header>
    </>
  )
}

export default Header
