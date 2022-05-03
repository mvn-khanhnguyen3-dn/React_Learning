import React from 'react'
import data from './data'

export default function Banner() {
  return (
    
    <section class="section-blog flex">
        <div class="container">
          <ul class="blog-list flex">
          {data.map((item,index)=>(
            <li key={index} class="blog-item">
              <div class="blog-tag">
                <span>{item.tag}</span>
              </div>
              <a href="" class="blog-img">
                <img src={item.img} alt="blog-1" />
              </a>
              <h3 class="blog-desc">
                {item.desc}
                <br />
                <i>{item.by}</i>
              </h3>
            </li>
             ))}   
          </ul>
        </div>
      </section>
  )
}
