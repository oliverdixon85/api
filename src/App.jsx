import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";
import Films from "./components/Films";
import People from "./components/People";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showfilms: false,
      showpeople: false
    };
  }

  handleClick() {
    this.setState({
      showfilms: true,
      showpeople: false
    });
  }

  handlePeopleclick() {
    this.setState({
      showfilms: false,
      showpeople: true
    });
  }

  render() {
    if (this.state.showfilms === true) {
      return (
        <React.Fragment>
          <div className="row justify-content-center m-2 p-2">
            <div className="logo">
              <img src={logo} width="500" height="200" alt="ghj" />
            </div>
          </div>
          <div className="row justify-content-center m-2 p-2">
            <button
              className="btn btn-dark btn-lg m-2"
              onClick={() => {
                this.handlePeopleclick();
              }}
            >
              Show People
            </button>
          </div>

          <Films />
        </React.Fragment>
      );
    } else if (this.state.showpeople === true) {
      return (
        <React.Fragment>
          <div className="row justify-content-center m-2 p-2">
            <div className="logo">
              <img src={logo} width="500" height="200" alt="ghj" />
            </div>
          </div>
          <div className="row justify-content-center m-2 p-2">
            <button
              className="btn btn-dark btn-lg m-2"
              onClick={() => {
                this.handleClick();
              }}
            >
              Show Films
            </button>
          </div>

          <People />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div className="row justify-content-center m-2 p-2">
            <div className="logo">
              <img src={logo} width="500" height="200" alt="ghj" />
            </div>
          </div>
          <div className="row justify-content-center m-2 p-2">
            <button
              className="btn btn-dark btn-lg m-2"
              onClick={() => {
                this.handleClick();
              }}
            >
              Show Films
            </button>
            <button
              className="btn btn-dark btn-lg m-2"
              onClick={() => {
                this.handlePeopleclick();
              }}
            >
              Show People
            </button>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default App;
