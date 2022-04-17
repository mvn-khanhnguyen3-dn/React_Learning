import React, { Component } from 'react'
import banner1 from '../../../images/banner-1.jpg'
import banner2 from '../../../images/banner-2.jpg'
import banner3 from '../../../images/banner-3.jpg'
import BannerItem from './BannerItem'
export default class Banner extends Component {
  render() {
    return (
      <section className="section-banner">
      <div className="container">
        <ul className="banner-list flex justify-content-between">
         <BannerItem src = {banner1} title="Watches" price="$39.00"/>
         <BannerItem src = {banner2} title="Plo Bag" price="$79.00"/>
         <BannerItem src = {banner3} title="Sunglass" price="$29.00"/>
        </ul>
      </div>
    </section>
    )
  }
}

