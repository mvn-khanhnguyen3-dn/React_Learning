import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    const {desc} = this.props
    return (
      <li className="footer-middle-item"><a href="">{desc}</a></li>
    )
  }
}
