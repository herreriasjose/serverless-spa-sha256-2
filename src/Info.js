import React from "react";

import "./Info.css";
import "./bootstrap/css/bootstrap.css";
import infoImg from "./icons/info-circle.svg";

const Info = props => (
  <div className="col-md-12 p-1">
    <div className="row">
      <div className="col-1 col-sm-1 col-md-1 col-lg-3 col-xl-3" />
      <div className="col-10 col-sm-10 col-md-10 col-lg-6 col-xl-6 col-centered">
        
   <span className="info-text-primary">
   <img src={infoImg} alt="Cogs-img" className="customImg" /> This application <strong>checks the integrity of two files</strong> by calculating their SHA-256 hash.</span>
      </div>
      <div className="col-1 col-sm-1 col-md-1 col-lg-3 col-xl-3" />
    </div>
  </div>
);

export default Info;