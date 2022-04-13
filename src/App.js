import React from 'react'
import './App.css'
import logo from './images/logo.png'
import banner1 from './images/banner-1.jpg'
import banner2 from './images/banner-2.jpg'
import banner3 from './images/banner-3.jpg'
import product1 from './images/1.jpg'
import product2 from './images/2.jpg'
import product3 from './images/3.jpg'
import product4 from './images/4.jpg'
import product5 from './images/5.jpg'
import product6 from './images/6.jpg'
import product7 from './images/9.jpg'
import product8 from './images/11.jpg'
import blog1 from './images/blog-1.jpg'
import blog2 from './images/blog-2.jpg'
import blog3 from './images/blog-3.jpg'

const App = () => {
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
    <main className="page-main">
      <section className="section-slideshow">
        <div className="container">
          <ul className="slide-list">
            <li className="slide-item">
              <div className="slide-img"></div>
              <div className="slide-content">
                <h5 className="slide-content-sale">Sale off 40%</h5>
                <h3 className="slide-content-desc">
                  Summer Offer <br />
                  2020 Collection
                </h3>
                <a href="#" className="btn-shop-now">Shop Now</a>
              </div>
            </li>
          </ul>
          <div className="btn-slide">
            <button className="btn btn-prev">
              <i className="fa fa-angle-left" aria-hidden="true"></i>
            </button>
            <button className="btn btn-next">
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </section>
      <section className="section-banner">
        <div className="container">
          <ul className="banner-list flex justify-content-between">
            <li className="banner-item col-4">
              <a className="banner-img" href="">
                <img src={banner1} alt="Banner-1" />
              </a>
              <div className="banner-desc">
                <h2 className="banner-desc-title">Watches</h2>
                <p className="banner-desc-price">Starting at <span>$99.00</span></p>
                <a href="#" className="banner-icon"
                  ><i className="fa fa-long-arrow-right" aria-hidden="true"></i
                ></a>
              </div>
            </li>
            <li className="banner-item col-4">
              <a className="banner-img" href="">
                <img src={banner2} alt="Banner-2" />
              </a>
              <div className="banner-desc">
                <h2 className="banner-desc-title">Plo Bag</h2>
                <p className="banner-desc-price">Starting at <span>$79.00</span></p>
                <a href="#" className="banner-icon"
                  ><i className="fa fa-long-arrow-right" aria-hidden="true"></i
                ></a>
              </div>
            </li>
            <li className="banner-item col-4">
              <a className="banner-img" href="">
                <img src={banner3} alt="Banner-3" />
              </a>
              <div className="banner-desc">
                <h2 className="banner-desc-title">Sunglass</h2>
                <p className="banner-desc-price">Starting at <span>$19.00</span></p>
                <a href="#" className="banner-icon"
                  ><i className="fa fa-long-arrow-right" aria-hidden="true"></i
                ></a>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="section-product">
        <div className="container">
          <ul className="product-tab-list flex">
            <li className="product-tab-item"><a href="">New Arrival</a></li>
            <li className="product-tab-item active"><a href="">Best Sellers</a></li>
            <li className="product-tab-item"><a href="">Sale Items</a></li>
          </ul>
          <ul className="product-list flex">
            <li className="product-item col-3">
              <a href=""><img src={product1} alt="Product-1" /></a>
              <div className="product-item-sale">
                <h3 className="sale-percent">-10%</h3>
                <p className="sale-new">New</p>
              </div>
              <div className="product-item-action">
                <a href="#" className="add-cart"
                  ><i className="fa fa-shopping-cart" aria-hidden="true"></i
                ></a>
                <a href="#" className="add-eye"
                  ><i className="fa fa-eye" aria-hidden="true"></i
                ></a>
                <a href="#" className="add-compass"
                  ><i className="fa fa-compass" aria-hidden="true"></i
                ></a>
              </div>
              <div className="product-item-content">
                <h2 className="product-item-title">Lorem ipsum accessories nine</h2>
                <p className="product-item-price">
                  €3.67 - <span><strike>€5.24</strike></span>
                </p>
              </div>
            </li>
            <li className="product-item col-3">
              <a href=""><img src={product2} alt="Product-2" /></a>
              <div className="product-item-sale">
                <h3 className="sale-percent"></h3>
                <p className="sale-new">New</p>
              </div>
              <div className="product-item-action">
                <a href="#" className="add-cart"
                  ><i className="fa fa-shopping-cart" aria-hidden="true"></i
                ></a>
                <a href="#" className="add-eye"
                  ><i className="fa fa-eye" aria-hidden="true"></i
                ></a>
                <a href="#" className="add-compass"
                  ><i className="fa fa-compass" aria-hidden="true"></i
                ></a>
              </div>
              <div className="product-item-content">
                <h2 className="product-item-title">Lorem ipsum accessories nine</h2>
                <p className="product-item-price">
                  €3.67 - <span><strike>€5.24</strike></span>
                </p>
              </div>
            </li>
            <li className="product-item col-3">
              <a href=""><img src={product3} alt="Product-3" /></a>
              <div className="product-item-sale">
                <h3 className="sale-percent">-30%</h3>
                <p className="sale-new">New</p>
              </div>
              <div className="product-item-action">
                <a href="#" className="add-cart"
                  ><i className="fa fa-shopping-cart" aria-hidden="true"></i
                ></a>
                <a href="#" className="add-eye"
                  ><i className="fa fa-eye" aria-hidden="true"></i
                ></a>
                <a href="#" className="add-compass"
                  ><i className="fa fa-compass" aria-hidden="true"></i
                ></a>
              </div>
              <div className="product-item-content">
                <h2 className="product-item-title">Lorem ipsum accessories nine</h2>
                <p className="product-item-price">
                  €3.67 - <span><strike>€5.24</strike></span>
                </p>
              </div>
            </li>
            <li className="product-item col-3">
              <a href=""><img src={product4} alt="Product-4" /></a>
              <div className="product-item-sale">
                <h3 className="sale-percent">-20%</h3>
                <p className="sale-new"></p>
              </div>
              <div className="product-item-action">
                <a href="#" className="add-cart"
                  ><i className="fa fa-shopping-cart" aria-hidden="true"></i
                ></a>
                <a href="#" className="add-eye"
                  ><i className="fa fa-eye" aria-hidden="true"></i
                ></a>
                <a href="#" className="add-compass"
                  ><i className="fa fa-compass" aria-hidden="true"></i
                ></a>
              </div>
              <div className="product-item-content">
                <h2 className="product-item-title">Lorem ipsum accessories nine</h2>
                <p className="product-item-price">
                  €3.67 - <span><strike>€5.24</strike></span>
                </p>
              </div>
            </li>
            <li className="product-item col-3">
              <a href=""><img src={product5} alt="Product-5" /></a>
              <div className="product-item-sale">
                <h3 className="sale-percent">-10%</h3>
                <p className="sale-new">New</p>
              </div>
              <div className="product-item-action">
                <a href="#" className="add-cart"
                  ><i className="fa fa-shopping-cart" aria-hidden="true"></i
                ></a>
                <a href="#" className="add-eye"
                  ><i className="fa fa-eye" aria-hidden="true"></i
                ></a>
                <a href="#" className="add-compass"
                  ><i className="fa fa-compass" aria-hidden="true"></i
                ></a>
              </div>
              <div className="product-item-content">
                <h2 className="product-item-title">Lorem ipsum accessories nine</h2>
                <p className="product-item-price">
                  €3.67 - <span><strike>€5.24</strike></span>
                </p>
              </div>
            </li>
            <li className="product-item col-3">
              <a href=""><img src={product6} alt="Product-6" /></a>
              <div className="product-item-sale">
                <h3 className="sale-percent"></h3>
                <p className="sale-new">New</p>
              </div>
              <div className="product-item-action">
                <a href="#" className="add-cart"
                  ><i className="fa fa-shopping-cart" aria-hidden="true"></i
                ></a>
                <a href="#" className="add-eye"
                  ><i className="fa fa-eye" aria-hidden="true"></i
                ></a>
                <a href="#" className="add-compass"
                  ><i className="fa fa-compass" aria-hidden="true"></i
                ></a>
              </div>
              <div className="product-item-content">
                <h2 className="product-item-title">Lorem ipsum accessories nine</h2>
                <p className="product-item-price">
                  €3.67 - <span><strike>€5.24</strike></span>
                </p>
              </div>
            </li>
            <li className="product-item col-3">
              <a href=""><img src={product7} alt="Product-7" /></a>
              <div className="product-item-sale">
                <h3 className="sale-percent">-30%</h3>
                <p className="sale-new">New</p>
              </div>
              <div className="product-item-action">
                <a href="#" className="add-cart"
                  ><i className="fa fa-shopping-cart" aria-hidden="true"></i
                ></a>
                <a href="#" className="add-eye"
                  ><i className="fa fa-eye" aria-hidden="true"></i
                ></a>
                <a href="#" className="add-compass"
                  ><i className="fa fa-compass" aria-hidden="true"></i
                ></a>
              </div>
              <div className="product-item-content">
                <h2 className="product-item-title">Lorem ipsum accessories nine</h2>
                <p className="product-item-price">
                  €3.67 - <span><strike>€5.24</strike></span>
                </p>
              </div>
            </li>
            <li className="product-item col-3">
              <a href=""><img src={product8} alt="Product-8" /></a>
              <div className="product-item-sale">
                <h3 className="sale-percent">-20%</h3>
                <p className="sale-new"></p>
              </div>
              <div className="product-item-action">
                <a href="#" className="add-cart"
                  ><i className="fa fa-shopping-cart" aria-hidden="true"></i
                ></a>
                <a href="#" className="add-eye"
                  ><i className="fa fa-eye" aria-hidden="true"></i
                ></a>
                <a href="#" className="add-compass"
                  ><i className="fa fa-compass" aria-hidden="true"></i
                ></a>
              </div>
              <div className="product-item-content">
                <h2 className="product-item-title">Lorem ipsum accessories nine</h2>
                <p className="product-item-price">
                  €3.67 - <span><strike>€5.24</strike></span>
                </p>
              </div>
            </li>
          </ul>
          <div className="product-view-more">
            <a href="">View more product</a>
          </div>
        </div>
      </section>
      <section className="section-blog flex">
        <div className="container">
          <div className="blog-title">
            <h2>OUR BLOG</h2>
          </div>
          <ul className="blog-list flex">
            <li className="blog-item">
              <div className="blog-tag">
                <span>lifestyle</span>
                <span>men</span>
              </div>
              <a href="" className="blog-img">
                <img src={blog1} alt="blog-1" />
              </a>
              <h3 className="blog-desc">
                A guide to latest trends
                <br />
                <i>By Admin</i>
              </h3>
            </li>
            <li className="blog-item">
              <div className="blog-tag">
                <span>lifestyle</span>
              </div>
              <a href="" className="blog-img">
                <img src={blog2} alt="blog-2" />
              </a>
              <h3 className="blog-desc">
                Five ways to lead happy
                <br />
                <i>By Admin</i>
              </h3>
            </li>
            <li className="blog-item">
              <div className="blog-tag">
                <span>lifestyle</span>
              </div>
              <a href="" className="blog-img">
                <img src={blog3} alt="blog-3" />
              </a>
              <h3 className="blog-desc">
                Tips on having a happy
                <br />
                <i>By Admin</i>
              </h3>
            </li>
          </ul>
        </div>
      </section>
    </main>
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

export default App
