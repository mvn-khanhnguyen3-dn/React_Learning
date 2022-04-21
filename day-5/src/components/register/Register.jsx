import React, { Component } from 'react'
import './Register.css'

export default class Register extends Component {
  constructor(){
    super()
    this.state = {
      data : [],
      id : 1, 
      email : '',
      password : '',
      country : '',
      gender : 'male',
      info : '',
      agree : false
    }
  }
  handleChange(e){
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState(
      {
        [name] : value
      }
      )
  }
  handleSubmit(e){
    e.preventDefault();
    e.target.reset();
    const id = Math.floor(Math.random() * 1000);
    const item ={
      id : id,
      email : this.state.email,
      password : this.state.password,
      country : this.state.country,
      gender : this.state.gender,
      info : this.state.info,
      agree : this.state.agree
    }
    this.setState({
      data:[...this.state.data, item]
    })
    // console.log(item);
  }

  handleDelete(id){
   const newData = this.state.data.filter(item => item.id !== id)
   this.setState({
     data : newData
   })
  }
  render() {
    const {data} = this.state
    return (
      <>
     <form onSubmit={(e) => this.handleSubmit(e)}>
     <h3>Form Register</h3>
      <div className="form-control">
        <label htmlFor="email">Email</label>
        <input 
        id="email" 
        name="email" 
        type="email"
        required 
        onChange={(e)=> this.handleChange(e)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="password">Password</label>
        <input 
        id="password" 
        name="password" 
        type="password" 
        required
        onChange={(e)=> this.handleChange(e)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="country">Country</label>
       <select 
       name="country" 
       required
       id="country"
       onChange={(e)=> this.handleChange(e)}
       >
         <option value="">Choose Option</option>
         <option value="VN">Vietnam</option>
         <option value="CN">China</option>
       </select>
      </div>
      <div className="form-control">
        <label htmlFor="gender">Gender</label>
        <input
        type="radio" 
        name="gender" 
        value="male"
        defaultChecked="male"
        onChange={(e)=> this.handleChange(e)}
        /> Male
        <input 
        type="radio" 
        name="gender" 
        value="female"
        onChange={(e)=> this.handleChange(e)} 
        />Female
      </div>
      <div className="form-control">
        <textarea 
        name="info" 
        id="info" 
        required
        onChange={(e)=> this.handleChange(e)}
        ></textarea>
      </div>
      <div className="form-control">
        <label>Are you sure you agree to all the terms?</label>
       <input 
       id='term' 
       name="agree" 
       defaultChecked = {false}
       onChange={(e)=> this.handleChange(e)} 
       type="checkbox" />
      </div>
      <div className="form-control">
        <input type="submit" value="Submit" />
      </div>
     </form>
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
           
            {data.map((item,index) =>(
              <li key={index} className="table-row">
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
                <i onClick={()=> this.handleDelete(item.id)} className="fa fa-trash" aria-hidden="true"></i>
              </div>
            </li>
            ))}
          </ul>
        </div>
      </>
    )
  }
}
