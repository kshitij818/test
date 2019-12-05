import React,{Component} from 'react'
import './email.css'
class Email extends Component{
    constructor()
    {
        super()
        this.state={
            name1:''
        }
         
     }
     email()
        { var x=this.state.name1;
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
    
    
    
    render(){
        return(
            <div className="get">
                
                <form className="mail">
                    <input type="text" value={this.state.name1} onChange={this.clear} placeholder="enter email"></input><br></br>
                    <button onClick={()=>this.email()}>SUBMIT</button>

                </form>
            </div>
        )

        
    }
}
export default Email