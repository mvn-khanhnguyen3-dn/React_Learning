import React, { useEffect, useState } from 'react'
import './List.css'

export default function useList() {
  const [number,setNumber] = useState(1)
  const [list,setList] = useState([])
  useEffect(()=>{
    fetch(`https://reqres.in/api/users?page=${number}`)
    .then(response => response.json())
    .then(data => setList(data.data));
  },[number])
  console.log();
  return (
    <>
    <div className="list-container">
    {list.map(item =>(
     <div key={item.id} className="list">
        <div className="list-header">
        <img src={item.avatar} alt="" />
      </div>
      <div className="list-content">
        <h3>{item.first_name } {item.last_name}</h3>
        <p>{item.email}</p>
      </div>
     </div>
    ))}
    </div>
      <button onClick={()=> setNumber(number === 1 ? 1 : number - 1)}>Prev</button>
      <button style={number=== 1 ?{backgroundColor: "#9921c4",color:"#fff"}: {color:"#111"}} onClick={()=> setNumber(1)}>1</button>
      <button style={number=== 2 ?{backgroundColor: "#9921c4",color:"#fff"}: {color:"#111"}} onClick={()=> setNumber(2)}>2</button>
      <button onClick={()=> setNumber(number === 2 ? 2 : number + 1)}>Next</button>
    </>
  )
}
