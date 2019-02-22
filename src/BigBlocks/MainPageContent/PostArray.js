import React from 'react'
import Post from './Post/Post'
import f from "./Posts.module.css";
export default function Postarray({posts}) {

    //console.log({posts});

    const postElement = posts.map(post => <Post img={post}/>);

    return      <div className={f.grid}>{postElement}</div>

}
