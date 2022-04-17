import React, { Component } from 'react'

export default class Product_Item extends Component {
  render() {
    const {src,percent,sale,title,price,new_price} = this.props
    return (
      
      <li className="product-item col-3">
      <a href=""><img src={src} alt="Product-1" /></a>
      <div className="product-item-sale">
        <h3 className="sale-percent">{percent}</h3>
        <p className="sale-new">{sale}</p>
      </div>
      <div className="product-item-action">
        <a href="#" className="add-cart"
          ><i className="fa fa-shopping-cart" aria-hidden="true"></i
        ></a>
        <a href="#" className="add-eye"
          ><i className="fa fa-eye" aria-hidden="true"></i
        ></a>
        <a href="#" className="add-compass"
          ><i className="fa fa-compass" aria-hidden="true"></i
        ></a>
      </div>
      <div className="product-item-content">
        <h2 className="product-item-title">{title}</h2>
        <p className="product-item-price">
          {new_price} - <span><strike>{price}</strike></span>
        </p>
      </div>
    </li>
    )
  }
}
