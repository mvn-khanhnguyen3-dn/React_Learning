import React, { Component } from 'react'

export default class BlogItem extends Component {
  render() {
    const {src,desc,tag,name} = this.props
    return (
      <li className="blog-item">
            <div className="blog-tag">
              <span>{tag}</span>
            </div>
            <a href="" className="blog-img">
              <img src={src} alt="blog" />
            </a>
            <h3 className="blog-desc">
              {desc}
              <br />
              <i>{name}</i>
            </h3>
          </li>
    )
  }
}
