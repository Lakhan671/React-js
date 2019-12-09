import React, { Component } from 'react'

 class EventBind extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              message:'Hello'
         }
         //click3
        //  this.onClickEvent=this.onClickEvent.bind(this);
     }
     //4 type
     onClickEvent=()=>{
    // onClickEvent(){
         this.setState({
             message:'good by'
         });
         console.log(this);
     }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.onClickEvent.bind(this)} >click1</button>
                <button onClick={()=>this.onClickEvent()} >click2</button>
                { <button onClick={this.onClickEvent} >click3</button> }
            </div>
        )
    }
}

export default EventBind
