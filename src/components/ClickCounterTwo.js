import React, { Component } from 'react'

export class ClickCounterTwo extends Component {
  
    render() {
        const {count,incrementCount}=this.props;
        return (
            <div>
             <button onClick={incrementCount} >click {count} times</button>  
            </div>
        )
    }
}

export default ClickCounterTwo
