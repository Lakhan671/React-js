import React, { Component } from 'react'
import { Input } from './Input';

class FocusInput extends Component {
    constructor(props) {
        super(props)

        this.componentRef = React.createRef();

    }
    //ref is use for focus
    componentDidMount() {
        if (this.cbRef) {
            this.cbRef.focus();
        }
        //this.inputRef.current.focus();
        //console.log( this.inputRef);
    }
    clickHandler=()=>{
        this.componentRef.current.focusInput();
    }
    render() {
        return (
            <div>
                <Input ref={this.componentRef} />
                <button onClick={this.clickHandler}>focus input</button>
            </div>
        )
    }
}

export default FocusInput