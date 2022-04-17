import React, { Component } from 'react'

export default class Slide extends Component {
  render() {
    return (
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
    )
  }
}
