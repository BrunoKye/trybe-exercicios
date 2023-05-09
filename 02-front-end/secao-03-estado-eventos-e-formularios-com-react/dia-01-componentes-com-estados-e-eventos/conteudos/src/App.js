import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super()

    this.buttonOne = this.buttonOne.bind(this)
    this.buttonTwo = this.buttonTwo.bind(this)
    this.buttonThree = this.buttonThree.bind(this)


    this.state = {
      clickOne: 0,
      clickTwo: 0,
      clickThree: 0,
    };
  }

  buttonColor(num) {
    return num % 2 === 0 ? 'green' : 'red';
  }

  buttonOne() {
    this.setState((old, _props) => ({
      clickOne: old.clickOne + 1,
    }));
  }

  buttonTwo() {
    this.setState((old, _props) => ({
      clickTwo: old.clickTwo + 1,
    }));
  }

  buttonThree() {
    this.setState((old, _props) => ({
      clickThree: old.clickThree + 1,
    }));
  }

  render() {
    const { clickOne, clickTwo, clickThree } = this.state;
    return (
      <>
        <button 
          onClick={this.buttonOne}
          style={{ backgroundColor: this.buttonColor(clickOne) }}>
            {clickOne}
        </button>

        <button 
          onClick={this.buttonTwo}
          style={{ backgroundColor: this.buttonColor(clickTwo) }}>
            {clickTwo}
        </button>

        <button 
          onClick={this.buttonThree}
          style={{ backgroundColor: this.buttonColor(clickThree) }}>
            {clickThree}
        </button>
      </>
    )
  };
}
