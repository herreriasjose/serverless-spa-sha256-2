import React, { Component } from 'react';

import Layout from "./containers/Layout"
import './App.css';

class App extends Component {
  

  render() {
    
    return (
      <div className="App">
      <h2>Serverless Integrity Checker</h2>
      <p className="resize1"><strong>Checks the integrity of 2 files using SHA-256</strong></p>
      <div className="container-fluid">
     <Layout></Layout>
      
      
      </div>
      </div>
    );
  }
}

export default App;
