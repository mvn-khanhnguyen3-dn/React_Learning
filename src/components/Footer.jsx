import React from 'react'
import logo from '../images/logo.png'

const Footer = () => {
  return (
    <>
    <footer className="page-footer">
      <div className="container flex justify-content-between">
        <div className="footer-left">
          <a className="footer-logo" href=""
            ><img src={logo} alt="Logo"
          /></a>
          <p>
            © 2022 Flone. <br />
            All Rights Reserved
          </p>
        </div>
        <div className="footer-middle-3-col flex justify-content-between wrap">
          <div className="footer-middle-col">
            <h3 className="footer-middle-title">ABOUT US</h3>
            <ul className="footer-middle-list">
              <li className="footer-middle-item"><a href="">About us</a></li>
              <li className="footer-middle-item"><a href="">Store location</a></li>
              <li className="footer-middle-item"><a href="">Contact</a></li>
              <li className="footer-middle-item"><a href="">Orders tracking</a></li>
            </ul>
          </div>
          <div className="footer-middle-col">
            <h3 className="footer-middle-title">USEFUL LINKS</h3>
            <ul className="footer-middle-list">
              <li className="footer-middle-item"><a href="">Returns</a></li>
              <li className="footer-middle-item"><a href="">Support Policy</a></li>
              <li className="footer-middle-item"><a href="">Size guide</a></li>
              <li className="footer-middle-item"><a href="">FAQs</a></li>
            </ul>
          </div>
          <div className="footer-middle-col">
            <h3 className="footer-middle-title">FOLLOW US</h3>
            <ul className="footer-middle-list">
              <li className="footer-middle-item"><a href="">Facebook</a></li>
              <li className="footer-middle-item"><a href="">Twitter</a></li>
              <li className="footer-middle-item"><a href="">Instagram</a></li>
              <li className="footer-middle-item"><a href="">Youtube</a></li>
            </ul>
          </div>
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

    </>
  )
}

export default Footer
