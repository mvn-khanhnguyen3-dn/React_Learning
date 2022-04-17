import React, { Component } from 'react'

export default class HeaderBar extends Component {
  render() {
    const {icon} = this.props
    return (
      <a className="is-hidden nav-bar" href="">{icon}</a>
    )
  }
}
