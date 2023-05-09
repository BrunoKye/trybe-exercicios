import React, { Component } from 'react';
import './App.css';
import GeneratePerson from './components/GeneratePerson';

export default class App extends Component {
  render() {
    return (
      <div>
        <GeneratePerson />
      </div>
    );
  }
}
