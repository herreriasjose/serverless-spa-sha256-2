import React, { Component } from 'react';

import Layout from "./containers/Layout"
import Footer from "./Footer";

import './App.css';
import './bootstrap/css/bootstrap.min.css';

class App extends Component {
  

  render() {
    
    return (
      <div className="App">
      <h2 className="text-primary p-2" >Serverless Integrity-Checker Demo</h2>
      <span>
          <div className="col-md-12">
            <div className="row">
              <div className="col-1 col-sm-1 col-md-1 col-lg-4 col-xl-4" />
              <div className="col-10 col-sm-10 col-md-10 col-lg-4 col-xl-4">
              <p>
                    Checks the integrity of 2 files using SHA-256
                  
                  
                </p>
              </div>
              <div className="col-1 col-sm-1 col-md-1 col-lg-4 col-xl-4" />
            </div>
          </div>
        </span>
        <span>
          <div className="col-md-12">
            <div className="row">
              <div className="col-1 col-sm-1 col-md-1 col-lg-4 col-xl-4" />
              <div className="col-10 col-sm-10 col-md-10 col-lg-4 col-xl-4">
              <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item active text-justify text-center" aria-current="page">
                    Step 1: drag a file and its copy into the boxes
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="col-1 col-sm-1 col-md-1 col-lg-4 col-xl-4" />
            </div>
          </div>
        </span>
      <div className="container-fluid">
     <Layout></Layout>
     <span>
          <div className="col-md-12">
            <div className="row">
              <div className="col-1 col-sm-1 col-md-1 col-lg-4 col-xl-4" />
              <div className="col-10 col-sm-10 col-md-10 col-lg-4 col-xl-4">
              <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item active text-justify text-center" aria-current="page">
                    Step 2: try with 2 different files
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="col-1 col-sm-1 col-md-1 col-lg-4 col-xl-4" />
            </div>
          </div>
        </span>
      
      </div><br/>
      <Footer/>
      </div>
    );
  }
}

export default App;
