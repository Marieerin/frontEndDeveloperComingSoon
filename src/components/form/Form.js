import React, { Component } from 'react';
import About from "../../About";
import StyleOptions from "../../StyleOptions.js"

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { render } from '@testing-library/react';

class Form extends Component {

  constructor() {
    super();
    //create some state in Form.js for all form inputs so they can be used across forms
    this.state = {
      //About params
      firstName: "",
      lastName: "",
      subtitle: "",
      email: "",
      linkedIn: "",
      twitter: "",
      blog: "",
      other: "",
      // StyleOptions params
      color: '',
      font: '',
      background: [],
      backgroundSelected: '',
      step: 'about'
    }
  }

  // ["about", "whatever"]
  
  // locationStep = () => {
  //   if (this.state.step === 'about') {
  //     // <> is called a fragment and gives us the use of a div without actually using one.
  //     return (<>
  //             {/* Set the to= to a function that updates state to be our new step then pushes the user to the new route */}
  //             {/* will need two different functions for back and forward, each will save a state to the appropriate back or forward and then return the string of the component so the user can go forward or back. */}
              
  //             </>
  //             )
  //             if (link styles)
  //     // need to update users behaviours
      
  //   } else if (this.state.step === "style") {
  //     return 
  //   }
  // }
  

  
  // create handler functions (handle on change) inside Form to update those pieces of state
  // pass those functions as props to the class components
  // inside class component, on input change, call those props
  formParamInputs = (param) => {
    for (let [key, value] of Object.entries(param)) {
      // console.log(`${key}: ${value}`)
      this.setState({
        [key]: value,
      })
    }
  }

  styleParamInputs = (param) => {
    console.log(param);
    for (let [key, value] of Object.entries(param)) {
      // console.log(`${key}: ${value}`)
      this.setState({
        [key]: value,
      })
    }
  }


  render() {
    // console.log(this.props)
    return (
      <Router>
      <div className="formContainer">
        <h2>This is a Form</h2>
        {/* <About /> */}
        <nav>
            <Link to="/about">Back</Link>
            {/* Piece of state to  */}
            {/* create an array to store the steps and use said array plus the value in state to determine where we are in the flow. */}
            <Link to="/styles">Next</Link>
            {/* <Link to="/codeCopy">Next</Link> */}
        </nav>

          <Route exact path="/about" render={(props) => <About formInputs={this.formParamInputs} {...props} />} />
        {/* <Route exact path="/styles" component={ StyleOptions } /> */}

          <Route exact path="/styles" render={(props) => <StyleOptions styleInputs={this.styleParamInputs} {...props} />} />

        {/* <Route exact path="/demo" render={(props) => <StyleOptions formInputs={this.state} {...props} />} /> */}
        
        {/* <Route exact path="/codeCopy" render={(props) => <StyleOptions formInputs={this.state} {...props} />} /> */}

      </div>

      </Router>
    )
  }
}

export default Form;