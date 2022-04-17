import React, { Component } from 'react'
import List from './footer_list/List'
import Logo from '../Logo'
import logo from '../../images/logo.png'
export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer">
      <div className="container flex justify-content-between">
        <div className="footer-left">
          <Logo src = {logo}/>
          <p>
            © 2022 Flone. <br />
            All Rights Reserved
          </p>
        </div>
        <div className="footer-middle-3-col flex justify-content-between wrap">
          <List title="ABOUT US" desc1="About Us" desc2="Store location" desc3 ="Contact" desc4="Orders tracking"/>
          <List title="USEFUL LINKS" desc1="Returns" desc2="Support Policy" desc3 ="Size guide" desc4="FAQs"/>
          <List title="FOLLOW US" desc1="Facebook" desc2="Twitter" desc3 ="Instagram" desc4="Youtube"/>
        </div>
        <div className="footer-right">
          <form className="footer-right-form">
            <h3 className="footer-right-title">SUBSCRIBE</h3>
            <div className="footer-right-content">
              <p>
                Get E-mail updates about our latest shop and special offers.
              </p>
              <input
                className="footer-right-text"
                placeholder="Enter your email address..."
                type="text"
              />
              <br />
              <button className="btn-sub" type="submit">SUBSCRIBE</button>
            </div>
          </form>
        </div>
      </div>
    </footer>
    )
  }
}
