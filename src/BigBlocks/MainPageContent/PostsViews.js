import React, {Component} from 'react'
import posts from './PostsLists/PostsList'
import PostArray from "./PostArray";

class PostsViews extends Component {
    render() {
        return (
            <div >
               <PostArray posts={posts} />
            </div>
        )
    }
}
export default PostsViews