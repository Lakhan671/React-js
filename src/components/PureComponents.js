import React, { Component } from 'react'
import MemoComponent from './MemoComponent';


 class PureComponents extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:'lakhan'
         }
     }
     
     componentDidMount(){
         setInterval(()=>{
             this.setState({
                 name:'lakhan'
             });
         },2000)
     }
    render() {
        console.log('pure component');
        return (
            <div>
         <MemoComponent name={this.state.name}/>
            </div>
        )
    }
}

export default PureComponents
