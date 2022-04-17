import React, { Component } from 'react'

export default class Product_Tab_List extends Component {
  render() {
    return (
      <ul className="product-tab-list flex">
          <li className="product-tab-item"><a href="">New Arrival</a></li>
          <li className="product-tab-item active"><a href="">Best Sellers</a></li>
          <li className="product-tab-item"><a href="">Sale Items</a></li>
        </ul>
    )
  }
}
