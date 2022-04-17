import React, { Component } from 'react'
import product1 from '../../../images/1.jpg'
import product2 from '../../../images/2.jpg'
import product3 from '../../../images/3.jpg'
import product4 from '../../../images/4.jpg'
import product5 from '../../../images/5.jpg'
import product6 from '../../../images/6.jpg'
import product7 from '../../../images/9.jpg'
import product8 from '../../../images/11.jpg'
import Product_Item from './ProductItem'
import Product_Tab_List from './Tab_List'
export default class Product extends Component {
  render() {
    return (
      <section className="section-product">
      <div className="container">
        <Product_Tab_List/>
        <ul className="product-list flex">
         <Product_Item src={product1} percent='10%' sale="new" title="Lorem ipsum accessories nine" price="€5.67" new_price="€3.67"/>
         <Product_Item src={product2} percent='20%' sale="" title="Lorem ipsum accessories nine" price="€8.67" new_price="€3.67"/>
         <Product_Item src={product3} percent='10%' sale="old" title="Lorem ipsum accessories nine" price="€7.67" new_price="€5.67"/>
         <Product_Item src={product4} percent='40%' sale="new" title="Lorem ipsum accessories nine" price="€8.67" new_price="€3.67"/>
         <Product_Item src={product5} percent='30%' sale="new" title="Lorem ipsum accessories nine" price="€9.67" new_price="€4.67"/>
         <Product_Item src={product6} percent='25%' sale="" title="Lorem ipsum accessories nine" price="€2.67" new_price="€3.67"/>
         <Product_Item src={product7} percent='15%' sale="old" title="Lorem ipsum accessories nine" price="€4.67" new_price="€2.67"/>
         <Product_Item src={product8} percent='20%' sale="new" title="Lorem ipsum accessories nine" price="€5.67" new_price="€3.67"/>
        </ul>
        <div className="product-view-more">
          <a href="">View more product</a>
        </div>
      </div>
    </section>
    )
  }
}
