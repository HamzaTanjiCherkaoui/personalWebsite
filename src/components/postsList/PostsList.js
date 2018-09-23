import React from 'react';
import './PostsList.css';
import PostsListItem from '../../components/postsListItem/PostsListItem';

const PostsList = ({posts}) => {
    return (
        <ul className="blog">
              {posts.map(post => {
                 return ( <PostsListItem key={post.id} {...post} />)
              })}  
              </ul>
    )
}

export default PostsList;