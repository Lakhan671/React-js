import React, { Component } from 'react'

export class Users extends Component {
    render() {
        return (
            <div>
                {this.props.render(true)}
            </div>
        )
    }
}

export default Users
