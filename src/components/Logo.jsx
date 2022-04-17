import React, { Component } from 'react'

export default class Logo extends Component {
  render() {
    const {src} = this.props
    return (
      <a href="#"><img src={src} alt="Logo" /></a>
    )
  }
}
