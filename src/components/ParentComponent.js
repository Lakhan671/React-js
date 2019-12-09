import React, { Component } from 'react'
import ChildComponrnt from './ChildComponrnt';

 class ParentComponent extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              parentName:'parent'
         }
         this.greetingParent=this.greetingParent.bind(this);
     }
     
     greetingParent(childname){
         alert(`hello ${this.state.parentName} from ${childname}`);
     }
    render() {
        return (
            <div>
<ChildComponrnt greethandler={this.greetingParent}/>

            </div>
                
            
        )
    }
}

export default ParentComponent
