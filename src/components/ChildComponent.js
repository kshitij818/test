import React from 'react'
import ParentComponent from'./ParentComponent'

function ChildComponent(props) {
    return (
        <div>
           <button onCLlick={()=>this.greetHandler('child')}>GREET PARENT</button> 
        </div>
    )
}

export default ChildComponent
