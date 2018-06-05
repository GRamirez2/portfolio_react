import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <section className="container">
          <div>Just a few words</div>
          <div>Just a few words</div>
          <div>Just a few words Just a few words Just a few words Just a few words Just a few words Just a few words Just a few words Just a few words Just a few words Just a few words Just a few words Just a few words Just a few words Just a few words Just a few words Just a few words Just a few words Just a few words Just a few words Just a few words Just a few words Just a few words Just a few words Just a few words Just a few words Just a few words Just a few words Just a few words Just a few words Just a few words Just a few words</div>
          <div className="nested">
            <div>Nested div 1</div>
            <div>Nested div 2</div>
            <div>Nested div 3</div>
            <div>Nested div 1</div>
            <div>Nested div 2</div>
            <div>Nested div 3</div>
            <div>Nested div 1</div>
            <div>Nested div 2</div>
            <div>Nested div 3</div>
          </div>
          <div>Just a few words</div>
          <div>Just a few words</div>
        </section>
        <section className="container2">
          <div className="box box1">Box 1</div>
          <div className="box box2">Box 2</div>
          <div className="box box3">Box 3</div>
          <div className="box box4">Box 4</div>
          <div className="box box5">Box 5</div>
          <div className="box box6">Box 6</div>
        </section>
      </div>

    );
  }
}

export default App;
