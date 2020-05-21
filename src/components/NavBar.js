import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import '../App.css'
import FB_icon from '../images/facebook_icon/facebook_icon.svg'

export default function NavBar() {
  return (
    <div className='noliststyle'>
      <div className='logo'>Valley</div>
      <ul>
        <Link exact activeClassName='active' to='/'><li>Home</li></Link>
        <Link activeClassName='active' to='/new-equipment'><li>New Equipment</li></Link>
        <Link activeClassName='active' to='/used-equipment'><li>Used Equipment</li></Link>
        <Link activeClassName='active' to='/valley-irrigation'><li>Valley Irrigation</li></Link>
        <Link activeClassName='active' to='/contact'><li>Contact</li></Link>
        <a href='https://www.facebook.com/Valley-Equipment-and-Irrigation-365438536819053/?ref=search&__tn__=%2Cd%2CP-R&eid=ARBGFx7sr0KLNm9GoRqqB9V6Gq7Cp_cFPikG0NeTzd2Wprw1qBllC5JBiB4_31hXmxtV238k_tpke_fn'> 
        <img 
        
        className='fb_logo'
        src={FB_icon} alt='Facebook Logo'/>
        </a>
      </ul>
    </div>
  )
}
