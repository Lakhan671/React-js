import React, { Component } from 'react'
import Card from '@material-ui/core/Card/Card';
import DialogTitle from '@material-ui/core/DialogTitle/DialogTitle';
import axios from 'axios';

class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            errorMsg:''
        }

    }
    componentDidMount() {
      /*   axios.post('user',this.data).then(response=>{
            console.log(response);
        }).catch(error=>{
            console.log(error);
        });*/

        //let data = axios.get('https://jsonplaceholder.typicode.com/users-1').
        let data = axios.get('https://jsonplaceholder.typicode.com/users').
            then(response => {
                this.setState({ posts: response.data });
            }).catch(error => {
                console.log(error);
                this.setState({errorMsg:'Error in retriving the data'});
            });
    }

    render() {
        const {errorMsg,posts} = this.state;
        return (
            <div>
                {posts.length?posts.map(post=><div key={post.id}>{post.name}</div>):''}
                {errorMsg.length?<div>{errorMsg}</div>:''}
            </div>
        )
    }
}

export default PostList
