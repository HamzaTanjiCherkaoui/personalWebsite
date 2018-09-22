import React from 'react';
import './PostsList.css';
import PostsListItem from '../../components/postsListItem/PostsListItem';

const PostsList = ({posts}) => {
    return (
        <ul className="blog">
              {posts.map(post => {
                 return ( <PostsListItem {...post} />)
              })}  
              </ul>
    )
}

export default PostsList;