import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
   <>
   <ul className='page-header'>
     <li><Link to="/">Home</Link></li>
     <li><Link to="/about-us">About Us</Link></li>
     <li><Link to="/user-list">User List</Link></li>
   </ul>
   </>
  )
}
