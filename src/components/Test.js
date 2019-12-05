import React, { Component } from 'react'
import './test.css'
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';
  

class Test extends Component {
    render() {
        return (
            <div className="main">
                <card className="card">
                    <CardBody> 
                 <CardTitle className="header">FULL NAME</CardTitle><br></br>
                 <select class="dropdown " name="Access level" id="list">
           <option value="mr">MR</option>
           <option value="mrs">MRS</option>
           <option value="other">OTHER</option></select>
           <input type="text" placeholder="First Name" id="input1"></input>
           <input type="text" placeholder="Middle Name" id="input2"></input>
           <input type="text" placeholder="Last Name" id="inputtest"></input><br></br>
              <div className="footer1"> 
               <button className="next">Next &#8594;</button> </div>  
               <button className="next">Test</button>    
                 </CardBody>
                 </card>
                
            </div>
        )
    }
}

export default Test
