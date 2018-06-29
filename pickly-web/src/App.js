import React, { Component } from 'react';
import './App.css';
import { getPics } from './querys';
import { graphql } from 'react-apollo';

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h2>Pics</h2>
      </div>
    );
  }
}

export default graphql(
  getPics
)(App);
