import React from 'react';

import arrayPosts from './../PostsLists/PostsList'


const Search=(id)=> {
    for (var i = 0; i < arrayPosts.length; i++) {
        if (arrayPosts[i].id === id){ return i;
            break;}
        }return false;
   }

export default Search