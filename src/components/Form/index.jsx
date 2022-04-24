import React, { Component } from 'react'
import Table from '../Table'
import Popup from '../../modules/Popup'

export default class Form extends Component {
      constructor(){
        super()
        this.state = {
          data : [],
          id : '', 
          email : '',
          password : '',
          country : '',
          gender : 'male',
          info : '',
          agree : true
        }
      }
      handleChange(e){
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState(
          {
            id : Math.floor(Math.random() * 1000),
            [name] : value
          }
          )
      }
      handleSubmit(e){
        e.preventDefault();
        e.target.reset();
        const {id, email, password, country, gender, info, agree} = this.state;
        const item ={id, email, password, country, gender, info, agree}
        this.setState({
          data:[...this.state.data, item]
        })
      }
      
      handleDelete(item){
       this.setState({
        confirm:true,
        id : item.id
       })
      }
      handleOnCancel(){
        this.setState({confirm:false})
      }
      handleOnConfirm(){
        const newData = this.state.data.filter(item => item.id !== this.state.id)
        this.setState({
          confirm:false,
           data : [...newData]
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
           defaultChecked = {true}
           onChange={(e)=> this.handleChange(e)} 
           type="checkbox" />
          </div>
          <div className="form-control">
            <input type="submit" value="Submit" />
          </div>
         </form>
         <Table data={data} deleteBtn = {(item)=> this.handleDelete(item)}/>
         <Popup
          confirm={this.state.confirm}
          handleOnCancel={() => this.handleOnCancel()}
          handleOnConfirm={() => this.handleOnConfirm()
          }
         />
         </>
    )
  }
}
