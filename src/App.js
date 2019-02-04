import React, { Component } from 'react';

import Layout from "./containers/Layout"
import Footer from "./Footer";
import Info from './Info'

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
 
                <Info/>
                <br/>
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
                    <strong>Step 1:</strong> drag a file and its copy into the boxes
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
                    <strong>Step 2:</strong> try now with two different files
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
