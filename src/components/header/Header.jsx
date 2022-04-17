import React, { Component } from 'react'
import HeaderItem from './HeaderItem'
import Logo from '../Logo'
import logo from '../../images/logo.png'
import HeaderIcon from './HeaderIcon'
import HeaderBar from './HeaderBar'


export default class Header extends Component {
  render() {
    return (
      <header className="page-header">
      <div className="container flex justify-content-between">
        <div className="header-logo">
          <Logo src={logo}/>
        </div>
        <nav className="nav-menu">
          <ul className="menu-list flex justify-content-around">
            <HeaderItem name="Home"/>
            <HeaderItem name="Shop"/>
            <HeaderItem name="Collection"/>
            <HeaderItem name="Pages"/>
            <HeaderItem name="Blog"/>
            <HeaderItem name="Contact Us"/>
          </ul>
        </nav>
        <ul className="social-list flex justify-content-around">
          <HeaderIcon icon = {<i className="fa fa-search" aria-hidden="true"></i>} total=""/>
          <HeaderIcon icon = {<i className="fa fa-user" aria-hidden="true"></i>}/>
          <HeaderIcon icon = {<i className="fa fa-address-book" aria-hidden="true"></i>}/>
          <HeaderIcon icon = {<i className="fa fa-heart" aria-hidden="true"></i>}/>
          <HeaderIcon icon = {<i className="fa fa-shopping-bag" aria-hidden="true"></i>} total ={<sup>0</sup>}/>
          <HeaderBar icon ={<i className="fa fa-bars" aria-hidden="true"></i>}/>
        </ul>
      </div>
    </header>
    )
  }
}
