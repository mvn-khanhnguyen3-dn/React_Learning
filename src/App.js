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
    <header class="page-header">
      <div class="container flex justify-content-between">
        <div class="header-logo">
          <a href="#"><img src={logo} alt="Logo" /></a>
        </div>
        <nav class="nav-menu">
          <ul class="menu-list flex justify-content-around">
            <li class="menu-item"><a href="">Home</a></li>
            <li class="menu-item"><a href="">Shop</a></li>
            <li class="menu-item"><a href="">Collection</a></li>
            <li class="menu-item"><a href="">Pages</a></li>
            <li class="menu-item"><a href="">Blog</a></li>
            <li class="menu-item"><a href="">Contact Us</a></li>
          </ul>
        </nav>
        <ul class="social-list flex justify-content-around">
          <li class="social-item">
            <a href=""><i class="fa fa-search" aria-hidden="true"></i></a>
          </li>
          <li class="social-item">
            <a href=""><i class="fa fa-user" aria-hidden="true"></i></a>
          </li>
          <li class="social-item">
            <a href=""><i class="fa fa-address-book" aria-hidden="true"></i></a>
          </li>
          <li class="social-item">
            <a href=""><i class="fa fa-heart" aria-hidden="true"></i></a>
          </li>
          <li class="social-item">
            <a href=""><i class="fa fa-shopping-bag" aria-hidden="true"></i><sup>0</sup></a
            >
          </li>
          <a class="is-hidden nav-bar" href=""
            ><i class="fa fa-bars" aria-hidden="true"></i
          ></a>
        </ul>
      </div>
    </header>
    <main class="page-main">
      <section class="section-slideshow">
        <div class="container">
          <ul class="slide-list">
            <li class="slide-item">
              <div class="slide-img"></div>
              <div class="slide-content">
                <h5 class="slide-content-sale">Sale off 40%</h5>
                <h3 class="slide-content-desc">
                  Summer Offer <br />
                  2020 Collection
                </h3>
                <a href="#" class="btn-shop-now">Shop Now</a>
              </div>
            </li>
          </ul>
          <div class="btn-slide">
            <button class="btn btn-prev">
              <i class="fa fa-angle-left" aria-hidden="true"></i>
            </button>
            <button class="btn btn-next">
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </section>
      <section class="section-banner">
        <div class="container">
          <ul class="banner-list flex justify-content-between">
            <li class="banner-item col-4">
              <a class="banner-img" href="">
                <img src={banner1} alt="Banner-1" />
              </a>
              <div class="banner-desc">
                <h2 class="banner-desc-title">Watches</h2>
                <p class="banner-desc-price">Starting at <span>$99.00</span></p>
                <a href="#" class="banner-icon"
                  ><i class="fa fa-long-arrow-right" aria-hidden="true"></i
                ></a>
              </div>
            </li>
            <li class="banner-item col-4">
              <a class="banner-img" href="">
                <img src={banner2} alt="Banner-2" />
              </a>
              <div class="banner-desc">
                <h2 class="banner-desc-title">Plo Bag</h2>
                <p class="banner-desc-price">Starting at <span>$79.00</span></p>
                <a href="#" class="banner-icon"
                  ><i class="fa fa-long-arrow-right" aria-hidden="true"></i
                ></a>
              </div>
            </li>
            <li class="banner-item col-4">
              <a class="banner-img" href="">
                <img src={banner3} alt="Banner-3" />
              </a>
              <div class="banner-desc">
                <h2 class="banner-desc-title">Sunglass</h2>
                <p class="banner-desc-price">Starting at <span>$19.00</span></p>
                <a href="#" class="banner-icon"
                  ><i class="fa fa-long-arrow-right" aria-hidden="true"></i
                ></a>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section class="section-product">
        <div class="container">
          <ul class="product-tab-list flex">
            <li class="product-tab-item"><a href="">New Arrival</a></li>
            <li class="product-tab-item active"><a href="">Best Sellers</a></li>
            <li class="product-tab-item"><a href="">Sale Items</a></li>
          </ul>
          <ul class="product-list flex">
            <li class="product-item col-3">
              <a href=""><img src={product1} alt="Product-1" /></a>
              <div class="product-item-sale">
                <h3 class="sale-percent">-10%</h3>
                <p class="sale-new">New</p>
              </div>
              <div class="product-item-action">
                <a href="#" class="add-cart"
                  ><i class="fa fa-shopping-cart" aria-hidden="true"></i
                ></a>
                <a href="#" class="add-eye"
                  ><i class="fa fa-eye" aria-hidden="true"></i
                ></a>
                <a href="#" class="add-compass"
                  ><i class="fa fa-compass" aria-hidden="true"></i
                ></a>
              </div>
              <div class="product-item-content">
                <h2 class="product-item-title">Lorem ipsum accessories nine</h2>
                <p class="product-item-price">
                  €3.67 - <span><strike>€5.24</strike></span>
                </p>
              </div>
            </li>
            <li class="product-item col-3">
              <a href=""><img src={product2} alt="Product-2" /></a>
              <div class="product-item-sale">
                <h3 class="sale-percent"></h3>
                <p class="sale-new">New</p>
              </div>
              <div class="product-item-action">
                <a href="#" class="add-cart"
                  ><i class="fa fa-shopping-cart" aria-hidden="true"></i
                ></a>
                <a href="#" class="add-eye"
                  ><i class="fa fa-eye" aria-hidden="true"></i
                ></a>
                <a href="#" class="add-compass"
                  ><i class="fa fa-compass" aria-hidden="true"></i
                ></a>
              </div>
              <div class="product-item-content">
                <h2 class="product-item-title">Lorem ipsum accessories nine</h2>
                <p class="product-item-price">
                  €3.67 - <span><strike>€5.24</strike></span>
                </p>
              </div>
            </li>
            <li class="product-item col-3">
              <a href=""><img src={product3} alt="Product-3" /></a>
              <div class="product-item-sale">
                <h3 class="sale-percent">-30%</h3>
                <p class="sale-new">New</p>
              </div>
              <div class="product-item-action">
                <a href="#" class="add-cart"
                  ><i class="fa fa-shopping-cart" aria-hidden="true"></i
                ></a>
                <a href="#" class="add-eye"
                  ><i class="fa fa-eye" aria-hidden="true"></i
                ></a>
                <a href="#" class="add-compass"
                  ><i class="fa fa-compass" aria-hidden="true"></i
                ></a>
              </div>
              <div class="product-item-content">
                <h2 class="product-item-title">Lorem ipsum accessories nine</h2>
                <p class="product-item-price">
                  €3.67 - <span><strike>€5.24</strike></span>
                </p>
              </div>
            </li>
            <li class="product-item col-3">
              <a href=""><img src={product4} alt="Product-4" /></a>
              <div class="product-item-sale">
                <h3 class="sale-percent">-20%</h3>
                <p class="sale-new"></p>
              </div>
              <div class="product-item-action">
                <a href="#" class="add-cart"
                  ><i class="fa fa-shopping-cart" aria-hidden="true"></i
                ></a>
                <a href="#" class="add-eye"
                  ><i class="fa fa-eye" aria-hidden="true"></i
                ></a>
                <a href="#" class="add-compass"
                  ><i class="fa fa-compass" aria-hidden="true"></i
                ></a>
              </div>
              <div class="product-item-content">
                <h2 class="product-item-title">Lorem ipsum accessories nine</h2>
                <p class="product-item-price">
                  €3.67 - <span><strike>€5.24</strike></span>
                </p>
              </div>
            </li>
            <li class="product-item col-3">
              <a href=""><img src={product5} alt="Product-5" /></a>
              <div class="product-item-sale">
                <h3 class="sale-percent">-10%</h3>
                <p class="sale-new">New</p>
              </div>
              <div class="product-item-action">
                <a href="#" class="add-cart"
                  ><i class="fa fa-shopping-cart" aria-hidden="true"></i
                ></a>
                <a href="#" class="add-eye"
                  ><i class="fa fa-eye" aria-hidden="true"></i
                ></a>
                <a href="#" class="add-compass"
                  ><i class="fa fa-compass" aria-hidden="true"></i
                ></a>
              </div>
              <div class="product-item-content">
                <h2 class="product-item-title">Lorem ipsum accessories nine</h2>
                <p class="product-item-price">
                  €3.67 - <span><strike>€5.24</strike></span>
                </p>
              </div>
            </li>
            <li class="product-item col-3">
              <a href=""><img src={product6} alt="Product-6" /></a>
              <div class="product-item-sale">
                <h3 class="sale-percent"></h3>
                <p class="sale-new">New</p>
              </div>
              <div class="product-item-action">
                <a href="#" class="add-cart"
                  ><i class="fa fa-shopping-cart" aria-hidden="true"></i
                ></a>
                <a href="#" class="add-eye"
                  ><i class="fa fa-eye" aria-hidden="true"></i
                ></a>
                <a href="#" class="add-compass"
                  ><i class="fa fa-compass" aria-hidden="true"></i
                ></a>
              </div>
              <div class="product-item-content">
                <h2 class="product-item-title">Lorem ipsum accessories nine</h2>
                <p class="product-item-price">
                  €3.67 - <span><strike>€5.24</strike></span>
                </p>
              </div>
            </li>
            <li class="product-item col-3">
              <a href=""><img src={product7} alt="Product-7" /></a>
              <div class="product-item-sale">
                <h3 class="sale-percent">-30%</h3>
                <p class="sale-new">New</p>
              </div>
              <div class="product-item-action">
                <a href="#" class="add-cart"
                  ><i class="fa fa-shopping-cart" aria-hidden="true"></i
                ></a>
                <a href="#" class="add-eye"
                  ><i class="fa fa-eye" aria-hidden="true"></i
                ></a>
                <a href="#" class="add-compass"
                  ><i class="fa fa-compass" aria-hidden="true"></i
                ></a>
              </div>
              <div class="product-item-content">
                <h2 class="product-item-title">Lorem ipsum accessories nine</h2>
                <p class="product-item-price">
                  €3.67 - <span><strike>€5.24</strike></span>
                </p>
              </div>
            </li>
            <li class="product-item col-3">
              <a href=""><img src={product8} alt="Product-8" /></a>
              <div class="product-item-sale">
                <h3 class="sale-percent">-20%</h3>
                <p class="sale-new"></p>
              </div>
              <div class="product-item-action">
                <a href="#" class="add-cart"
                  ><i class="fa fa-shopping-cart" aria-hidden="true"></i
                ></a>
                <a href="#" class="add-eye"
                  ><i class="fa fa-eye" aria-hidden="true"></i
                ></a>
                <a href="#" class="add-compass"
                  ><i class="fa fa-compass" aria-hidden="true"></i
                ></a>
              </div>
              <div class="product-item-content">
                <h2 class="product-item-title">Lorem ipsum accessories nine</h2>
                <p class="product-item-price">
                  €3.67 - <span><strike>€5.24</strike></span>
                </p>
              </div>
            </li>
          </ul>
          <div class="product-view-more">
            <a href="">View more product</a>
          </div>
        </div>
      </section>
      <section class="section-blog flex">
        <div class="container">
          <div class="blog-title">
            <h2>OUR BLOG</h2>
          </div>
          <ul class="blog-list flex">
            <li class="blog-item">
              <div class="blog-tag">
                <span>lifestyle</span>
                <span>men</span>
              </div>
              <a href="" class="blog-img">
                <img src={blog1} alt="blog-1" />
              </a>
              <h3 class="blog-desc">
                A guide to latest trends
                <br />
                <i>By Admin</i>
              </h3>
            </li>
            <li class="blog-item">
              <div class="blog-tag">
                <span>lifestyle</span>
              </div>
              <a href="" class="blog-img">
                <img src={blog2} alt="blog-2" />
              </a>
              <h3 class="blog-desc">
                Five ways to lead happy
                <br />
                <i>By Admin</i>
              </h3>
            </li>
            <li class="blog-item">
              <div class="blog-tag">
                <span>lifestyle</span>
              </div>
              <a href="" class="blog-img">
                <img src={blog3} alt="blog-3" />
              </a>
              <h3 class="blog-desc">
                Tips on having a happy
                <br />
                <i>By Admin</i>
              </h3>
            </li>
          </ul>
        </div>
      </section>
    </main>
    <footer class="page-footer">
      <div class="container flex justify-content-between">
        <div class="footer-left">
          <a class="footer-logo" href=""
            ><img src={logo} alt="Logo"
          /></a>
          <p>
            © 2022 Flone. <br />
            All Rights Reserved
          </p>
        </div>
        <div class="footer-middle-3-col flex justify-content-between wrap">
          <div class="footer-middle-col">
            <h3 class="footer-middle-title">ABOUT US</h3>
            <ul class="footer-middle-list">
              <li class="footer-middle-item"><a href="">About us</a></li>
              <li class="footer-middle-item"><a href="">Store location</a></li>
              <li class="footer-middle-item"><a href="">Contact</a></li>
              <li class="footer-middle-item"><a href="">Orders tracking</a></li>
            </ul>
          </div>
          <div class="footer-middle-col">
            <h3 class="footer-middle-title">USEFUL LINKS</h3>
            <ul class="footer-middle-list">
              <li class="footer-middle-item"><a href="">Returns</a></li>
              <li class="footer-middle-item"><a href="">Support Policy</a></li>
              <li class="footer-middle-item"><a href="">Size guide</a></li>
              <li class="footer-middle-item"><a href="">FAQs</a></li>
            </ul>
          </div>
          <div class="footer-middle-col">
            <h3 class="footer-middle-title">FOLLOW US</h3>
            <ul class="footer-middle-list">
              <li class="footer-middle-item"><a href="">Facebook</a></li>
              <li class="footer-middle-item"><a href="">Twitter</a></li>
              <li class="footer-middle-item"><a href="">Instagram</a></li>
              <li class="footer-middle-item"><a href="">Youtube</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-right">
          <form class="footer-right-form">
            <h3 class="footer-right-title">SUBSCRIBE</h3>
            <div class="footer-right-content">
              <p>
                Get E-mail updates about our latest shop and special offers.
              </p>
              <input
                class="footer-right-text"
                placeholder="Enter your email address..."
                type="text"
              />
              <br />
              <button class="btn-sub" type="submit">SUBSCRIBE</button>
            </div>
          </form>
        </div>
      </div>
    </footer>
    </>
  )
}

export default App
