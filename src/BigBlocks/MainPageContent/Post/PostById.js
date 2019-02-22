import React from 'react';
import arrayPosts from './../PostsLists/PostsList'
import Post from "./Post";
import {Redirect} from 'react-router-dom'
import Search from "./Search";


class PostById extends React.Component {
    checkIn;
    post;
    render() {
        const id = this.props.match.params.id;
        if(Search(id)===false){this.checkIn=false}else{this.checkIn=true;
        this.post=arrayPosts[Search(id)] ;
        }
       console.log(this.post);
         if(this.checkIn===false) return <Redirect to='/main'/>;
        if (this.checkIn===true){ return  <Post img={this.post}/>;}

       }



}


export default PostById