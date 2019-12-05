import React, { Component }from 'react';


import {
    Card, CardImg, CardText, CardBody,Collapse,
    CardTitle, CardSubtitle, CardFooter,Button
  } from 'reactstrap';
 import './task4.css'
  

class Task4 extends Component {
    constructor() {
        super()
    
        this.state = {
            address1:'',
            address2:'',
            city:'',
            state1:'',
            code:'',
            result:'please select'
        };
       
    }
   
    handler(e)
    {this.setState({
        result:e.target.value
    })}
    
  
    render() {
        return (
            <div className="address">
                
                <Card className="main1">
                    <CardBody>
                        <Collapse>
                     <button id="button1" >k</button>  
                     </Collapse>
                    <CardTitle className="add">ADDRESS</CardTitle><br></br>

                    <input type="text" placeholder="Street Address" id="add1" onChange={this.eventHandler} value={this.state.address1}></input><br></br>
                    <input type="text" placeholder="Street Address line 2" id="add2" onChange={this.eventHandler} value={this.state.address2}></input><br></br>
                    <input type="text" placeholder="city" id="city" onChange={this.eventHandler} value={this.state.city}></input>
                    <input type="text" placeholder="State/province" id="state" onChange={this.eventHandler} value={this.state.state1}></input><br></br>
                    <input type="text" placeholder="Postal Zip code" id="code" onChange={this.eventHandler} value={this.state.code}></input>
                   
                    <select  className="country"name="Access level" id="list"value={this.state.result}  onChange={this.handler.bind(this)}>
                        <option value="india">INDIA</option>
                        <option value="usa">USA</option>
                        <option value="aus">AUSTRALIA</option>
                        <option value="england">ENGLAND</option>
                    </select><br></br> 
                   <div className="footer1">
                   
                    <button className="previous"> &#8592; PREV</button>
                    <button className="button">Next &#8594;</button>
                    
                    </div>
                    </CardBody>
                   
                </Card>
                
            </div>
        )
    }
}

export default Task4
