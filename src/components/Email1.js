import React, { Component } from 'react'
import './email1.css'

 class Email1 extends Component {
     constructor() {
         super()
     
         this.state = {
             name:''
              
         }
         this.validateEmail=this.validateEmail.bind(this);
         this.clear=this.clear.bind(this);
     }
     validateEmail()
     {
         var x=this.state.name;
         var y=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
         if(x.match(y))
         {alert("Email is correct")}
         else{alert("email is incoorect")}
     }
     clear=(event)=>{
        this.setState({
            name1:event.target.value
        })
     }
     
    render() {
        return (
            <div className="get">
                <form className="mail">
                <input type="text" value={this.state.name} placeholder="enter email" onChange={this.clear}></input><br></br>
                <button onCLick={this.validateEmail}></button>

                </form>
                
            </div>
        )
    }
}

export default Email1
