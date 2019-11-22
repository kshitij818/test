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
        {
            var flag;
            var y= this.state.name1;
            var x= y.split("");
            for(let i=0;i<=x.length;i++)
                 {
                    if(x[i]=="@" )
                     { flag=1;
                     }
                 }
             for(let j=0;j<=x.length;j++)
                 {
                    if(x[j]==".")
                    {flag= flag+1;} 
                  }    
                    if(flag>=2)
                      {alert("email is correct");}
                      else if(flag<2)
                       {alert("email is missing . or @character");}
                       
                     
                           else{alert("incorrect email");}
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