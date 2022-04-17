import React, { Component } from 'react'
import Item from './Item'

export default class FooterItem extends Component {
  render() {
    const{title,desc1,desc2,desc3,desc4} = this.props
    return (
      <div className="footer-middle-col">
      <h3 className="footer-middle-title">{title}</h3>
      <ul className="footer-middle-list">
        <Item desc = {desc1}/>
        <Item desc = {desc2}/>
        <Item desc = {desc3}/>
        <Item desc = {desc4}/>
      </ul>
    </div>
    )
  }
}
