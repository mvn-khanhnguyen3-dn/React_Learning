import React, { Component } from 'react'

export default class MenuItem extends Component {
  render() {
    const {name} = this.props
    return (
      <li className="menu-item"><a href="">{name}</a></li>
    )
  }
}
