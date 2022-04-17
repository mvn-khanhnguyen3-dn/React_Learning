import React, { Component } from 'react'

export default class BannerItem extends Component {
  render() {
    const {src,title,price} = this.props
    return (
      <li className="banner-item col-4">
      <a className="banner-img" href="">
        <img src={src} alt="Banner-1" />
      </a>
      <div className="banner-desc">
        <h2 className="banner-desc-title">{title}</h2>
        <p className="banner-desc-price">Starting at <span>{price}</span></p>
        <a href="#" className="banner-icon"
          ><i className="fa fa-long-arrow-right" aria-hidden="true"></i
        ></a>
      </div>
    </li>
    )
  }
}
