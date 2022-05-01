import React from 'react'
import { useHistory } from "react-router-dom";

export default function ProductDetail({product}) {
  let history = useHistory();
  const {id,title,price,category,image} = product
  return (
   <>
   <div className="product-item">
    <h2 className="product-catalog">{category}</h2>
     <a href="">
       <img className="product-img" src={image} alt="" />
     </a>
     <h3 className="product-title">
       {title}
     </h3>
      <div className="product-bottom">
       <span>$ {price}</span>
      <button onClick={()=> history.push(`/product/${id}`)} className="btn btn-show">Show more</button>
      </div>
   </div>
   </>
  )
}
