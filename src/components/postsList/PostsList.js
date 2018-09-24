import React from 'react';
import './PostsList.css';
import PostsListItem from '../../components/postsListItem/PostsListItem';
import {
    withRouter
  } from 'react-router-dom'
  
const PostsList = ({posts,history}) => {
    const onReadMore = (post)=> {
        history.push('/post/'+post.id);
    }
    return (
        <ul className="blog">
              {posts.map(post => {
                 return ( <PostsListItem onReadMore={()=>onReadMore(post)}key={post.id} {...post} />)
              })}  
              </ul>
    )
}

export default withRouter(PostsList);