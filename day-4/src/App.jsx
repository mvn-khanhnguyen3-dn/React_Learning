import React, { Component } from 'react'
import './App.css';
import Home from './pages/home';
import About from './pages/about';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentPage : "Home"
    }
  }
  handleChangePage(data){
    if(data === "Home"){
      this.setState({currentPage:"Home"})
    }else{
      this.setState({currentPage:"About"})
    }
  }
  render() {
    return (
      <div className="App">
      <ul className='header'>
        <li><a onClick={this.handleChangePage.bind(this,"Home")} href="#">Home</a></li>
        <li><a onClick={this.handleChangePage.bind(this,"About")} href="#">About</a></li>
      </ul>
      {this.state.currentPage === "Home" ? <Home/> : <About/>}
    </div>
    )
  }
}
