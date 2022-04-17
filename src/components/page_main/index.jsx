import React, { Component } from 'react'
import Banner from './banner/Banner'
import Blog from './blog/Blog'
import Product from './product/Product'
import Slide from './Slide'

export default class Home extends Component {
  render() {
    return (
      <main className="page-main">
      <Slide/>
      <Banner/>
      <Product/>
      <Blog/>
      </main>
    )
  }
}
