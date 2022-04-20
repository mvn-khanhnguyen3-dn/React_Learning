import React, { Component } from 'react'
import LifeCycle from '../../LifeCycle'


export default class Home extends Component {
  render() {
    return (
      <>
      <LifeCycle number = {10}/>
      <LifeCycle number = {30}/>
      <LifeCycle number = {50}/>
      </>
    )
  }
}
