import React, { Component } from 'react'
import { ComponentD } from './ComponentD';

export class ComponentB extends Component {
    render() {
        return (
            <div>
                <ComponentD/>
            </div>
        )
    }
}

export default ComponentB
