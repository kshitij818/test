import React,{Component} from 'react'
import './task3.css'
import { Button } from 'reactstrap'
import { Alert } from 'reactstrap';

class Task3 extends Component{
    render(){
        return(
            <div className="main">
              <div className="main2">
              <form >
                <div className="header">
                <h1>FULL NAME</h1><br></br></div>
                <select class="dropdown " name="Access level" id="list">
           <option value="mr">MR</option>
           <option value="mrs">MRS</option>
           <option value="other">OTHER</option></select>
           <input type="text" placeholder="First Name" id="input1"></input>
           <input type="text" placeholder="Middle Name" id="input2"></input>
           <input type="text" placeholder="Last Name" id="input3"></input><br></br>
           <div className="color">
           <button class="next">Next &#8594;</button> 
              
              </div>    
           </form>
          
            </div>    
            </div>
        )
    }
}
export default Task3