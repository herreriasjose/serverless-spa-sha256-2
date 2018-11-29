import React, { Component } from "react";

import Box from "react-drag-drop-info";
import "./Layout.css";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hash : [],
      droppable: true,
      icon : ["Droppable","Droppable"],
      text : ["Drop file 1 here", "Drop file 2 here"]
    };
    this.handleDrop = this.handleDrop.bind(this);
  }

  handleDrop(obj) {
    if (obj.hash256) {
      const hash = this.state.hash.slice();
      const text = this.state.text.slice();
      text[obj.boxId] = "";
      hash[obj.boxId] = obj.hash256;
      this.setState({ hash: hash, text: text  });
    }
    if (obj.busy === false ) {
       
      if (
        this.state.hash[0] === this.state.hash[1] 
      ) {
        this.setState({ icon: ["Right","Right"] });
      } else if ( this.state.hash[0] !== undefined && this.state.hash[1] !== undefined ) {
        this.setState({ icon: ["Wrong","Wrong"] });
      }
        else {

          const icon = this.state.icon.slice();
      
       icon[obj.boxId] = "Right";
      
       this.setState({ icon: icon});
        }

      
    } else {
       
      const icon = this.state.icon.slice();
      
      icon[obj.boxId] = "Busy";
      
      this.setState({ icon: icon});
    }
  }

  render() {

     


    return (
      
        
       
 
      <div>
          <Box
            handleDrop={this.handleDrop}
            boxId="0"
            droppable={this.state.droppable}
          >
            <div className={this.state.icon[0]}><p className="resize1">{this.state.text[0]}</p></div>
          </Box>
          <p className="resize1"> {this.state.hash[0]} </p>
         
      



          <Box
            handleDrop={this.handleDrop}
            boxId="1"
            droppable={this.state.droppable}
          >
            <div className={this.state.icon[1]}><p className="resize1">{this.state.text[1]}</p></div>
          </Box>
          <p className="resize1"> {this.state.hash[1]} </p>
      </div>
        
  
  
    );
  }
}

export default Layout;
