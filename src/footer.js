import React, { PureComponent } from 'react'

export default class footer extends PureComponent {
  render() { 
    const liStyle = {color : 'black', fontSize:'15px' , backgroundColor: '#bebebeb0', height:'22px'}
    return (
        <div  style = {liStyle} className="d-flex justify-content-center  fixed-bottom ">
        <p>Made with 🧡 By Umesh</p>
      </div>
    )
  }
}
