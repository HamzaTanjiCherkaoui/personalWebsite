import React from 'react';
import './PostsList.css';
import PostsListItem from '../../components/postsListItem/PostsListItem';

const PostsList = ({posts}) => {
    const onReadMore = (post)=> {
        console.log("read more"+post.id);
    }
    return (
        <ul className="blog">
              {posts.map(post => {
                 return ( <PostsListItem onReadMore={()=>onReadMore(post)}key={post.id} {...post} />)
              })}  
              </ul>
    )
}

export default PostsList;