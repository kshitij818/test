import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

 class ParentComponent extends Component {
     constructor() {
         super()
     
         this.state = {
              parent:'parent'
         }
       this.greetParent=this.greetParent.bind(this) 
     }
     greetParent(childName){
         alert(`heloo ${this.state.parent} from ${childName}`);
     }
    render() { 

    
    return (
            <div>
             <ChildComponent greetHandler={this.greetParent}/> 
            </div>
        )
    }
}

export default ParentComponent
