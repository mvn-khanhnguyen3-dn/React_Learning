import React, { Component } from 'react'
import './Popup.css'
export default class Popup extends Component {
  render() {
    const {
      confirm,
      handleOnCancel,
      handleOnConfirm
    } = this.props;
    return (
      <>
      {confirm && (
        <div className="popup">
          <div className="popup-header">
            <h3><i onClick={handleOnCancel} className="fa fa-ban" aria-hidden="true"></i></h3>
          </div>
          <div className="popup-content">
            <h2>Are You Sure?</h2>
          </div>
          <div className="popup-footer">
          <button className="btn btn-cancel" onClick={handleOnCancel}>
              Cancel
            </button>
            <button className="btn btn-delete" onClick={handleOnConfirm}>
              Ok
            </button>
          </div>
        </div>
      )}
    </>
    )
  }
}
