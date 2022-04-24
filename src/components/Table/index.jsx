import React, { Component } from 'react'
import Item from '../Item'

export default class Table extends Component {
  render() {
    const {data,deleteBtn} = this.props
    return (
     <div className="container">
          <ul className="responsive-table">
            {data.length > 0  && 
             <li className="table-header">
             <div className="col col-1">Country</div>
             <div className="col col-2">Email</div>
             <div className="col col-3">Password</div>
             <div className="col col-2">Description</div>
             <div className="col col-3">Gender</div>
             <div className="col col-1">Agree</div>
             <div className="col col-1">Action</div>
           </li>
            }
           <Item data ={data} deleteItem={(item) => deleteBtn(item)}/>
          </ul>
        </div>
    )
  }
}
