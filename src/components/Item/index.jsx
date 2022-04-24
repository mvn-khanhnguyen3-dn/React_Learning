import React, { Component } from 'react'

export default class index extends Component {
  render() {
    const {deleteItem,data} = this.props
    return (
<>
      {data.map((item,index) =>(
        <li key={item.id} className="table-row">
        <div className="col col-1">
          {item.country}
        </div>
        <div className="col col-2">
          {item.email}
        </div>
        <div className="col col-3">
          {item.password}
        </div>
        <div className="col col-2">
          {item.info}
        </div>
        <div className="col col-3">
         {item.gender}
        </div>
        <div className="col col-1">
          {item.agree.toString()}
          </div>
        <div className="col col-1">
        <i onClick={() => deleteItem(item)} className="fa fa-trash" aria-hidden="true"></i>
        </div>
      </li>
      ))}
     </>
    )
  }
}
