import React, { Component } from 'react'

export default class HeaderIcon extends Component {
  render() {
    const {icon,total} = this.props
    return (
      <li className="social-item">
            <a href="">{icon} {total}</a>
          </li>
    )
  }
}
