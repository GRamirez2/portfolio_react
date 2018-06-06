import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => (
      <div className="App">
        <div className="container_header">
          <div className="logo">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <h1 className="App-title">CSS-GRID Examples</h1>
        </div>
        <div className="sub_title_1">SUB TITLE ONE</div>
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
        <div className="sub_title_2">SUB TITLE TWO</div>
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

export default App;
