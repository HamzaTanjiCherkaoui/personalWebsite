import React from 'react';
import './PostsListItem.css';

const PostsListItem = ({title, timestamp , onReadMore}) => {
    return (
        <li>
            <p className="title">{title}
            </p>
            <p className="timestamp">{timestamp}</p>
            <a onClick={onReadMore} >Read more</a>
        </li>

    )
}
export default PostsListItem;