import React,{Component} from 'react'
import './resume.css'

class Hello extends Component {
    constructor() {
        super()
        this.state={
            message:"Resume Builder",
            name:"SIGN UP"

        }

    }
    myfunction()
    { this.setState({
     message:"WELCOME",
     name:"kshitij"
    })

    }
    
    render(){
        return (
            
        
         <div className="main">
              <h1>{this.state.message}</h1><br></br>
              
                <div className="sign">
                
                  <h2>{this.state.name}</h2>
                 </div> 
           <div classname="name">
             <form>
             <input type="text" ></input><br></br>
             <input type="text" ></input><br></br>
             <button onClick={()=>this.myfunction()}>LOGIN</button>
             <button onClick="clear()">CLEAR</button>
             </form>
           </div>
           </div>
         ) }  
    }
export default Hello