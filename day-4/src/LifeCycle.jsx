import React, { Component } from 'react'

export default class LifeCycle extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentBtn : 'Start',
      count : props.number
    }
  }
  handleTimer(){
    if(this.state.currentBtn === 'Start'){
       this.timerId = setInterval(()=>{
        this.setState({count: this.state.count - 1})
      },1000)
      this.setState({currentBtn:"Stop"})
    }else{
      clearInterval(this.timerId);
      this.setState({currentBtn:"Start"})
    }
  }
  componentDidUpdate(){
    if(this.state.count === 0){
      clearInterval(this.timerId)
    }
  }
  componentWillUnmount(){
    clearInterval(this.timerId)
  }
  render() {
    return (
      <>
      <div className="counter">
      <button onClick={this.handleTimer.bind(this)}>{this.state.currentBtn}</button>
      <div className="number">
        <h3>{this.state.count}</h3>
      </div>
      </div>
      </>
    )
  }
}
