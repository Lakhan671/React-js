import React, { Component } from 'react'

export class FormHandlingComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comment: '',
            topic:''
        }
    }

    handelUsername = (event) => {
        this.setState({
            username: event.target.value,
            


        })
    }
    commentchange = (event) => {
        this.setState({
            comment: event.target.value
        });
    }

    topicChange = (event) => {
        this.setState({
            topic: event.target.value
        });
    }
    handleSubmit=event=>{
       alert(`${this.state.username}`); 
       event.preventDefault();
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    Form Component
                <input type="text" value={this.state.username} onChange={this.handelUsername} />
                </div>
                <div>
                    <label>comment</label>
                    <textarea value={this.state.comment} onChange={this.commentchange}></textarea>
                </div>

                <div>
                <label>topic</label>
                <select value={this.state.topic} onChange={this.topicChange}>
                    <option value="react">react</option>
                    <option value="java">java</option>
                    <option value="hibernate">hibernate</option>
                    </select>
                </div>
                <button type="submit">submit</button>
               
            
            </form>
                    )
    }
}

export default FormHandlingComponent
