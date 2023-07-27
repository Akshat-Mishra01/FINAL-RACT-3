import React, { Component } from 'react'
import './Form.css'

 class DisplayForm extends Component {
    constructor(props){
        super(props);
        console.log(this.props.value);
    }
  render() {
    return (
        <>
      <div className='box'>
         <div>
        {this.props.value.map((item,index)=>{
          return(
            <>
             <span >Name:{item.name} | Dept:{item.Dept} | Rating:{item.Rating} </span>
            </>
          ) 
        })}
         </div>
         <br />
      </div>
        <button onClick={this.props.toggleFunction} className='block2'>Go Back</button>
      </>
    )
  }
}
export default DisplayForm;