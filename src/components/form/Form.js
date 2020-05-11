import React, { Component } from 'react';
import Preview from './Preview.js'
import PasteCode from '../PasteCode'
import About from "../../About";
import StyleOptions from "../../StyleOptions.js";
import Login from "../../Login.js";
import NextButton from "./NextButton.js";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


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
      instagram: "",
      github: "",
      blog: "",
      other: "",
      // StyleOptions params
      color: "",
      background: [],
      backgroundSelected: "",
      // Login user save
      user: null,
      font: '',
    }
  }

  //listen for a click on back button
  handleBackButton = () => {
    //this location is specific object property which comes with Router we imported
    //it tel us which page user on right now
    //pathname return path we created
    let page = window.location.pathname;

    console.log(window.location);
    // console.log(page)

    let backTo = '';

    if (page === '/about') {
      return backTo = '/login'
    } else if (page === '/styles') {
      return backTo = '/about'
    } else if (page === '/preview') {
      return backTo = '/styles'
    } else if (page === '/codeCopy') {
      return backTo = '/preview'
    } else if (page === '/login') {
      return backTo = '/login'
    } else {
      return (backTo = "/codeCopy");
      // on load opens 'home page', so at least we can move back to last page
    }
  }

  handleNextButton = () => {
    //this location is specific object property which comes with Router we imported
    //it tel us which page user on right now
    //pathname return path we created
    let page = window.location.pathname

    // console.log(page)

    let nextTo = '';
    //back button on about back doesn't return anythig so don't click it until you add more
    if (page === '/about') {
      return nextTo = '/styles'
    } else if (page === '/styles') {
      return nextTo = '/preview'
    } else if (page === '/preview') {
      return nextTo = '/codeCopy'
    } else if (page === '/codeCopy') {
      return nextTo = '/codeCopy'
    } else if (page === '/login') {
      return nextTo = '/login'
    } else {
      return nextTo = '/about'
      // on load opens 'home page', so at least we can move forward to first page
    }
  }

  // create handler functions (handle on change) inside Form to update those pieces of state
  // pass those functions as props to the class components
  // inside class component, on input change, call those props
  formParamInputs = (param) => {
    console.log(param);
    for (let [key, value] of Object.entries(param)) {
      this.setState({
        [key]: value,
      });
    }
  };

  styleParamInputs = (param) => {
    console.log(param);
    for (let [key, value] of Object.entries(param)) {
      this.setState({
        [key]: value,
      });
    }
  };


  render() {
    // console.log(this.props)
    return (
      <Router>
        <div className="formContainer">
          {/* <Login /> */}

          <Route
            exact
            path="/Application"
            render={(props) => (
              <About formInputs={this.formParamInputs} {...props} />
            )}
          />

          <Route
            exact
            path="/about"
            render={(props) => (
              <About
                formInputs={this.formParamInputs}
                globalState={this.state}
                {...props}
              />
            )}
          />

          <Route
            path="/styles"
            render={(props) => (
              <StyleOptions styleInputs={this.styleParamInputs} {...props} />
            )}
          />

          <Route
            path="/preview"
            render={(props) => (
              <Preview previewInputs={this.state} {...props} />
            )}
          />

          <Route
            path="/codeCopy"
            render={(props) => <PasteCode formInputs={this.state} {...props} />}
          />

          <Route path ="/login" component={Login} />

          <nav className="buttonDiv">
            <Link className="button back" to={this.handleBackButton} onClick={this.props.updateRender}>Back</Link>
            {/* Piece of state to  */}
            {/* <NextButton currentFormInputs={this.state} /> */}
            {/* create an array to store the steps and use said array plus the value in state to determine where we are in the flow. */}
            <Link className="button" to={this.handleNextButton} onClick={this.props.updateRender}>Next</Link>
            {/* <Link to="/codeCopy">Next</Link> */}
          </nav>
        </div>
        </Router>

    );
  }
}

export default Form;