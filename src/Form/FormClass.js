import React, { Component } from 'react'
import DisplayForm from './DisplayForm';
import './Form.css'

 class FormClass extends Component {
  constructor(){
    super();
    this.state = {
      Name: '',
      Dept:'',
      Rating:'',
      clicked :  true,
      heading:'EMPLOYEE FEEDBACK FORM',
      EmpData : []
    }
  }

  handleChange =(e) =>{
    this.setState({[e.target.name] : e.target.value})
    // this.setState({ heading: 'New Form Heading' });
  }
  toggleFunction =()=> {
    this.setState({clicked : !this.state.clicked})
  }
  handleClick = () =>{
    const empObj = {
      name : this.state.Name,
      Dept : this.state.Dept,
      Rating : this.state.Rating,
    }
    this.state.EmpData.push(empObj);
    this.setState({
      EmpData : this.state.EmpData,
      Name :'',
      Dept:'',
      Rating:'',
      clicked : false,
     
    })
    this.setState({ heading: 'EMPLOYEE FEEDBACK DATA' });
    console.log(this.state.EmpData);
  }

  render() {
    return (
      <>
        <h1 className='heading'>{this.state.heading}</h1>
      <div>
        {this.state.clicked
        ?
        <form className='Form'> 
          <label htmlFor="name">Name:</label>
          <input type="text"  id="name"  placeholder='Enter your name' name="Name"  onChange={this.handleChange} value={this.state.Name} className='block' required/>
          <br />
          <br />
          <label htmlFor="name">Department:</label>
          <input type="text" id="name" placeholder='Enter Department Name' name='Dept' onChange={this.handleChange} value={this.state.Dept} className='block' required />
          <br />
          <br />
          <label htmlFor="name">Rating:</label>
          <input type="text" id="name" placeholder='Enter rating' name='Rating' onChange={this.handleChange} value={this.state.Rating} className='block' required />
          <br />
          <br />
          <button type='button' onClick={this.handleClick} className='block1'>Submit </button>
        </form>
        :
        <DisplayForm value={this.state.EmpData} toggleFunction={this.toggleFunction}/>
        }
      </div>
      </>
    )
  }
}

export default FormClass;
