import React, { useEffect, useState } from 'react'
import ProductItem from '../../../components/modules/ProductItem';

export default function Products() {
  const [productList,setProductList] = useState([])
  useEffect(()=>{
    const fetchData = () =>{
      fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProductList(data))
    }
    fetchData();
  },[]);
  return (
    <main className='page-main'>
      <div className="container">
      <div className="row">
        {productList.map(product =>(
         <li className="product-list" key={product.id}>
            <ProductItem product ={product}/>
         </li>
        ))}
      </div>
      </div>
    </main>
  )
}
