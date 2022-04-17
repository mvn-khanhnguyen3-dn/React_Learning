import React, { Component } from 'react'
import blog1 from '../../../images/blog-1.jpg'
import blog2 from '../../../images/blog-2.jpg'
import blog3 from '../../../images/blog-3.jpg'
import BlogItem from './BlogItem'

export default class Blog extends Component {
  render() {
    return (
      <section className="section-blog flex">
      <div className="container">
        <div className="blog-title">
          <h2>OUR BLOG</h2>
        </div>
        <ul className="blog-list flex">
          <BlogItem src = {blog1} tag="lifestyle men" desc = " A guide to latest trends" name="By Admin"/>
          <BlogItem src = {blog2} tag="lifestyle " desc = "Five ways to lead happy" name="By Admin"/>
          <BlogItem src = {blog3} tag="lifestyle " desc = "Tips on having a happy" name="By Admin"/>
        </ul>
      </div>
    </section>
    )
  }
}
